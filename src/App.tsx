import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CounterContextProvider from "./context/CounterContextProvider";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import SettingPage from "./pages/SettingsPage";
import DetailsPage from "./pages/DetailsPage";

const App: React.FC = () => {
  return (
    <CounterContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="details" element={<DetailsPage />} />
        </Routes>
      </Layout>
    </CounterContextProvider>
  );
};

export default App;
