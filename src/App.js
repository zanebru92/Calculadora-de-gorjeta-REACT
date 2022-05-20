import React, {useState} from "react";
import styled from "styled-components";

const Titulo = styled.h1`
  font-size: 3rem;
  text-transform: capitalize;
`


 const Input = styled.input`
  width: 20rem;
  height: 2rem;
  font-size: 1rem;
  border: 1px solid #000
  padding: 1rem;
  margin-bottom: 2rem;
 `


function App() {
  
  const [total, setTotal] = useState(0);
  const [gorjeta, setGorjeta] = useState(10);


  return (
    <>
      <Titulo>calculadora de gorjeta</Titulo>
      <p>Digite o valor total :</p>
      <Input
        placeholder="R$"
        type="number"
        value={total}
        onChange={(e) => setTotal(parseFloat(e.target.value))}
      />
      <p>Digite a porcentagem da gorjeta:</p>
      <Input
        placeholder="%"
        type="number"
        value={gorjeta}
        onChange={(e) => setGorjeta(parseFloat(e.target.value))}
      />
      <hr/>
      
      {total > 0 &&
      <>
      <p>Subtotal: R${total}</p>
      <p>Gorjeta: R${total * (gorjeta / 100)}</p>
      <h3>Total: R${total + (gorjeta/100) * total} </h3>
      </>
      }
    </>
  );
}

export default App;
