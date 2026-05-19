import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

import UseStatePOC from "./components/hooks/UseStateHook";
import UseEffectPOC from "./components/hooks/UseEffectHook";
import UseContextPOC from "./components/hooks/useContextHook";

function App() {
  return (
    <BrowserRouter>

      {/* Top Navigation */}
      <Navbar />

      {/* Page Content */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        
        {/* Nested Navigation */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route
          path="/useStateHook"
          element={<UseStatePOC />}
        />

        <Route
          path="/useEffectHook"
          element={<UseEffectPOC />}
        />

        <Route
          path="/useContextHook"
          element={<UseContextPOC />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;