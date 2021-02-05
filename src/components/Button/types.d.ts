import React from 'react';

export interface BtnStyledProps {
    disabled? : boolean
    fullWidth? : boolean
}

export interface BtnProps extends BtnStyledProps {
    variant: 'solid' | 'outline' | 'neutral' | 'text'
    color: 'primary' | 'secondary' | 'danger' | 'warning' | 'neutral'
    size?: 'large' | 'medium' | 'small'
    element? : 'button' | 'a'
    href? : string
    popped?: boolean
    children: React.ReactNode
    onClick? : () => void
}