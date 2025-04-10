import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import QueryClient and QueryClientProvider
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doc from "./APIdocPage.tsx";
import Info from "./InfoPage.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  
  <StrictMode>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/doc" element={<Doc />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
</StrictMode>
  
);
