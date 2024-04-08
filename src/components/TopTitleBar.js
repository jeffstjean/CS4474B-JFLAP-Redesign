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
        </div>
    );
};

export default TopTitlebar;
