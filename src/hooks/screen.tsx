import React from 'react';
import { useMediaQuery } from 'react-responsive';

// Bootstrap Breakpoints
// xs: 0,
// sm: 576px,
// md: 768px,
// lg: 992px,
// xl: 1200px,
// xxl: 1400px

export const isLargeScreen = () => {
    return useMediaQuery({ minDeviceWidth: 992 })
}
export const isMediumScreen = () => {
    return useMediaQuery({ minDeviceWidth: 576, maxDeviceWidth: 991 })
}
export const isSmallScreen = () => {
    return useMediaQuery({ minDeviceWidth: 0 })
}