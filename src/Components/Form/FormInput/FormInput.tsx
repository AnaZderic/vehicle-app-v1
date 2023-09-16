interface InputProps {
    label: string;
    [x: string]: any;
};

const FormInput = ({label, ...otherProps}: InputProps) => {
    return (
       <div className="mb-3">
        {label && (
          <label className="block mb-1">{label}</label>
        )}
        <input {... otherProps} />

       </div>
    );
};

export default FormInput; 