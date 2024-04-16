import React from "react";
import App from "./App.jsx";
import ReactDOM  from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Контейнер rootElement не найден. Не удалось вмонтировать реакт приложение');
}
const root = ReactDOM.createRoot(rootElement);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);