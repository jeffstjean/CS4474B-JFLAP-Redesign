import React from 'react';
import './../SidePane.css';

const ErrorList = ({ errors }) => {
  if (!errors || errors.length === 0) return null; // Don't render if there are no errors

  return (
    <div className="error-list">
      <h3>Errors</h3>
      <ul>
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorList;
