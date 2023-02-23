import React from "react";
import Assetupload from "./components/QR/Assetupload.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import mongo from "./components/QR/mongo.py";

const App = () => {
  return (
    <div>
      <Assetupload />
      <mongo />
    </div>
  );
};

export default App;
