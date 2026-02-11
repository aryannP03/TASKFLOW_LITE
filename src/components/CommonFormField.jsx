import React from "react";
import { Controller } from "react-hook-form";
import Select from "./select";
import Checkbox from "./checkbox";
import Input from "./input";

function CommonFormField({ config, control }) {
  const {
    name,
    label,
    type,
    placeholder,
    rules,
    options = [],
    className = ""
  } = config

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => {
        if (type === "select") return <Select config={config} control={control}/>

        if (type === "checkbox") return <Checkbox config={config} control={control} />
    
        return <Input config={config} control={control}/>
        
      }}
    />
  );
}

export default CommonFormField;
