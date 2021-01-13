import React from "react";

const GoalList = (props) => {
  console.log("🚀 ~ props", props.goals);
  return (
    <ul>
      {props.goals.map((el) => {
        return <li key={el.id}>{el.text}</li>;
      })}
    </ul>
  );
};

export default GoalList;
