import React from 'react';
 import './../NodesEdgesTable.css'; 


function NodesEdgesTable({ nodes, edges }) {
  // Extract node labels for table headings
  const nodeHeadings = nodes.map((node) => (
    <th key={node.id}>{node.data.label}</th>
  ));

  // Map edges to table rows
  const edgeRows = edges.map((edge) => (
    <tr key={edge.id}>
      <td>{edge.id}</td>
      {/* For simplicity, only display edge ID in the first cell, leaving others empty */}
      {nodes.map((node) => (
        <td key={node.id}> </td>
      ))}
    </tr>
  ));

  return (
    <table className="table-nodes-edges">
      <thead>
        <tr>
          <th>Edge / Node</th>
          {nodeHeadings}
        </tr>
      </thead>
      <tbody>
        {edgeRows}
      </tbody>
    </table>
  );
}

export default NodesEdgesTable;
