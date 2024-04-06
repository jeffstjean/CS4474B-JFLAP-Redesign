import React, { useState } from 'react';
import './../SideToolBar.css'


const SideToolbar = () => {
    const [zoomLevel, setZoomLevel] = useState(1); // Initial zoom level
    const [canvasPosition, setCanvasPosition] = useState({ x: 0, y: 0 }); // Initial canvas position
    const [undoHistory, setUndoHistory] = useState([]); // Array to store undo history
    const [redoHistory, setRedoHistory] = useState([]); // Array to store redo history
    const [isDragging, setIsDragging] = useState(false); // State to track if dragging
    const [draggingState, setDraggingState] = useState(null); // State to track the state being dragged
    const [states, setStates] = useState([]); // State to store added states

    // Function to handle undo action
    const handleUndo = () => {
        // Retrieve the last action from undo history and revert it
        const lastAction = undoHistory.pop();
        if (lastAction) {
            // Apply the inverse of the action
            // Implement your logic to revert the action here
            // Update the canvas state or any other relevant state variables
            // Add the action to the redo history
            setRedoHistory([...redoHistory, lastAction]);
        }
    };

    // Function to handle redo action
    const handleRedo = () => {
        // Retrieve the last undone action from redo history and reapply it
        const lastRedoAction = redoHistory.pop();
        if (lastRedoAction) {
            // Implement your logic to reapply the action here
            // Update the canvas state or any other relevant state variables
            // Add the action back to the undo history
            setUndoHistory([...undoHistory, lastRedoAction]);
        }
    };

    // Function to handle zoom in action
    const handleZoomIn = () => {
        // Increase the zoom level
        setZoomLevel(zoomLevel + 0.1); // Adjust the increment as needed
    };

    // Function to handle zoom out action
    const handleZoomOut = () => {
        // Decrease the zoom level
        setZoomLevel(zoomLevel - 0.1); // Adjust the decrement as needed
    };

    // Function to handle pan action
    const handlePan = (direction) => {
        // Adjust the canvas position based on the direction
        switch (direction) {
            case 'left':
                setCanvasPosition({ ...canvasPosition, x: canvasPosition.x - 10 }); // Adjust the value as needed
                break;
            case 'right':
                setCanvasPosition({ ...canvasPosition, x: canvasPosition.x + 10 }); // Adjust the value as needed
                break;
            case 'up':
                setCanvasPosition({ ...canvasPosition, y: canvasPosition.y - 10 }); // Adjust the value as needed
                break;
            case 'down':
                setCanvasPosition({ ...canvasPosition, y: canvasPosition.y + 10 }); // Adjust the value as needed
                break;
            default:
                break;
        }
    };

    // Function to handle fit to view action
    const handleFitToView = () => {
        // Implement logic to fit the entire canvas within the viewable area
        // Adjust the scale or zoom level and canvas position as needed
    };

    // Function to handle zoom to 100% action
    const handleZoomTo100 = () => {
        // Reset the zoom level to 100%
        setZoomLevel(1);
    };

    // Function to handle adding a state
    const handleAddState = (event) => {
        // Get the position where the state is added
        const x = event.clientX - event.currentTarget.getBoundingClientRect().left - 20; // Adjust based on icon size
        const y = event.clientY - event.currentTarget.getBoundingClientRect().top - 20; // Adjust based on icon size

        // Add the state to the list of states
        const newState = { id: states.length + 1, x, y };
        setStates([...states, newState]);
    };

    // Function to handle mouse down event for drag and drop
    const handleMouseDown = (event, state) => {
        setIsDragging(true);
        setDraggingState(state);
    };

    // Function to handle mouse move event for drag and drop
    const handleMouseMove = (event) => {
        if (isDragging && draggingState) {
            const newState = { ...draggingState, x: event.clientX, y: event.clientY };
            setDraggingState(newState);
        }
    };

    // Function to handle mouse up event for drag and drop
    const handleMouseUp = () => {
        setIsDragging(false);
        setDraggingState(null);
    };

    return (
        <div className="toolbar" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <button className="toolbar-btn" onClick={handleUndo} title="Undo">&#9664;</button>
            <button className="toolbar-btn" onClick={handleRedo} title="Redo">&#9654;</button>
            <button className="toolbar-btn" onClick={handleZoomIn} title="Zoom In">&#128279;</button>
            <button className="toolbar-btn" onClick={() => handlePan('left')} title="Pan Left">&#8617;</button>
            <button className="toolbar-btn" onClick={() => handlePan('right')} title="Pan Right">&#8630;</button>
            <button className="toolbar-btn" onClick={() => handlePan('up')} title="Pan Up">&#8629;</button>
            <button className="toolbar-btn" onClick={() => handlePan('down')} title="Pan Down">&#8627;</button>
            <button className="toolbar-btn" onClick={handleFitToView} title="Zoom to Fit">&#8660;</button>
            <button className="toolbar-btn" onClick={handleZoomTo100} title="Zoom to 100%">&#8613;</button>
            <button className="toolbar-btn" onClick={handleAddState} title="Add State">⬤</button>
        </div>
    );
};

export default SideToolbar;
