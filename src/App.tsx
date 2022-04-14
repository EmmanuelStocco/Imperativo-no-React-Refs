import React, { FormEvent, useCallback, useEffect, useRef } from 'react';
import logo from './logo.svg';
import Input from './components/Input';
import Modal, { ModalHandles } from './components/Modal';


function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef({ value: false });
  const modalRef = useRef<ModalHandles>(null)
  // useEffect(()=> {
  //   nameInputRef.current?.focus();
  // }, [])

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    //nameInputRef.current?.focus();
    alert(nameInputRef.current?.value)
  }, []);

  const handleAccepTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value;
  }, []);

  const handleopenModal = useCallback(() => {
   modalRef.current?.openModal();
  }, []); 
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          label="Nome completo"
          ref={nameInputRef}
        />

        <button type="button" onClick={handleAccepTerms}>
          Aceitar termos
        </button>

        <button type='submit' >Realizar foco</button>


        
        
      </form>

      <button onClick={handleopenModal}> Abrir modal </button>

      <Modal ref={modalRef} />
    </div>
  );
}

export default App;
