import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className, containerClassName, ...props }, ref) => {
        return (
            <div className={`flex flex-col ${containerClassName || ''}`} style={{ width: '100%' }}>
                {label && <label className="mb-1 text-sm font-bold">{label}</label>}
                <input
                    ref={ref}
                    className={`border p-2 w-full ${error ? 'border-red-500' : 'border-gray-300'} ${className || ''}`}
                    style={{ border: '1px solid #ccc', padding: '4px', width: '100%' }}
                    {...props}
                />
                {error && <span className="text-red-500 text-xs">{error}</span>}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
