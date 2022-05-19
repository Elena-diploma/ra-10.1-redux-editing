import React from 'react';
import ServiceForm from './components/ServiceForm';
import ServiceFilter from './components/ServiceFilter';
import ServiceList from './components/ServiceList';

function App() {
  return (
      <>
        <ServiceForm />
        <ServiceFilter />
        <ServiceList />
      </>
  );
}

export default App;