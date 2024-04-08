import * as React from "react";
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/28d46a679a80bf5ace415f190b72aca7c7755574658c84e04a4fb54f6a4851fb?apiKey=f85ade9d92be4e92bf330987900cae47&",
    alt: "Project 1",
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/78c042995c16366ab672328750a22385511b1cb367a27e9d7f08625b2368a013?apiKey=f85ade9d92be4e92bf330987900cae47&",
    alt: "Project 2",
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6db29c2708956614bfaed944a84c7c38418097b690724a5fd1743a924c9b8d59?apiKey=f85ade9d92be4e92bf330987900cae47&",
    alt: "Project 3",
  },
];

const menuOptions = {
    file: ['New File', 'Open File', 'Save File'],
    edit: ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'],
    view: ['Zoom In', 'Zoom Out', 'Full Screen'],
    tools: ['Spell Check', 'Word Count'],
    help: ['Documentation', 'Support'],
  };

  
const TopBar = () => {
const [activeMenu, setActiveMenu] = React.useState(null);

const handleMenuClick = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
};

// Added a function to clear the active menu when the mouse leaves the dropdown area
const handleMouseLeave = () => {
    setActiveMenu(null);
};

// Updated to render specific menu options
const renderDropdownMenu = (menuName) => (
    <div className={`dropdown-menu ${activeMenu === menuName ? "active" : ""}`} onMouseLeave={handleMouseLeave}>
    {menuOptions[menuName].map((option, index) => (
        <div key={index} className="dropdown-item">
        {option}
        </div>
    ))}
    </div>
);

return (
    <header className="top-bar">
    {/*
    <nav className="tool-bar">
        {Object.keys(menuOptions).map((menuName) => (
        <div key={menuName} className="tool-bar-item" onClick={() => handleMenuClick(menuName)}>
            {menuName.charAt(0).toUpperCase() + menuName.slice(1)}
            {renderDropdownMenu(menuName)}
        </div>
        ))}
    </nav>
        */}
    <h1 className="title">JFLAP: The Better Version</h1>
    </header>
);
};

const ProjectTypes = () => {
let navigate = useNavigate();

const handleProjectClick = () => {
    navigate('/editor'); // This will change the route to /editor
};

return (
    <div className="project-types">
    <div className="project-grid">
        {projects.map((project) => (
        <div key={project.id} className="project-column" onClick={handleProjectClick}>
            <img src={project.image} alt={project.alt} className="project-image" />
            {/* Add the title and description here if needed */}
        </div>
        ))}
    </div>
    </div>
);
};

const NewProjects = () => (
  <section className="new-projects">
    <div className="new-projects-header">
      <h2 className="new-projects-title">New Project</h2>
      <button className="import-button">Import...</button>
    </div>
    <ProjectTypes />
    <button className="more-button">More...</button>
  </section>
);

// const YourProjects = () => (
//   <section className="your-projects">
//     <h2 className="your-projects-title">Your Projects</h2>
//     <p className="no-projects">No projects yet</p>
//   </section>
// );

const YourProjects = () => {
    const navigate = useNavigate();
    const userProjects = []; // Replace this with your actual state or prop holding the projects
  
    const handlePlaceholderClick = () => {
      navigate('/editor');
    };
  
    return (
      <section className="your-projects">
        <h2 className="your-projects-title">Your Projects</h2>
        {userProjects.length === 0 ? (
          <div className="placeholder-container" onClick={handlePlaceholderClick}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0575a09ece5e5994207b61d3687d39f8f5407b41470167dfa668ec394d1d396f?apiKey=f85ade9d92be4e92bf330987900cae47&width=300"
              alt="No Projects"
              className="img"
            />
            <style jsx>{`
              .placeholder-container {
                display: flex;
                align-items: center; /* Align vertically */
                justify-content: flex-start; /* Align horizontally to the left */
                cursor: pointer; /* Change mouse cursor on hover */
              }
              .img {
                width: 300px; /* Fixed width */
                height: auto; /* Height is adjusted to maintain the aspect ratio */
                object-fit: cover;
                object-position: center;
                margin-right: 0px; /* Add some space to the right of the image */
                margin-left: -590px;
                margin-top: 10px;
                transition: box-shadow 0.3s ease; /* Smooth transition for the shadow */
              }
              .img:hover {
                box-shadow: 0 0 0 2px #ea9c14; /* Orange outline on hover */
              }
              .your-projects {
                display: flex; /* Use flexbox for alignment */
                align-items: center; /* Align vertically */
                justify-content: flex-start; /* Align horizontally to the left */
              }
              .your-projects-title {
                /* Ensure that the title takes up minimal space if not needed */
                white-space: nowrap;
                margin-right: 10px; /* Add space between the title and the image */
              }
            `}</style>
          </div>
        ) : (
          // Render user's projects here when there are some
          <></>
        )}
      </section>
    );
  };
  

