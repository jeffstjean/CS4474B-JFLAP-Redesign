import React, { useState } from 'react';


export default function CommentInput ({ onSubmit, onCancel, onChange, value })  {
    return (
        <input
  autoFocus
  value={value}
  onChange={(e) => onChange(e.target.value)}
  onBlur={onCancel}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    } else if (e.key === 'Escape') {
        onCancel();
    }
  }}
/>
    );
};