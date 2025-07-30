import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";

createRoot(document.getElementById("root")).render(<App />);

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("fade-out");

    // Remove completely after animation
    setTimeout(() => {
      preloader.remove();
    }, 500);
  }
});
