import React, { forwardRef } from 'react';
import { TextFieldStyle } from './TextFieldStyle';

interface TextFieldType {
  id: string;
  placeholder?: string;
  disabled?: boolean;
  value: string;
  onChange?: (e: any) => void;
  onKeyDown?: (e: any) => void;
}

const TextField = forwardRef(function TextField({
  id,
  placeholder,
  value,
  disabled,
  onChange,
  onKeyDown,
}: TextFieldType) {
  return (
    <TextFieldStyle
      id={id}
      placeholder={placeholder}
      disabled={disabled ? disabled : false}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      autoComplete="off"
    />
  );
});

export { TextField };
