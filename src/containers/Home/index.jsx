import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../../components/Header/";
import { Logo } from "../../components/Logo";
import { SearchInput } from "../../components/Input";
import { Body } from "../../components/Body";
import employeesData from "../../../data/db.json";

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
  const [filteredData, setFilteredData] = useState(employeesData.employees);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/employees");
        const data = await response.json();
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
      const lowercasedFilter = searchTerm.toLowerCase();
      const filtered = filteredData.filter(
        (employee) =>
          employee.name.toLowerCase().includes(lowercasedFilter) ||
          employee.job.toLowerCase().includes(lowercasedFilter) ||
          employee.phone.includes(lowercasedFilter)
      );
      setFilteredData(filtered);
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
