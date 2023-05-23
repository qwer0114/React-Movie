import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MovieDetail from "./routes/MovieDetail";
import Home from "./routes/Home";
import Netflix from "./routes/Netflix";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/netflix/" element={<Netflix />} />
        <Route path="/netflix/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
