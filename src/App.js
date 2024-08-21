import React from 'react';
import HomePage from './HomePage';
import { FormProvider } from './FormContext';

function App() {
  return (
    <FormProvider>
      <HomePage />
    </FormProvider>
  );
}

export default App;
