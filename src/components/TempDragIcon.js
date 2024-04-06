import React from 'react';


// TODO: replace with side menu bar
export default function TempDragIcon({ onDragStart }) {
    return (
        <div
            style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                cursor: 'grab',
            }}
            onDragStart={onDragStart}
            draggable
        >
            {/* Node creation icon */}
            <div style={{ width: '20px', height: '20px', backgroundColor: 'skyblue' }}></div>
        </div>
    );
}