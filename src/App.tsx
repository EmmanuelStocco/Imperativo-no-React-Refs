import React, { FormEvent, useCallback, useEffect, useRef } from 'react';
import logo from './logo.svg'; 



function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef( { value: false});
  // useEffect(()=> {
  //   nameInputRef.current?.focus();
  // }, [])

  const handleSubmit = useCallback((e :FormEvent) => {
    e.preventDefault();
    //nameInputRef.current?.focus();
    alert(nameInputRef.current?.value)
  }, []);

  const handleAccepTerms = useCallback(() => {
    console.log(acceptTermsRef.current.value= !acceptTermsRef.current.value);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
    <div className="App"> 
        <input 
          type="text"
          placeholder='Digite seu nome'
          ref={nameInputRef} 
          />

            <button type="button" onClick={handleAccepTerms}>
                Aceitar termos
              </button>

          <button type='submit' >Realizar foco</button>
    </div>
    </form>
  );
}

export default App;
