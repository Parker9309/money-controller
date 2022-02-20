import styled from 'styled-components';

const Tittle = styled.h1`
  color: red;

// o styled components suporta encadeamento de tags assim como o SASS

  input {
    background-color: black;
  }
  `

export function App() {
  return (
    <div className="App">
      <Tittle>
        Fala fiote
        <input type="text" />
      </Tittle>
    </div>
  );
}

