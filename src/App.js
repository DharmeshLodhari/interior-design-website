import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import ProjectDetail from './ProjectDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
