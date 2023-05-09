import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MovieDetail from "./routes/MovieDetail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
