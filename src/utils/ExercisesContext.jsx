import { createContext, useContext, useState } from "react";

const exercisesContext = createContext();
export const useExercisesContext = () => useContext(exercisesContext);
export default function ExercisesContext({ children }) {
  const [exercises, setExercises] = useState([]);
  return (
    <exercisesContext.Provider value={{ exercises, setExercises }}>
      {children}
    </exercisesContext.Provider>
  );
}
