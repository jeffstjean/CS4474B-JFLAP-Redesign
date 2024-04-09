import React from 'react';
import './../DebugMenu.css'; // Ensure to create DebugMenu.css

const DebugMenu = ({ isError }) => {
  // Define your debug functions here
  const handlePlay = () => {
    console.log('Play clicked');
    // Add your play/debug action here
  };

  const handlePause = () => {
    console.log('Pause clicked');
    // Add your pause/debug action here
  };

  const handleUp = () => {
    console.log('Up clicked');
    // Add your up/debug action here
  };

  const handleLeft = () => {
    console.log('Left clicked');
    // Add your left/debug action here
  };

  const handleRight = () => {
    console.log('Right clicked');
    // Add your right/debug action here
  };

  return (
    <div className={`debugMenu ${isError ? 'disabled' : ''}`}>
      <button title= "Run Simulation" onClick={handlePlay} className="debugButton play">
        <span className="material-icons">play_arrow</span>
      </button>
      <button title="Pause Simulation"onClick={handlePause} className="debugButton pause">
        <span className="material-icons">pause</span>
      </button>
      {/* <button onClick={handleUp} className="debugButton up">
        <span className="material-icons">arrow_upward</span>
      </button> */}
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
