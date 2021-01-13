import React, { useState } from "react";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {

  const [goals, setGoals] = useState([
    { id: "cg1", text: "finish" },
    { id: "cg2", text: "learn" },
    { id: "cg3", text: "help" },
    { id: "cg4", text: "achieve" },
  ])


  const addNewGoalHandler = (newGoal) => {
    // setGoals(goals.concat(newGoal)); 
    setGoals((prevGoals) =>  prevGoals.concat(newGoal)); 
  };

  return (
    <div>
      <h1>Goals</h1>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={goals} />
    </div>
  );
};

export default App;
