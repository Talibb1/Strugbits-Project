import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import React from "react";

const HomePage = lazy(() => import("../pages/homePage"));
const Week1 = lazy(() => import("../pages/week1"));
const Week2 = lazy(() => import("../pages/week2"));
const Week3 = lazy(() => import("../pages/week3"));
const Week4 = lazy(() => import("../pages/week4"));

const AppRoutes: React.FC = React.memo(() => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/week1" element={<Week1 />} />
        <Route path="/week2" element={<Week2 />} />
        <Route path="/week3" element={<Week3 />} />
        <Route path="/week4" element={<Week4 />} />
      </Routes>
    </Suspense>
  );
});

export default AppRoutes;
