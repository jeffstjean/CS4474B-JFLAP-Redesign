import React from 'react';
import './../NodesEdgesTable.css';

function NodesEdgesTable({ nodes, edges , hoveredNodeId, setHoveredNodeId}) {
  // Extract edge IDs for table headings
  const edgeHeadings = edges.map((edge) => (
    <th key={edge.id}>{edge.id}</th>
  ));

  // Map nodes to table rows, including a cell for each edge
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
        // Determine if the current node is either the source or target of the edge
        // This part might need adjustment based on how your edge data is structured
        const isConnected = edge.source === node.id || edge.target === node.id;
        // If connected, you might want to display some symbol or the edge ID
        return (
          <td key={edge.id}>{isConnected ? '' : ''}</td>
        );
      })}
    </tr>
  ));

  return (
    <table className="table-nodes-edges">
      <thead>
        <tr>
          <th>State / Transition</th>
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
