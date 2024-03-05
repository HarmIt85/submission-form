import React from 'react';
import RadioInput from "./RadioInput";

function RadioField(props){
    return(
        <div class={props.divClass}>
            <label for={props.forField}>{props.labelText}</label>
            <RadioInput inputType="radio" IdName="gender-male" for={props.forField} spanText="Male" />
            <RadioInput inputType="radio" IdName="gender-female" for={props.forField} spanText="Female" />
            <RadioInput inputType="radio" IdName="gender-others" for={props.forField} spanText="Others" />
        </div>
    );
}

export default RadioField;