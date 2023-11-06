import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextProvider } from "./features/chatSystem/context/AuthContext";
import { ChatContextProvider } from "./features/chatSystem/context/ChatContext"; // Correct the import for ChatContextProvider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </ChatContextProvider>
  </AuthContextProvider>
);
