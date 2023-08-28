import { useState } from "react";
import React from "react";

export const useForm = (initialState = {}) => {
  const [form, setform] = React.useState(initialState);

  const handleChanges = ({ target }) => {
    const { name, value } = target;

    setform({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    setform,
    handleChanges,
  };
};
