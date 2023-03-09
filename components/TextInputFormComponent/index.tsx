
import {
  TextInputField, 
  EmailInputField,
  NumberInputField,
  AreaInputField,
} from "./FieldComponents";

/*
    This component was build to be reusable if needed. So please consider using if it fits in your component.
    Keep in mind most of validation happens on submit event only.

    TextInputFormComponent props :
    required : 
        id : string - Every input shoud have a unique id,
        label : string - Every input shoud have a label
        type : InputFieldType - Type of input
    optional : 
        placeholder : string
        required : boolean
        vertical : boolean

        ratio : number - describes ration of space between input and label
        minLength : number
        maxLength : number

        name : string - for submitting form
*/

export enum InputFieldType {
  Area = 1,
  Text = 2,
  Email = 3,
  PhoneNumber = 4,
}

export default function TextInputFormComponent(props : TextInputFormComponentProps){

  function buildByType(type: InputFieldType) {
    switch (type) {
      case InputFieldType.Text:
        return <TextInputField id={props.id} placeholder={props.placeholder} validation={props.validation} name={props.name} setValue={props.setValue} inputStyling={props.styling}/>;

      case InputFieldType.Email:
        return <EmailInputField id={props.id} placeholder={props.placeholder} validation={props.validation} name={props.name} setValue={props.setValue} inputStyling={props.styling}/>;

      case InputFieldType.PhoneNumber:
        return <NumberInputField id={props.id} placeholder={props.placeholder} validation={props.validation} name={props.name} setValue={props.setValue} inputStyling={props.styling}/>;

      case InputFieldType.Area:
        return <AreaInputField id={props.id} placeholder={props.placeholder} validation={props.validation} name={props.name} setValue={props.setValue} inputStyling={props.styling}/>
    }
  }

  const requiredClass = props.validation?.required ? props.styling?.Required : "";

  return (
    <div className={`${props.styling?.Devider}`}>
      <label
        className={`${props.styling?.Label} ${requiredClass}`}
        htmlFor={props.id}
        style={{ flex: 1 }}
      >
        {props.label}
      </label>

      {buildByType(props.type)}
    </div>
  );
};
