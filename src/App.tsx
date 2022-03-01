import { PermissionProvider } from './context/PermissionContext';
import { OctalInput } from './components/OctalInput'
import { PermissionTable } from "./components/PermissionTable";

import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles'

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    padding: .25rem;
`;

function App() {

  return (
    <>
      <GlobalStyles />
      <PermissionProvider>
        <Main>
          <h1>Chmod Guru!!!</h1>
          <p>
            Um simples utilitário para saber qual é permissão do Linux!!!
          </p>
          <OctalInput />
          <PermissionTable />
        </Main>
      </PermissionProvider>
    </>
  )
}

export default App
