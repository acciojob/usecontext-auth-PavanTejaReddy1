
import React from "react";
import './../styles/App.css';
import { AuthContext } from "./AuthContext";

const App = () => {
  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>
      <p>{isAuthenticated ? "You are now authenticated,you can proceed" : "you are not authenticated"}</p>
      <label><input type="checkbox" checked={isAuthenticated} onChange={toggle}/>I'm not a robot</label>
    </div>
  )
}

export default App;
