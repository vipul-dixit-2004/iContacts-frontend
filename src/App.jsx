import { useState } from "react";
import Dashboard from "./routes/pages/Dashboard";
import Login from "./routes/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./routes/pages/Signup";
function App() {
  return (
    <div className="h-4/5 p-1 w-3/5 bg-slate-700 flex">
      <BrowserRouter>
        <Routes>
          <Route path="/iContacts-frontend/Dashboard" element={<Dashboard />} />
          <Route path="/iContacts-frontend/Login" element={<Login />} />
          <Route path="/iContacts-frontend/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
