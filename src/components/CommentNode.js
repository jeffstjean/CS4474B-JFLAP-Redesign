import React from 'react';

export default function CommentNode({ data }) {
  return (
    <div style={{ padding: '10px', color: 'red', textDecoration: 'underline' }}>
      {data.text}
    </div>
  );
};
