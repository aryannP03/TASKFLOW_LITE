import React from 'react'
import { Controller } from 'react-hook-form'

function Input( {config, control}) {

    const { name, label, options = [], rules,placeholder, className = "" } = config
    return (
        <Controller 
        name = {name}
        control = {control}
        rules = {rules}
        render= {({ field, fieldState }) => (

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
        )}
        />

    )
}

export default Input
