import { Button } from '@mui/material';
import React from 'react';

export default function CustomButton({ name, variant }) {
  return <Button variant={variant}>{name}</Button>;
}
