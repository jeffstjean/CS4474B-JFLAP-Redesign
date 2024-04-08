import React, { useState, useMemo } from 'react';
import { Handle, Position } from 'reactflow';
import { Constants } from '../Constants'

export default function Node({ data }) {
    const [isHovered, setIsHovered] = useState(false);
    const label = data.label ?? ''

    const doHoverColor = isHovered || data.shouldHover;

    const nodeStyle = {
        position: 'relative',
        color: Constants.node.TEXT_COLOR,
        backgroundColor: doHoverColor ? Constants.node.HOVERED_BACKGROUND_COLOR : Constants.node.BACKGROUND_COLOR,
        width: Constants.node.DEFAULT_DIAMETER,
        height: Constants.node.DEFAULT_DIAMETER,
        outlineWidth: doHoverColor ? Constants.node.HOVERED_STROKE_WIDTH : Constants.node.STROKE_WIDTH,
        outlineColor: doHoverColor? Constants.node.HOVERED_STROKE_COLOR : Constants.node.STROKE_COLOR,
        outlineStyle: 'solid',
        borderRadius: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '0.15s, outline-width 0s'
    };

    return (
        <div 
            onMouseEnter={() => setIsHovered(true) } 
            onMouseLeave={() => setIsHovered(false) }
            style={nodeStyle}
        >
            <Handle
                position={Position.Top}
                isConnectable={true}
                style={{
                    opacity: isHovered ? 1 : 0
                }}
                id='a'
            />
            <Handle
                position={Position.Right}
                isConnectable={true}
                style={{
                    opacity: isHovered ? 1 : 0
                }}
                id='b'
            />
            <Handle
                position={Position.Bottom}
                isConnectable={true}
                style={{
                    opacity: isHovered ? 1 : 0
                }}
                id='c'
            />
            <Handle
                position={Position.Left}
                isConnectable={true}
                style={{
                    opacity: isHovered ? 1 : 0
                }}
                id='d'
            />
            {label}
        </div>
    );
}
