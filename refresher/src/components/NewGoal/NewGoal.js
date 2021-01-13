import React, { useState } from "react";

import "./NewGoal.css";

const NewGoal = (props) => {
  const [goalTitle, setGoalTitle] = useState("");
  const addGoalHandler = (e) => {
    e.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: goalTitle,
    };
    setGoalTitle("");
    props.onAddGoal(newGoal);
  };

  const titleChangeHandler = (e) => {
    setGoalTitle(e.target.value);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={goalTitle} onChange={titleChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
