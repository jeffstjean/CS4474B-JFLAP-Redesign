import React, { useState } from 'react';


export default function CommentInput ({ onSubmit, onCancel, onChange, value })  {
    return (
        <input
  autoFocus
  value={value}
  onChange={(e) => onChange(e.target.value)} // Ensure onChange updates the state in Editor
  // Add onBlur for handling clicking off the input
  onBlur={onCancel}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission if wrapped in a form
      onSubmit();
    } else if (e.key === 'Escape') {
        onCancel();
    }
  }}
/>
    );
};