import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./styles.css";

// Get the root DOM node
const container = document.getElementById("root");

// Create the root and render the App
const root = createRoot(container);
root.render(<App />);
