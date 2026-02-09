import React from "react";
import { Controller } from "react-hook-form";

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
        if (type === "select") {
          return (
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
          );
        }

        if (type === "checkbox") {
          return (
            <div className={`mb-4 text-left ${className}`}>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={field.value ?? false}
                  onChange={(e) => field.onChange(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-[#E4A02D]"
                />
                <label className="text-sm font-medium text-white">
                  {label}
                </label>
              </div>

              {fieldState.error && (
                <p className="text-red-500 text-xs mt-1">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          );
        }



        return (
          <div className={`mb-4 text-left ${className}`}>
            <label className="block text-sm font-medium text-white mb-1">
              {label}
            </label>

            <input
              {...field}
              type="text"
              value={field.value ?? ""}
              placeholder={placeholder}
              className="w-full border p-2 focus:ring-2 focus:ring-[#E4A02D] focus:outline-none focus:border-transparent rounded-lg text-white bg-bg-input-field"
            />

            {fieldState.error && (
              <p className="text-red-500 text-xs mt-1">
                {fieldState.error.message}
              </p>
            )}
          </div>
        );
      }}
    />
  );
}

export default CommonFormField;
