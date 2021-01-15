import React from "react";
import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";

export default function NewPlace() {
  return (
    <form action="" className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="Please enter valid title"
      />
    </form>
  );
}
