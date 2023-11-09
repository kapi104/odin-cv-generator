import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";

import { Edit } from "./components/edit";
import Cv from "./components/cv";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Edit></Edit>
    <Cv></Cv>
  </React.StrictMode>,
);
