import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResourceDetail from './pages/ResourceDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resource/:id" element={<ResourceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
