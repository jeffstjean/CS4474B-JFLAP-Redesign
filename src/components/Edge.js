import React, { useCallback, useMemo, useState, useRef, useEffect } from 'react';
import { getStraightPath, Position, useStore, BaseEdge, EdgeLabelRenderer } from 'reactflow';
import { Constants } from '../Constants';

const getNodeIntersectionCircle = (intersectionNode, targetNode) => {
    const {
        positionAbsolute: intersectionNodePosition,
        width: diameter, // Assuming width = height for a circle
    } = intersectionNode;
    const radius = diameter / 2;
    const center = {
        x: intersectionNodePosition.x + radius,
        y: intersectionNodePosition.y + radius,
    };

    // Target position, assuming the target is a point
    const targetPosition = {
        x: targetNode.positionAbsolute.x + targetNode.width / 2,
        y: targetNode.positionAbsolute.y + targetNode.height / 2,
    };

    // Calculate direction vector from the center to the target
    let dx = targetPosition.x - center.x;
    let dy = targetPosition.y - center.y;

    // Calculate the distance from the center to the target
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Normalize the direction vector
    dx /= distance;
    dy /= distance;

    // Calculate the intersection point
    const x = center.x + radius * dx;
    const y = center.y + radius * dy;

    return { x, y };
};

const getEdgePosition = (node, intersectionPoint) => {
    const n = { ...node.positionAbsolute, ...node };
    const nx = Math.round(n.x);
    const ny = Math.round(n.y);
    const px = Math.round(intersectionPoint.x);
    const py = Math.round(intersectionPoint.y);
  
    if (px <= nx + 1) {
        return Position.Left;
    }
    if (px >= nx + n.width - 1) {
        return Position.Right;
    }
    if (py <= ny + 1) {
        return Position.Top;
    }
    if (py >= n.y + n.height - 1) {
        return Position.Bottom;
    }
  
    return Position.Top;
}

const getEdgeParams = (source, target, offset) => {
    const sourceIntersectionPoint = getNodeIntersectionCircle(source, target);
    const targetIntersectionPoint = getNodeIntersectionCircle(target, source);
  
    const angle = Math.atan2(targetIntersectionPoint.y - sourceIntersectionPoint.y, targetIntersectionPoint.x - sourceIntersectionPoint.x);
    const offsetX = offset * Math.cos(angle + Math.PI / 2);
    const offsetY = offset * Math.sin(angle + Math.PI / 2);

    return {
        sx: sourceIntersectionPoint.x + offsetX,
        sy: sourceIntersectionPoint.y + offsetY,
        tx: targetIntersectionPoint.x + offsetX,
        ty: targetIntersectionPoint.y + offsetY,
        sourcePos: getEdgePosition(source, sourceIntersectionPoint),
        targetPos: getEdgePosition(target, targetIntersectionPoint),
    };
}

const getOffsetEdgeParams = (source, target, edges) => {
    const oppositeEdge = edges.find(edge => edge.source === target.id && edge.target === source.id);
    let offset = 0;
    if (oppositeEdge) {
        offset = 15;
    }

    return offset;
};

export default function Edge ({ id, source, target, markerEnd, style, selected, data }) {
    const edges = useStore(useCallback(store => store.edges, []));
    const sourceNode = useStore(useCallback((store) => store.nodeInternals.get(source), [source]));
    const targetNode = useStore(useCallback((store) => store.nodeInternals.get(target), [target]));

    const offset = useMemo(() => getOffsetEdgeParams(sourceNode, targetNode, edges), [sourceNode, targetNode, edges]);
    const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(sourceNode, targetNode, offset);

    const [edgePath] = getStraightPath({
        sourceX: sx,
        sourceY: sy,
        sourcePosition: sourcePos,
        targetPosition: targetPos,
        targetX: tx,
        targetY: ty,
    });

    const [isEditing, setIsEditing] = useState(false);

    const labelRef = useRef(null);

    useEffect(() => {
        if (isEditing) {
            const input = labelRef.current;
            input.focus();
            input.select();
        }
    }, [isEditing]);

    const handleDoubleClick = () => {
        setIsEditing(true); // Start editing when label is double-clicked
    };

    const handleChange = (e) => {
        // Call the onLabelChange handler passed from the Editor
        data.onLabelChange(id, e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // Finish editing when Enter key is pressed
            labelRef.current.blur();
        }
    };

    const handleBlur = () => {
        setIsEditing(false); // Stop editing when input loses focus
        // Call the finishLabelEditing handler passed from the Editor
        data.finishLabelEditing(id);
    };

    // Calculate if the edge is mostly horizontal or vertical
    const isMostlyHorizontal = Math.abs(tx - sx) > Math.abs(ty - sy);
    // Decide label offset based on edge orientation
    const labelOffset = isMostlyHorizontal ? { x: 0, y: -10 } : { x: 10, y: 0 };

    const labelStyle = {
        position: 'absolute',
        left: `${(sx + tx) / 2 + labelOffset.x}px`,
        top: `${(sy + ty) / 2 + labelOffset.y}px`,
        transform: `translate(-50%, -50%)`,
        pointerEvents: 'all',
        fontSize: '12px',
        // Choose which side to render the label based on edge slope
        textAlign: isMostlyHorizontal ? 'right' : 'center',
        width: 'max-content',
        maxWidth: '100px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        padding: 0
    }

    const edgeStyle = {
        ...style,
        stroke: selected ? Constants.edge.SELECTED_STROKE_COLOR : Constants.edge.STROKE_COLOR
    }

    return (
        <>
            <BaseEdge id={id} path={edgePath} style={edgeStyle} markerEnd={markerEnd} />
            <EdgeLabelRenderer>
            <div width="100" height="50" style={labelStyle} onDoubleClick={handleDoubleClick}>
                {isEditing ? (
                    <input
                        ref={labelRef}
                        type="text"
                        value={data.label}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        style={{ textAlign: 'center', width: 'auto', fontSize: '12px' }}
                    />
                ) : (
                    <div style={{ textAlign: 'center', pointerEvents: 'none' }}>{data.label}</div>
                )}
            </div>
          </EdgeLabelRenderer>
        </>
      );
};