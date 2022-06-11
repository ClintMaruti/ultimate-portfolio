import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import WebContent from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <WebContent />
    </React.StrictMode>
);

let Icons = document.querySelectorAll(".navigation .icon");

Icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        changeactive();
        icon.classList.add("active-nav");
    });
});

function changeactive() {
    Icons.forEach((icon) => {
        icon.classList.remove("active-nav");
    });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
