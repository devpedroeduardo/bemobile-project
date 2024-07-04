import { Header } from '../../components/Header/';
import { Logo } from '../../components/Logo';
import { SearchInput } from '../../components/Input'
import styled from 'styled-components';


const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;
    // max-width: 800px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 32px;

      @media (max-width: 573px) {
    padding: 20px;
    gap: 28px;
    flex-direction: column;
    align-items: flex-start 
  }
` 

function Home() {
    return (
        <HomeContainer>  
            <Header><Logo/></Header>
            <Container>
                <h1>Funcionários</h1>
                <SearchInput/>
            </Container>
        </HomeContainer>
    )
}

export default Home