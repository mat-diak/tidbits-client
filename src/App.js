import Dashboard from "./pages/Dashboard";
import Hello from "./pages/Hello";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const App = () => {
  return (
    <>
      <Router>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/hello" element={<Hello />} />
          </Routes>
        </Container>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
