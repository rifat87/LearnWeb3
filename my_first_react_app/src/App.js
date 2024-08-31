import './App.css';
import { useState } from "react";

const Person = (props) => {
  return (
    <>
    <h1> Name: {props.name}</h1>
    <h1> Last Name: {props.lastName}</h1>
    <h1> Age: {props.age}</h1>
    </>
  )
}

const App = () => {
  return (
    <div className='App'>
      <Person name={'John'} lastName={'Dsoe'} age={25} />
      <Person name={'Rifat'} lastName={'Work'} age={24} />

    </div>
  );
}

export default App;
