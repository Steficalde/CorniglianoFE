import React from 'react'

type TextInputProps = {
  type: string
  name: string
  required?: boolean
  className?: string
  autoComplete?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string | number
}

const LabelTextInput = ({
  type,
  name,
  className,
  required = true,
  autoComplete,
  onChange,
  value = '',
}: TextInputProps) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {name.slice(0, 1).toUpperCase() + name.slice(1)}
      </label>
      <input
        onChange={(e) => onChange(e)}
        value={value}
        type={type}
        name={name}
        className={`rounded-md shadow-sm bg-[#f1f1f1] block w-full  p-2  focus:translate-y-0  ${className}`}
        autoComplete={autoComplete}
        required={required}
      />
    </div>
  )
}
export default LabelTextInput
