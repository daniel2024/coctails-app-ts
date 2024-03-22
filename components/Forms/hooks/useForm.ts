import { useState } from 'react';

interface FormValuesDefaults  {
  [key: string]: any;
}

interface ValidationRules {
  [key: string]: (value: any) => boolean;
}

interface FormErrors {
  [key: string]: string;
}

const useForm =<FormValues = FormValuesDefaults >(initialValues: FormValues, validationRules?: ValidationRules) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (name: string, value: any) => {
    setValues({ ...values, [name]: value });
    
    if (validationRules && validationRules[name]) {
      const isValid = validationRules[name](value);
      setErrors({ ...errors, [name]: isValid ? '' : 'Invalid input' });
    }
  };

  const handleSubmit = (callback: () => void) => {
    if (validationRules) {
      let hasError = false;
      const newErrors: FormErrors = {};
      Object.keys(validationRules).forEach(key => {
        const isValid = validationRules[key](values[key]);
        if (!isValid) {
          newErrors[key] = 'Invalid input';
          hasError = true;
        }
      });
      setErrors(newErrors);

      if (hasError) return;
    }

    callback();
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;