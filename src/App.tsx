import { useState } from 'react'
import { OctalInput } from './components/OctalInput'
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles'

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
`;

function App() {

  return (
    <>
      <GlobalStyles />
      <Main>
        <h1>Chmod Guru!!!</h1>
        <OctalInput />
      </Main>
    </>
  )
}

export default App
