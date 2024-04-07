import React, { useState } from 'react';
import { render } from "react-dom";
import './../SideToolBar.css'

/*
import {
    CommentSVGIcon,
    UndoSVGIcon,
    RedoSVGIcon, // the sprite name for this was 3d_rotation.svg
    RadioButtonUncheckedSVGIcon, // the sprite name for this was 3d_rotation.svg
    CreateSVGIcon,
} from "@react-md/material-icons";
*/
const SideToolbar = ({ onDragStart }) => {
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

    const handleDraw = (event) => {

    };

    const handleComment = (event) => {

    };

    return (
        <div className="sidetoolbar">
            <button className="toolbar-btn" onClick={handleAddState} title="Add State" onDragStart={onDragStart} draggable>
                <span className="material-icons">radio_button_unchecked</span>
            </button>
            <button className="toolbar-btn" onClick={() => handleDraw()} title="Draw">
                <span className="material-icons">draw</span>
            </button>
            <button className="toolbar-btn" onClick={() => handleComment()} title="Comment">
                <span className="material-icons">comment</span>
            </button>
            <button className="toolbar-btn" onClick={handleUndo} title="Undo">
                <span className="material-icons">undo</span>
            </button>
            <button className="toolbar-btn" onClick={handleRedo} title="Redo">
                <span className="material-icons">redo</span>
            </button>
        </div>
    );
};

export default SideToolbar;
