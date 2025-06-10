import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const FormInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  readOnly = false,
  required = false,
  pattern,
  minLength,
  maxLength,
  multiline = false,
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const inputClassName = `w-full border rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 ${
    error ? "border-red-500" : "border-gray-300"
  } focus:ring-[#5B8C51] disabled:bg-gray-100 disabled:cursor-not-allowed ${className}`;

  return (
    <div className="flex flex-col gap-1 mb-4 w-full">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        {multiline ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            pattern={pattern}
            minLength={minLength}
            maxLength={maxLength}
            className={`${inputClassName} resize-y min-h-[100px] pr-4`} // remove pr-10 for textarea
          />
        ) : (
          <input
            id={name}
            name={name}
            type={isPassword && showPassword ? "text" : type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            pattern={pattern}
            minLength={minLength}
            maxLength={maxLength}
            className={inputClassName}
          />
        )}

        {isPassword && !multiline && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;