interface ValidationOptions {
    minLength?: number;
    maxLength?: number;
    required?: boolean;
    pattern?: string;
  }

  
interface InputStyling {
    InputWrapper? : string,
    InputError? : string,
    Input? : string,

    WrongInput? : string,
    RightInput? : string,
}
    
type AdditionalValidation = (input : HTMLInputElement, setError : React.Dispatch<React.SetStateAction<string | undefined>>) => void;

interface FormStyling extends InputStyling {
    Devider? : string,
    Label? : string,
    Required? : string
}

interface BasicInputFieldProps {
    id: string;
    type: string;
    setValue : React.Dispatch<React.SetStateAction<string | null>>;
  
    placeholder?: string;
    name?: string;
    validation? : ValidationOptions;
    additionalValidation?: AdditionalValidation;
    inputStyling? : InputStyling;
}

interface ExtensionInputProps {
    id: string;
    setValue : React.Dispatch<React.SetStateAction<string | null>>;
  
    placeholder?: string;
    validation? : ValidationOptions;
    name?: string;
    inputStyling? : InputStyling;
}

interface TextInputFormComponentProps {
    id: string;
    type: InputFieldType;
    setValue : React.Dispatch<React.SetStateAction<string | null>>;
    
    label?: string;
    placeholder?: string;
    validation? : ValidationOptions;
    name?: string;
    styling? : FormStyling
  }