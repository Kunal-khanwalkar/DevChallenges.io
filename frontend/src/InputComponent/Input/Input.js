import React from 'react';
import './Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.classnm = '';
        this.classnm = this.props.hover != null ? this.classnm + 'hover ' : this.classnm;
        this.classnm = this.props.focus != null ? this.classnm + 'focus ' : this.classnm;
        this.classnm = this.props.error != null ? this.classnm + 'error ' : this.classnm;
        this.classnm = this.props.size != null ? this.classnm + this.props.size + ' ' : this.classnm;
        this.classnm = this.props.fullWidth != null ? this.classnm + 'fullWidth ' : this.classnm;
    }
    render() {
        return (
            <div id='frm-group' className={this.classnm}>
                <label id='lb' className={this.classnm}>Label</label>
                {this.props.row != null 
                  ? <textarea id='inp' type='text' placeholder={this.props.value != null ? this.props.value : 'Placeholder'} className={this.classnm} disabled={this.props.disabled} style={{height: 36 * this.props.row}}></textarea>
                  : <> 
{/*                     {this.props.startIcon!=null ? <span class="material-icons">{this.props.startIcon}</span> : ''} */}
                        <input id='inp' type='text' placeholder={this.props.value != null ? this.props.value : 'Placeholder'} className={this.classnm} disabled={this.props.disabled} ></input>
{/*                     {this.props.endIcon!=null ? <span class="material-icons">{this.props.endIcon}</span> : ''} */}
                  </>
                }
                <p id='ht' className={this.classnm}>{this.props.helperText}</p>
            </div>
        );
    }
}

export default Input;