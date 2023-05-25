import React from "react";

type TextInputProps = {
  type: string
  name: string
  required?: boolean
  className?: string
  autoComplete?: string
  ref?: React.RefObject<HTMLInputElement>
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ type, name, className, required = true, autoComplete }, ref) => {
    return (
      <input
        type={type}
        name={name}
        className={`rounded-md shadow-sm bg-[#f1f1f1] block w-full  p-2  focus:translate-y-0  ${className}`}
        autoComplete={autoComplete}
        ref={ref}
        required={required}
      />
    )
  },
)
TextInput.displayName = 'TextInput'
export default TextInput
