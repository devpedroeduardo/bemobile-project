import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header/';
import { Logo } from '../../components/Logo';
import { SearchInput } from '../../components/Input';
import { Table } from '../../components/Table';
import employeesData from '../../../data/db.json'


const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;
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
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(employeesData.employees);
  
    useEffect(() => {
      setFilteredData(employeesData.employees);
    }, []);
  
    useEffect(() => {
      const lowercasedFilter = searchTerm.toLowerCase();
      const filtered = employeesData.employees.filter(employee =>
        employee.name.toLowerCase().includes(lowercasedFilter) ||
        employee.job.toLowerCase().includes(lowercasedFilter) ||
        employee.phone.includes(lowercasedFilter)
      );
      setFilteredData(filtered);
    }, [searchTerm]);

    return (
        <HomeContainer>  
            <Header><Logo/></Header>
            <Container>
                <h1>Funcionários</h1>
                <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            </Container>
                <Table data={filteredData}/>
        </HomeContainer>
    )
}

export default Home