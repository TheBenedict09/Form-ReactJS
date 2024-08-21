import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export function FormProvider({ children }) {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleSave = (newData) => {
    setData((prevData) => [...prevData, newData]);
    setShowForm(false);
  };

  return (
    <FormContext.Provider value={{ data, showForm, setShowForm, handleSave }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => useContext(FormContext);
