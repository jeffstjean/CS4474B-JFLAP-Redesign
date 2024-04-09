import React, { useState } from 'react';
import { render } from "react-dom";
import { useNavigate } from 'react-router-dom';
import './../SideToolBar.css'


const SideToolbar = ({ onDragStart, setIsPane, isAddingComment, onComment, onCommentOff, isEmpty }) => {

    const [zoomLevel, setZoomLevel] = useState(1); 
    const [canvasPosition, setCanvasPosition] = useState({ x: 0, y: 0 });
    const [undoHistory, setUndoHistory] = useState([]);
    const [redoHistory, setRedoHistory] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [draggingState, setDraggingState] = useState(null);
    const [states, setStates] = useState([]);
    const [isPaneOpen, setIsPaneOpen] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        if (selectedButton === buttonName) {
            setSelectedButton(null);
        } else {
            setSelectedButton(buttonName);
        }
    }
    const handleUndo = () => {
        onCommentOff();
        const lastAction = undoHistory.pop();
        if (lastAction) {
            setRedoHistory([...redoHistory, lastAction]);
        }
    };

    const handleRedo = () => {
        onCommentOff();
        const lastRedoAction = redoHistory.pop();
        if (lastRedoAction) {
            setUndoHistory([...undoHistory, lastRedoAction]);
        }
    };

    const handleAddState = (event) => {
        onCommentOff();
        const x = event.clientX - event.currentTarget.getBoundingClientRect().left - 20; // Adjust based on icon size
        const y = event.clientY - event.currentTarget.getBoundingClientRect().top - 20; // Adjust based on icon size

        const newState = { id: states.length + 1, x, y };
        setStates([...states, newState]);
    };


    const handleDraw = (event) => {
        onCommentOff(event);
        handleButtonClick('draw');
    };

    const handleComment = (event) => {
        onComment(event)
        handleButtonClick('comment');
    };

    const navigate = useNavigate();
    const handleHome = (event) => {
        onCommentOff(); // Turn off commenting, if needed
        // Display native confirm dialog
        const confirmReturn = window.confirm("Are you sure you want to return to the main menu?");
        if (confirmReturn) {
            navigate('/'); // Only navigate if the user confirmed the action
        }
    };

    // Toggle side pane
    const toggleSidePane = () => {
        onCommentOff();
        setIsPaneOpen(!isPaneOpen);
        setIsPane(!isPaneOpen);
        handleButtonClick('togglePane');
    };

    return (
        <div className="sidetoolbar">
            <button className="toolbar-btn" onClick={handleHome} title="Return to Main Menu">
                <span className="material-icons">home</span>
            </button>
            <div className="separator"></div>
            <button className="toolbar-btn" onClick={handleAddState} title="Add Node" onDragStart={onDragStart} draggable>
                <span className="material-icons">radio_button_unchecked</span>
            </button>
            <button
                className={`toolbar-btn ${selectedButton === 'draw' ? 'selected' : ''}`}
                onClick={handleDraw}
                title="Draw"
            >
                <span className="material-icons">draw</span>
            </button>
            <button className="toolbar-btn" onClick={() => handleComment()} title="Comment" style={{ backgroundColor: isAddingComment ? '#4caf50': '#424242' }}>
                <span className="material-icons">comment</span>
            </button>
            <button className="toolbar-btn" onClick={handleUndo} title="Undo" style={{ backgroundColor: isEmpty ? '#222222': '#424242' }}>
                <span className="material-icons">undo</span>
            </button>
            <button className="toolbar-btn" onClick={handleRedo} title="Redo" style={{ backgroundColor: isEmpty ? '#222222': '#424242' }}>
                <span className="material-icons">redo</span>
            </button>
            <button
                className="toolbar-btn sidepane-toggle"
                onClick={toggleSidePane}
                title="Open/Close Side Pane"
                style={{
                    transform: `translateX(${isPaneOpen ? '-530px' : '0px'}) ${isPaneOpen ? 'rotate(0deg)' : 'rotate(180deg)'}`
                }}
            >
                <span className="material-icons">
                    double_arrow
                </span>
            </button>
        </div>
    );
};

export default SideToolbar;
