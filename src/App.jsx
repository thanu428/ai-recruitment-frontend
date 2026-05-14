
import { Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import MCQPage from "./pages/MCQPage";
import VoiceInterviewPage from "./pages/VoiceInterviewPage";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {

  return (

    <Routes>

      <Route
        path="/"
element={<RegisterPage />}
      />
      <Route
  path="/home"
  element={<HomePage />}
/>

      <Route
        path="/resume"
        element={<JobsPage />}
      />

      <Route
        path="/mcq"
        element={<MCQPage />}
      />

      <Route
        path="/voice"
        element={<VoiceInterviewPage />}
      />

      <Route
        path="/analytics"
        element={<AnalyticsPage />}
      />

    </Routes>
  );
}

export default App;
