import React, { forwardRef } from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options: { value: string; label: string }[];
    containerClassName?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ label, error, options, className, containerClassName, ...props }, ref) => {
        return (
            <div className={`flex flex-col ${containerClassName || ''}`} style={{ width: '100%' }}>
                {label && <label className="mb-1 text-sm font-bold">{label}</label>}
                <select
                    ref={ref}
                    className={`border p-2 w-full ${error ? 'border-red-500' : 'border-gray-300'} ${className || ''}`}
                    style={{ border: '1px solid #ccc', padding: '4px', width: '100%' }}
                    {...props}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && <span className="text-red-500 text-xs">{error}</span>}
            </div>
        );
    }
);

Select.displayName = 'Select';

export default Select;
