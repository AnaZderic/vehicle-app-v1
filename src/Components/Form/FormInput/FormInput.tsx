'use client';

interface InputProps {
    label: string;
    [x: string]: any;
};

const FormInput = ({label, ...otherProps}: InputProps) => {
    return (
       <div>
        {label && (
          <label>{label}</label>
        )}
        <input className="" {... otherProps} />

       </div>
    );
};

export default FormInput; 