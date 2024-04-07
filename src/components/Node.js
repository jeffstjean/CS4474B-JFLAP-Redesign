import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { Constants } from '../Constants'

export default function Node(props) {
    const [isHovered, setIsHovered] = useState(false);
    const label = props.data.label ?? ''

    const nodeStyle = {
        position: 'relative',
        color: Constants.node.TEXT_COLOR,
        backgroundColor: Constants.node.BACKGROUND_COLOR,
        width: Constants.node.DEFAULT_DIAMETER,
        height: Constants.node.DEFAULT_DIAMETER,
        borderWidth: Constants.node.STROKE_WIDTH,
        borderColor: Constants.node.STROKE_COLOR,
        borderRadius: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
