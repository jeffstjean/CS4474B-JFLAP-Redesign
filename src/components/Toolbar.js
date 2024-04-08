// Toolbar.js
import React, { useState } from "react";

const menuOptions = {
  file: ['New File', 'Open File', 'Save File'],
  edit: ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'],
  view: ['Zoom In', 'Zoom Out', 'Full Screen'],
  tools: ['Automata Check'],
  help: ['Documentation', 'Support'],
};

const Toolbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const renderDropdownMenu = (menuName) => {
    return (
      <div 
        className={`dropdown-menu ${activeMenu === menuName ? "active" : ""}`} 
        onMouseLeave={handleMouseLeave}
      >
        {menuOptions[menuName].map((option, index) => (
          <div key={index} className="dropdown-item">{option}</div>
        ))}
      </div>
    );
  };

  return (
    <nav className="tool-bar">
      {Object.keys(menuOptions).map((menuName) => (
        <div key={menuName} className="tool-bar-item" onClick={() => handleMenuClick(menuName)}>
          {menuName.charAt(0).toUpperCase() + menuName.slice(1)}
          {activeMenu === menuName && renderDropdownMenu(menuName)}
          <style jsx>{`
                .tool-bar {
                display: flex;
                gap: 0px;
                font-size: 20px;
                margin-left: 10px;
                }

                .tool-bar-item {
                position: relative;
                padding: 0px 10px;
                padding-bottom: 5px;
                cursor: pointer;
                transition: background-color 0.3s ease;
                }
            
                .tool-bar-item:hover, .tool-bar-item:hover .dropdown-menu {
                background-color: #1d1d1d;
                }

                .dropdown-menu {
                display: none;
                position: absolute;
                background-color: #2c2c2c;
                padding: 10px;
                border-radius: 4px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 0 0 1px #656565;
                z-index: 1;
                top: 100%;
                left: 0;
                }

                .dropdown-menu.active {
                display: block;
                }

                .dropdown-item {
                color: #fff;
                padding: 5px 0;
                cursor: pointer;
                white-space: nowrap;
                border-bottom: 1px solid #474747;
                }

                .dropdown-item:last-child {
                border-bottom: none;
                }

                .dropdown-item:hover {
                background-color: #1d1d1d;
                }
            `}</style>
        </div>
      ))}
    </nav>
  );
};

export default Toolbar;
