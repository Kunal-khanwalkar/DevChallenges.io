import React from 'react';
import './Button.css';

const Button = ({ hover, variant, color, disableShadow, disabled, size, startIcon, endIcon }) => {

    let classes = '';
    classes = variant!=null ? classes + variant + ' ' : classes;
    classes = color!=null ? classes + color + ' ' : classes;
    classes = hover!=null ? classes + ' hover' : classes;            
    classes = disableShadow!=null ? classes + 'disableShadow ' : classes;
    classes = disabled!=null ? classes + 'disabled ' : classes;
    classes = size!=null ? classes + size + ' ' : classes;

    return (
        <>
        <button id="btn" className={classes}>
            {startIcon!=null ? <span class="material-icons">{startIcon}</span> : ''}
            Default
            {endIcon!=null ? <span class="material-icons">{endIcon}</span> : ''}
        </button>
        </>
    );
}

export default Button;