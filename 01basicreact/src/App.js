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
import UseCallbackPOC from "./components/hooks/UseCallbackHook";
import UseMemoPOC from "./components/hooks/UseMemoHook";
import UseRefPOC from "./components/hooks/UseRefHook";
import UseReducerPOC from "./components/hooks/useReducerHook";
import Login from "./components/antD";

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

        <Route
          path="/useCallbackHook"
          element={<UseCallbackPOC />}
        />

        <Route
          path="/useMemoHook"
          element={<UseMemoPOC />}
        />

        <Route
          path="/useRefHook"
          element={<UseRefPOC />}
        />

        <Route
          path="/useReducerHook"
          element={<UseReducerPOC />}
        />

      </Routes>
<table border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Department</th>
      <th>Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sagar</td>
      <td>IT</td>
      <td>50000</td>
    </tr>
    <tr>
      <td>Aarush</td>
      <td>HR</td>
      <td>40000</td>
    </tr>
  </tbody>
</table>
<Login></Login>
    </BrowserRouter>
 
  );
}

export default App;