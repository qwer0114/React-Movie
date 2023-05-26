import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MovieDetail from "./routes/MovieDetail";
import Home from "./routes/Home";
import Netflix from "./routes/Netflix";
import Disney from "./routes/Disney";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />

        <Route path="/netflix/" element={<Netflix />} />
        <Route path="/disney/" element={<Disney />} />
        <Route path="/disney/:id" element={<Disney />} />
        <Route path="/netflix/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
