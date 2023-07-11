// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home_Page";
import AboutPage from "./pages/About_Page";
import CommandList from "./pages/Command_AboutPage";
import Team from "./pages/Team_AboutPage";
import Success from "./pages/success_Page";
import Server from "./pages/Myserver_Page";
import useAuth from "./auth/useAuth";
import Dashboard from "./pages/Dashboard_Page";
const App = () => {
  const { authenticated, signInWithDiscord, signOutUser } = useAuth();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage signInWithDiscord={signInWithDiscord} />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/CommandList" element={<CommandList />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/server" element={<Server />} />
        <Route path="/Dashboard" element={<Dashboard />} />

        {authenticated && (
          <Route
            path="/Success"
            element={<Success signOutUser={signOutUser} />}
          />
        )}
      </Routes>
    </>
  );
};

export default App;
