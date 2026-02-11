import React from 'react'
import { Controller } from 'react-hook-form';

function Checkbox( {config, control} ) {
    
    const { name, label, options = [], rules, className = "" } = config;
    return (
        <Controller 
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (     
            
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
            )}
        />
    )
}

export default Checkbox
