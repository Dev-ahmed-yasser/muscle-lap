import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import SharedLayout from "./components/SharedLayout";
const ExerciseDetails = lazy(() => import("./pages/ExerciseDetails"));
const SearchResults = lazy(() => import("./pages/SearchResults"));
const NotFound = lazy(() => import("./pages/NotFound"));
export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SharedLayout />}>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/exercises/:id" element={<ExerciseDetails />} />
          <Route path="/search/:searchkey" element={<SearchResults />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
