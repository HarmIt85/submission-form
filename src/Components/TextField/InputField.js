import React from 'react';
import './InputField.css';

function InputField(props){
    return (
        <div class={props.divClass}>
            <label for={props.forField}>{props.labelText}</label>
            <input type={props.inputType} class="" id={props.IdName} placeholder={props.placeHolderText} />
        </div>
    );
}
export default InputField;