import React from 'react';
import Input from '../Input/Input';
import './InputGroup.css';

class InputGroup extends React.Component {
    constructor(props) {
        super(props);
        this.hover = this.props.hover != null ? '&:hover' : null; 
        this.focus = this.props.focus != null ? '&:focus' : null;

        this.propText = '';
        this.propText = this.props.disabled != null ? this.propText + 'disabled ' : this.propText;
        this.propText = this.props.helperText != null ? this.propText + 'helperText="' + this.props.helperText + '" ' : this.propText;
        this.propText = this.props.error != null ? this.propText + 'error ' : this.propText;
        this.propText = this.props.value != null ? this.propText + 'value="' + this.props.value + '" ' : this.propText;
        this.propText = this.props.size != null ? this.propText + 'size="' + this.props.size + '" ' : this.propText;
        this.propText = this.props.fullWidth != null ? this.propText + 'fullWidth ' : this.propText;
        this.propText = this.props.multiline != null ? this.propText + 'multiline row="' + this.props.row + '" ' : this.propText;
/*         this.propText = this.props.startIcon != null ? this.propText + 'startIcon="' + this.props.startIcon + '" ': this.propText;
        this.propText = this.props.endIcon != null ? this.propText + 'endIcon="' + this.props.endIcon + '" ': this.propText; */
    }
    render() {
        return(
            <div className='inp-group'>
                {(this.props.hover == null && this.props.focus == null)
                  ? <p>&lt;Input {this.propText} /&gt;</p>
                  : <p className='selector-text'>{this.hover} {this.focus}</p>
                }
                <Input hover={this.hover} focus={this.focus} error={this.props.error} disabled={this.props.disabled} helperText={this.props.helperText} value={this.props.value} size={this.props.size} fullWidth={this.props.fullWidth} row={this.props.multiline != null ? this.props.row : null} /* startIcon={this.props.startIcon} endIcon={this.props.endIcon} *//>
            </div>
        );
    }
}

export default InputGroup;