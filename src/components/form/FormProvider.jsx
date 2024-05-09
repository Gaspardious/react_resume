import React, { createContext, useContext, useState } from 'react';


const FormContext = createContext();


export function useForm() {
    return useContext(FormContext);
}
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
