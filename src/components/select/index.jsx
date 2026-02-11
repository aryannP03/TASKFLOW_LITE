import React from "react";
import { Controller } from "react-hook-form";

function Select({ config, control }) {
  const { name, label, options = [], rules, className = "" } = config;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className={`mb-4 text-left ${className}`}>
          <label className="block text-sm font-medium text-white mb-1">
            {label}
          </label>

          <select
            {...field}
            className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none text-white bg-bg-input-field"
          >
            <option value="">Select {label}</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          {fieldState.error && (
            <p className="text-red-500 text-xs mt-1">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}

export default Select;