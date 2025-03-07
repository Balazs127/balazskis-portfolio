import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProgressionFit from "./pages/ProgressionFit";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ textAlign: "center", padding: "50px" }}>
              <h1>Welcome to Balazs Kis Portfolio</h1>
              <p>This is my personal site hosted on Netlify.</p>
            </div>
          }
        />
        <Route path="/progressionfit" element={<ProgressionFit />} />
        <Route path="/progressionfit/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/progressionfit/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
