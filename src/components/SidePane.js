import React from 'react';
import './../SidePane.css'; 
import DebugMenu from './DebugMenu.js'
import NodesEdgesTable from './NodesEdgesTable'; // Make sure to import NodesEdgesTable
import ErrorList from './ErrorList.js';
// Correct the parameter name to match what you're passing from the parent component
const SidePane = ({ isOpen, onClose, nodes, edges, setHoveredNodeId, hoveredNodeId, errors, hoveredEdgeId, setHoveredEdgeId}) => {
    if (!isOpen) return null;
    const isError = errors && errors.length >0;
    return (
        <div className="sidePane">
            <h2>Simulation</h2>
            <p>Run your automata.</p>
            <button onClick={onClose} className="closeButton">X</button>
            <div className="App">
                <DebugMenu isError={isError}/>
                <NodesEdgesTable 
                 nodes={nodes}
                 edges={edges} 
                 setHoveredNodeId={setHoveredNodeId} 
                 hoveredNodeId={hoveredNodeId} 
                 hoveredEdgeId={hoveredEdgeId}
                 setHoveredEdgeId={setHoveredEdgeId}
                 />
                <ErrorList errors={errors} />
            </div>
        </div>
    );
};

export default SidePane;
