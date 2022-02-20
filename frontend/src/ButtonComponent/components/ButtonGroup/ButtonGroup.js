import React from 'react';
import Button from '../Button/Button';
import './ButtonGroup.css';

const ButtonGroup = ({ hover, variant, color, disableShadow, disabled, size, startIcon, endIcon }) => {

    let propText = '';
    propText = variant!=null ? propText + 'variant="'+variant+'" ' : propText;
    propText = color!=null ? propText + 'color="'+color + '" ': propText;
    propText = disableShadow!=null ? propText + 'disableShadow ' : propText;
    propText = disabled!=null ? propText + 'disabled ' : propText;
    propText = size!=null ? propText + 'size="'+size+'" ' : propText;
    propText = startIcon!=null ? propText + 'startIcon="'+startIcon+'" ' : propText;
    propText = endIcon!=null ? propText + 'endIcon="'+endIcon+'" ' : propText;

    return (
        <div className='btn-group'>
            { hover!=null 
                ? <>
                    <p className='hoverText'>&amp;:hover, &amp;:focus</p>
                  </>
                : <>
                    <p>&lt;Button {propText} /&gt;</p>
                  </>
            }            
            <Button hover={hover} variant={variant} color={color} disableShadow={disableShadow} disabled={disabled} size={size} startIcon={startIcon} endIcon={endIcon}/>
        </div>
    );
}

export default ButtonGroup;