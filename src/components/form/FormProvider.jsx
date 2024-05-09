import React, { createContext, useContext, useState } from 'react';

// Creating the context
const FormContext = createContext();

// This is a custom hook to use the context
export function useForm() {
    return useContext(FormContext);
}

// Provider component
export function FormProvider({ children }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    return (
        <FormContext.Provider value={{ formData, handleChange }}>
            {children}
        </FormContext.Provider>
    );
}
