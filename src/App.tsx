import React, { useCallback, useEffect, useRef } from 'react';
import logo from './logo.svg'; 

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);

  // useEffect(()=> {
  //   nameInputRef.current?.focus();
  // }, [])

  const handleFocus = useCallback(() => {
    nameInputRef.current?.focus();
  }, []);

  return (
    <div className="App"> 
        <input 
          type="text"
          placeholder='Digite seu nome'
          ref={nameInputRef} 
          />

          <button onClick={handleFocus}>Realizar foco</button>
    </div>
  );
}

export default App;
