import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../../components/Header/";
import { Logo } from "../../components/Logo";
import { SearchInput } from "../../components/Input";
import { Body } from "../../components/Body";

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SearchContainer = styled.div`
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
    align-items: flex-start;
  }
`;

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [employees, setEmployees] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/employees");
        const data = await response.json();
        setEmployees(data);
        setFilteredData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const lowercasedFilter = searchTerm.trim().toLowerCase();
      const filtered = employees.filter(
        (employee) =>
          employee.name.toLowerCase().includes(lowercasedFilter) ||
          employee.job.toLowerCase().includes(lowercasedFilter) ||
          employee.phone.includes(lowercasedFilter)
      );
      let result = searchTerm == "" || filtered.empty ? employees : filtered;
      setFilteredData(result);
    }
  }, [searchTerm, isLoading]);

  return (
    <HomeContainer>
      <Header>
        <Logo />
      </Header>
      <SearchContainer>
        <h1>Funcionários</h1>
        <SearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      <Body data={filteredData} />
    </HomeContainer>
  );
}

export default Home;
