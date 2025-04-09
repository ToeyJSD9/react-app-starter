import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetEmployees from "./pages/Get.jsx";
import PostEmployee from "./pages/Post.jsx";
import PutEmployee from "./pages/Put.jsx";
import DeleteEmployee from "./pages/Delete.jsx";
import Indetail from "./pages/Indetail.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/add" element={<PostEmployee />} />
        <Route path="/" element={<GetEmployees />} />
        <Route path="/edit/:id" element={<PutEmployee />} />
        <Route path="/delete/:id" element={<DeleteEmployee />} />
        <Route path="/indetail/:id" element={<Indetail />} />
      </Routes>
    </Router>
  );
};

export default App;
