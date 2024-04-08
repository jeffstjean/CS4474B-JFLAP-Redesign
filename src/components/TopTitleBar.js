import React, { useState } from 'react';
import './../TopTitleBar.css'
import Toolbar from './Toolbar';

const TopTitlebar = () => {
    const [showViewMenu, setShowViewMenu] = useState(false); // State to control visibility of View menu
    const [projectTitle, setProjectTitle] = useState('My Project'); // Initial state for the project title

    // Function to toggle visibility of View menu
    const toggleViewMenu = () => {
        setShowViewMenu(!showViewMenu);
    };

    return (
        <div className="top-titlebar">
            <Toolbar />
            <input 
                type="text" 
                value={projectTitle} 
                onChange={(e) => setProjectTitle(e.target.value)}
                className="project-title-input" 
            />
            <style jsx>{`
                .project-title-input {
                    flex-grow: 1;
                    margin: 0 10px;
                    font-size: 24px;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 10;
                    background: none;
                    border: none;
                    text-align: center;
                    font-size: 1.5em;
                    color: white; // Adjust the color as needed
                    font-family: 'Ubuntu'; // Adjust the font family as needed
                    
                    // When the user clicks on the input, there will be no border or outline
                    outline: none;
                    border-bottom: 1px solid transparent; // Invisible border by default

                    // When the input is focused, show the border indicating it's editable
                    &:focus {
                        border-bottom: 1px solid white; // Change as needed
                    }
                `}</style>
        </div>
    );
};

export default TopTitlebar;
