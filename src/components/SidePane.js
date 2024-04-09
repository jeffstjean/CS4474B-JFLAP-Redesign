import React, {useState} from 'react';
import './../SidePane.css'; 
import DebugMenu from './DebugMenu.js'
import NodesEdgesTable from './NodesEdgesTable';
import ErrorList from './ErrorList.js';


const SidePane = ({ isOpen, nodes, edges, setHoveredNodeId, hoveredNodeId, errors, hoveredEdgeId, setHoveredEdgeId, simCanRun }) => {
    const [errorsAreOn, setErrorsAreOn] = useState(true)
    errors = errorsAreOn ? errors : []
    if (!isOpen) return null;
    const isError = simCanRun && errors && errors.length >0;
    return (
        <div className="sidePane">
            <h2>Simulation</h2>
            <p>Run your automata.</p>
            <div className="App">
                <DebugMenu isError={isError || !simCanRun}/>
                <NodesEdgesTable 
                 nodes={nodes.filter(n => n.data.label )}
                 edges={edges} 
                 setHoveredNodeId={setHoveredNodeId} 
                 hoveredNodeId={hoveredNodeId} 
                 hoveredEdgeId={hoveredEdgeId}
                 setHoveredEdgeId={setHoveredEdgeId}
                 />
                 <button onClick={() => setErrorsAreOn(!errorsAreOn)}>Debug: Toggle Errors</button>
                <ErrorList errors={errors} />
            </div>
        </div>
    );
};

export default SidePane;
