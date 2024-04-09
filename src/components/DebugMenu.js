import React from 'react';
import './../DebugMenu.css';

const DebugMenu = ({ isError }) => {
  const handlePlay = () => {
    console.log('Play clicked');
  };

  const handlePause = () => {
    console.log('Pause clicked');
  };

  const handleLeft = () => {
    console.log('Left clicked');
  };

  const handleRight = () => {
    console.log('Right clicked');
  };

  return (
    <div className={`debugMenu ${isError ? 'disabled' : ''}`}>
      <button title= "Run Simulation" onClick={handlePlay} className="debugButton play">
        <span className="material-icons">play_arrow</span>
      </button>
      <button title="Pause Simulation"onClick={handlePause} className="debugButton pause">
        <span className="material-icons">pause</span>
      </button>
      <button title="Step Back"onClick={handleLeft} className="debugButton left">
        <span className="material-icons">arrow_back</span>
      </button>
      <button title="Step Forward"onClick={handleRight} className="debugButton right">
        <span className="material-icons">arrow_forward</span>
      </button>
    </div>
  );


};

export default DebugMenu;
