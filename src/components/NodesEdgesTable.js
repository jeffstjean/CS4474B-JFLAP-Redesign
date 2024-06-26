import React from 'react';
import './../NodesEdgesTable.css';

function NodesEdgesTable({ nodes, edges , hoveredNodeId, setHoveredNodeId, hoveredEdgeId, setHoveredEdgeId}) {
  const edgeHeadings = edges.map((edge) => (
    <th key={edge.label}>{edge.label}</th>
  ));

const nodeRows = nodes.map((node) => (
  <tr key={node.id}>
    <td
      key={node.id}
      className={node.id === hoveredNodeId ? 'highlighted' : ''}
      onMouseEnter={() => setHoveredNodeId(node.id)}
      onMouseLeave={() => setHoveredNodeId(null)}
    >
      {node.data.label}
    </td>
    {edges.map((edge) => {
      const isConnected = edge.source === node.id;
      const targetNodeLabel = isConnected ? nodes.find(n => n.id === edge.target)?.data.label : '';
      return (
        <td
          key={edge.id}
          onMouseEnter={() => isConnected && setHoveredEdgeId(edge.id)} 
          onMouseLeave={() => setHoveredEdgeId(null)}
        >
          {isConnected ? targetNodeLabel : ''}
        </td>
      );
    })}
  </tr>
));


  return (
    <table className="table-nodes-edges">
      <thead>
        <tr>
          <th></th>
          {edgeHeadings}
        </tr>
      </thead>
      <tbody>
        {nodeRows}
      </tbody>
    </table>
  );
}

export default NodesEdgesTable;
