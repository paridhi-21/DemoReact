'use client';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import React from 'react';
// Assuming cardRadius is not available, we'll use a hardcoded value
// import { cardRadius } from '@core/constants'; // Uncomment and adjust path if it exists
// const cardRadius = 12; // Uncomment and adjust if you define it locally

import { ButtonProps, CircularProgress, CircularProgressProps, SxProps } from '@mui/material';

interface AppButtonProps extends ButtonProps {
  btnVariant: 'filledDark' | 'filledLight' | 'outlinedDark' | 'outlinedLight' | 'text' | 'icon';
  iconVariant?: 'filledDark' | 'filledLight' | 'outlinedDark' | 'outlinedLight';
  bgColor?: string;
  textColor?: string;
  isCircleBtn?: boolean;
  icon?: React.ReactNode;
  styles?: SxProps;
  loading?: boolean;
  circularProgressProps?: CircularProgressProps;
}

const AppButton: React.FC<AppButtonProps> = ({
  btnVariant,
  iconVariant,
  bgColor = '',
  textColor = '',
  isCircleBtn = false,
  icon,
  children,
  styles = {},
  loading,
  circularProgressProps,
  ...props
}) => {
  const commonStyles = {
    borderRadius: isCircleBtn ? '50%' : 8, // Replaced cardRadius / 8 with 8 for consistency
    backgroundColor: bgColor,
    color: textColor,
    borderColor: textColor,
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  if (btnVariant === 'icon') {
    const iconStyles = {
      backgroundColor:
        iconVariant === 'filledDark'
          ? bgColor || 'primary.main'
          : iconVariant === 'filledLight'
            ? bgColor || 'secondary.main'
            : 'transparent',
      color:
        iconVariant === 'outlinedDark'
          ? textColor || 'primary.main'
          : iconVariant === 'outlinedLight'
            ? textColor || 'secondary.main'
            : iconVariant === 'filledDark'
              ? textColor || 'secondary.main'
              : iconVariant === 'filledLight'
                ? 'primary.main'
                : textColor || 'primary.main',
      border: iconVariant === 'outlinedDark' || iconVariant === 'outlinedLight' ? '1px solid' : 'none',
      borderColor:
        iconVariant === 'outlinedDark'
          ? textColor || 'primary.main'
          : iconVariant === 'outlinedLight'
            ? textColor || 'secondary.main'
            : 'none',
    };
    return (
      <IconButton
        sx={{
          ...commonStyles,
          ...iconStyles,
          '&:hover': {
            backgroundColor: iconStyles.backgroundColor,
          },
          ...styles,
        }}
        {...props}
      >
        {icon}
      </IconButton>
    );
  }

  const muiVariant = btnVariant.startsWith('filled')
    ? 'contained'
    : btnVariant.startsWith('outlined')
      ? 'outlined'
      : 'text';

  const color =
    btnVariant === 'filledDark' || btnVariant === 'outlinedDark'
      ? 'primary'
      : btnVariant === 'filledLight' || btnVariant === 'outlinedLight'
        ? 'secondary'
        : 'info';

  return (
    <Button
      disabled={loading}
      variant={muiVariant}
      color={color}
      sx={{
        ...commonStyles,
        ...styles,
      }}
      {...props}
    >
      {loading ? <CircularProgress {...circularProgressProps} /> : children}
    </Button>
  );
};

export default AppButton;