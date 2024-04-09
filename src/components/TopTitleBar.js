import React, { useState } from 'react';
import './../TopTitleBar.css'
import Toolbar from './Toolbar';

const TopTitlebar = () => {
    const [showViewMenu, setShowViewMenu] = useState(false); 
    const [projectTitle, setProjectTitle] = useState('My Project');

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
