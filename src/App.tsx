import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Layout from "./component/layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
