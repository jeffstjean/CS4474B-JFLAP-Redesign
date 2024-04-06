
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './components/mainmenu';
import Editor from './components/Editor';
import SideToolbar from './components/SideToolBar';
import TopTitleBar from './components/TopTitleBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </Router>
  );
}

export default App;