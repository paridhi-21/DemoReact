'use client';
import React from 'react';
import { TextField, TextFieldProps, SxProps, Theme } from '@mui/material';

interface AppTextFieldProps extends Omit<TextFieldProps, 'sx'> {
  fieldVariant?: 'dark' | 'light';
  bgColor?: string;
  textColor?: string;
  sx?: SxProps<Theme>; // Added sx prop
}

const AppTextField: React.FC<AppTextFieldProps> = ({
  fieldVariant = 'dark',
  bgColor = '',
  textColor = '',
  sx,
  ...props
}) => {
  const color = fieldVariant === 'dark' ? 'primary' : 'secondary';

  const commonStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: 8,
      backgroundColor: bgColor,
      color: textColor,
      transition: 'all 0.3s ease',
    },
    '& .MuiInputLabel-root': {
      color: textColor || (fieldVariant === 'dark' ? 'primary.main' : 'secondary.main'),
    },
    ...sx, // Spread the sx prop into commonStyles
  };

  return (
    <TextField
      variant="outlined"
      color={color}
      sx={commonStyles}
      {...props}
    />
  );
};

export default AppTextField;