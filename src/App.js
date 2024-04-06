import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainManu'
import Editor from './components/Editor'

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