import React, { useState } from 'react';
import './../TopTitleBar.css'

const TopTitlebar = () => {
    const [showViewMenu, setShowViewMenu] = useState(false); // State to control visibility of View menu

    // Function to toggle visibility of View menu
    const toggleViewMenu = () => {
        setShowViewMenu(!showViewMenu);
    };

    return (
        <div className="top-titlebar">
            <div className="menu-item">File</div>
            <div className="menu-item">Edit</div>
            <div className="menu-item">Tools</div>
            <div className="menu-item">Help</div>
            <div className="project-title">My Project</div>
        </div>
    );
};

export default TopTitlebar;
