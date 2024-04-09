import * as React from "react";
import { useNavigate } from 'react-router-dom';
import './../mainmenu.css'

const projects = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/28d46a679a80bf5ace415f190b72aca7c7755574658c84e04a4fb54f6a4851fb?apiKey=f85ade9d92be4e92bf330987900cae47&",
    alt: "Finite State Automation",
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/78c042995c16366ab672328750a22385511b1cb367a27e9d7f08625b2368a013?apiKey=f85ade9d92be4e92bf330987900cae47&",
    alt: "Push Down Automation",
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6db29c2708956614bfaed944a84c7c38418097b690724a5fd1743a924c9b8d59?apiKey=f85ade9d92be4e92bf330987900cae47&",
    alt: "Turing Machine",
  },
];
  
const TopBar = () => {
const [activeMenu, setActiveMenu] = React.useState(null);

return (
    <header className="top-bar">
    <h1 className="appTitle">JFLAP: The Better Version</h1>
    </header>
);
};

const ProjectTypes = () => {
let navigate = useNavigate();

const handleProjectClick = () => {
    navigate('/editor');
};

return (
    <div className="project-types">
    <div className="project-grid">
        {projects.map((project) => (
        <div key={project.id} className="project-column" onClick={handleProjectClick}>
            <img src={project.image} alt={project.alt} className="project-image" />
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

// simulate a list of saved projects
const savedProjects = [
    {
      id: 1,
      title: "My Project 1",
      img: "https://cdn.builder.io/api/v1/image/assets/TEMP/59804eb1466f9f52116532242a6b46bb1a9df24213e3c0f0c9a9c2feb5d82616?apiKey=f85ade9d92be4e92bf330987900cae47&width=300",
      lastEdited: "a few seconds ago"
    },
    {
        id: 2,
        title: "My Project Demo",
        img: "https://cdn.builder.io/api/v1/image/assets/TEMP/59804eb1466f9f52116532242a6b46bb1a9df24213e3c0f0c9a9c2feb5d82616?apiKey=f85ade9d92be4e92bf330987900cae47&width=300",
        lastEdited: "69 minutes ago"
      },
      {
        id: 3,
        title: "CS3331 A2",
        img: "https://cdn.builder.io/api/v1/image/assets/TEMP/59804eb1466f9f52116532242a6b46bb1a9df24213e3c0f0c9a9c2feb5d82616?apiKey=f85ade9d92be4e92bf330987900cae47&width=300",
        lastEdited: "an hour ago"
      },
      {
        id: 4,
        title: "DUMMY PDAaaaaaaaaaaa",
        img: "https://cdn.builder.io/api/v1/image/assets/TEMP/59804eb1466f9f52116532242a6b46bb1a9df24213e3c0f0c9a9c2feb5d82616?apiKey=f85ade9d92be4e92bf330987900cae47&width=300",
        lastEdited: "420 days ago"
      },
      {
        id: 5,
        title: "My Project 5",
        img: "https://cdn.builder.io/api/v1/image/assets/TEMP/59804eb1466f9f52116532242a6b46bb1a9df24213e3c0f0c9a9c2feb5d82616?apiKey=f85ade9d92be4e92bf330987900cae47&width=300",
        lastEdited: "a few seconds ago"
      },
  ];
  
  const Project = ({project }) => {
    const navigate = useNavigate();
  
    const openProject = () => {
        navigate(`/editor`);
    };
  
    return (
      <div className="your-project" onClick={openProject}>
        <img src={project.img} alt={project.title} className="your-project-img" />
        <div className="your-project-details">
          <div className="your-project-title">{project.title}</div>
          <div className="your-project-last-edited">{project.lastEdited}</div>
        </div>
        <style jsx>{`

        `}</style>
      </div>
    );
  };
  
  const YourProjects = () => {
    const displayedProjects = savedProjects.slice(0, 4);

    return (
      <section className="your-projects">
        <h2 className="your-projects-title">Your Projects</h2>
        <div className="projects-grid">
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project) => (
            <Project key={project.id} project={project} />
          ))
        ) : (
          <p className="no-projects">No projects yet</p>
        )}
      </div>
      <button className="more-button">More...</button>
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
    </>
  );
}

export default MainMenu;
