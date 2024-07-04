import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../assets/Icon/search-icon';

const InputContainer = styled.div`
  position: relative;
  width: fit-content;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SearchIconStyle = styled(SearchIcon)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: #aaa;
`;

const StyledInput = styled.input`
  width: 287px;
  height: 48px;
  padding: 10px 10px 10px 40px; /* Espaço para o ícone */
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #777;
  }

  @media (max-width: 768px) {
    width: 335px;
    font-size: 14px;
    padding: 8px 8px 8px 35px; /* Ajusta o padding para telas menores */
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 6px 6px 30px; /* Ajusta o padding para telas ainda menores */
  }
`;

export const SearchInput = () => {
  return (
    <InputContainer>
      <SearchIconStyle />
      <StyledInput type="text" placeholder="Pesquisar" />
    </InputContainer>
  );
};
