import React from "react";
import GoalList from "./components/GoalList";

const App = () => {

  const goals = [
    {id: "cg1", text: 'finish'},
    {id: "cg2", text: 'learn'},
    {id: "cg3", text: 'help'},
    {id: "cg4", text: 'achieve'}
  ];

  return (
    <div>
      <h1>Goals</h1>
      <GoalList goals={goals}/>
    </div>
  );
};

export default App;
