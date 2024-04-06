// import React from 'react';
//  import './../NodesEdgesTable.css'; 


// function NodesEdgesTable({ nodes, edges }) {
//   // Extract node labels for table headings
//   const nodeHeadings = nodes.map((node) => (
//     <th key={node.id}>{node.data.label}</th>
//   ));

//   // Map edges to table rows
//   const edgeRows = edges.map((edge) => (
//     <tr key={edge.id}>
//       <td>{edge.id}</td>
//       {/* For simplicity, only display edge ID in the first cell, leaving others empty */}
//       {nodes.map((node) => (
//         <td key={node.id}> </td>
//       ))}
//     </tr>
//   ));

//   return (
//     <table className="table-nodes-edges">
//       <thead>
//         <tr>
//           <th>Edge / Node</th>
//           {nodeHeadings}
//         </tr>
//       </thead>
//       <tbody>
//         {edgeRows}
//       </tbody>
//     </table>
//   );
// }

// export default NodesEdgesTable;

import React from 'react';
import './../NodesEdgesTable.css';

function NodesEdgesTable({ nodes, edges }) {
  // Extract edge IDs for table headings
  const edgeHeadings = edges.map((edge) => (
    <th key={edge.id}>{edge.id}</th>
  ));

  // Map nodes to table rows, including a cell for each edge
  const nodeRows = nodes.map((node) => (
    <tr key={node.id}>
      <td>{node.data.label}</td>
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
          <th>Node / Edge</th>
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
