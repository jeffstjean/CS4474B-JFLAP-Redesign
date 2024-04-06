import React from 'react';
import './../SidePane.css'; 
import DebugMenu from './DebugMenu.js'
import NodesEdgesTable from './NodesEdgesTable'; // Make sure to import NodesEdgesTable

const SidePane = ({ isOpen, onClose, nodes, edges }) => {
    if (!isOpen) return null;

  return (
    <div className="sidePane">
      <h2>Title</h2>
      <p>This is some content inside the side pane. Feel free to customize it.</p>
      <button onClick={onClose} className="closeButton">X</button>
      <div className="App">
      <DebugMenu />
      <NodesEdgesTable nodes={nodes} edges={edges} />

      {/* Other components */}
    </div>
    </div>
  );
};

export default SidePane;