function MainMenu() {
  return (
    <>
      <div className="window">
        <TopBar />
        <main className="main-content">
          <NewProjects />
          <YourProjects />
        </main>
      </div>
      <style jsx>{`
        .window {
          background-color: #f7f7f7;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .top-bar {
          background-color: #2c2c2c;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0%;
          color: #fff;
          padding: 10px 20px 0;
          position: relative;
        }

        @media (max-width: 991px) {
          .top-bar {
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }

        .tool-bar {
          display: flex;
          gap: 1px;
          font-size: 24px;
          margin: auto;
        }

        .tool-bar-item {
            font-family: Source Sans Pro, -apple-system, Roboto, Helvetica, sans-serif;
            position: relative; /* Necessary for absolute positioning of dropdowns */
            padding: 15px 10px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
      
        .tool-bar-item:hover {
          background-color: #1d1d1d; // A darker background color on hover
        }

        .dropdown-menu {
            display: none; /* Hide by default, shown on activeMenu state match */
            position: absolute;
            background-color: #2c2c2c;
            padding: 10px;
            border-radius: 4px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            z-index: 1;
            top: 100%; /* Align just below the toolbar item */
            left: 0;
            box-sizing: border-box;
            box-shadow: 0 0 5px 0 rgba(101, 101, 101, 0.5);
        }

        .dropdown-menu.active {
          display: block;
        }

        .dropdown-item {
          color: #fff;
          padding: 5px 0;
          cursor: pointer;
          white-space: nowrap; /* Prevents text from wrapping */
          border-bottom: 1px solid #474747;
        }
        .dropdown-item:hover {
            background-color: #1d1d1d; /* Highlight on hover */
          }
        
          /* Remove the border from the last item */
        .dropdown-item:last-child {
        border-bottom: none;
        }

        .title {
          flex-grow: 1;
          margin: auto;
          font: 500 36px Ubuntu, sans-serif;
          text-align: center;
          font-weight: 700
        }

        .main-content {
          background-color: #2c2c2c;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }

        @media (max-width: 991px) {
          .main-content {
            padding: 0 20px;
          }
        }

        .new-projects {
          display: flex;
          width: 100%;
          max-width: 1214px;
          flex-direction: column;
          align-items: center;
          margin: 17px auto 0;
        }

        .new-projects-header {
          align-self: start;
          display: flex;
          gap: 17px;
          color: #fff;
          font-weight: 700;
          text-align: center;
        }

        .new-projects-title {
          flex-grow: 1;
          margin-right: auto;
          font: 30px Ubuntu, sans-serif;
        }

        .import-button {
            border-radius: 8px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            background-color: #ea9c14;
            color: #fff;
            text-align: center;
            margin: auto;
            padding: 6px 10px;
            font: 700 24px Ubuntu, sans-serif;
            border: none;
            cursor: pointer;
        }

        .import-button:hover, .more-button:hover {
            background-color: #cc7a00; // Darker shade for the button's hover state
            transition: background-color 0.3s ease;
        }

        .project-types {
          width: 100%;
          max-width: 1151px;
          margin: 28px auto 0;
        }

        .project-grid {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .project-grid {
            flex-direction: column;
            gap: 0;
          }
        }

        .project-column {
          width: 33%;
        }

        @media (max-width: 991px) {
          .project-column {
            width: 100%;
          }
        }

        .project-image {
          aspect-ratio: 1.32;
          object-fit: cover;
          width: 100%;
          transition: box-shadow 0.3s ease;
          cursor: pointer; // Change cursor to indicate the item is clickable
        }
        .project-image:hover {
            box-shadow: 0 0 0 2px #ea9c14; // Orange outline
          }

        @media (max-width: 991px) {
          .project-image {
            margin-top: 40px;
          }
        }

        .more-button  {
          border-radius: 8px;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          background-color: #ea9c14;
          color: #fff;
          text-align: center;
          margin: 49px auto 0;
          padding: 6px 10px;
          font: 700 24px Ubuntu, sans-serif;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 991px) {
          .more-button {
            margin-top: 40px;
            padding: 0 20px;
          }
        }

        .your-projects {
          display: flex;
          width: 100%;
          max-width: 1214px;
          flex-direction: column;
          font-weight: 700;
          text-align: center;
          margin: 35px auto 202px;
        }

        @media (max-width: 991px) {
          .your-projects {
            margin-bottom: 40px;
          }
        }

        .your-projects-title {
          color: #fff;
          margin-right: auto;
          font: 30px Ubuntu, sans-serif;
        }

        .no-projects {
          color: #767676;
          margin: 10px auto 0 0;
          font: italic 20px Ubuntu, sans-serif;
        }
      `}</style>
    </>
  );
}

export default MainMenu;
