import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
  }

  @media (max-width: 600px) {
    th, td {
      font-size: 14px;
    }
  }
`;

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('pt-BR', options);
};

const formatPhone = (phone) => {
  return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
};

export const Table = ({ data = [] }) => {
    return (
      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Data de Admissão</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee) => (
              <tr key={employee.id}>
                <td><img src={employee.image} alt={employee.name} width="34" /></td>
                <td>{employee.name}</td>
                <td>{employee.job}</td>
                <td>{formatDate(employee.admission_date)}</td>
                <td>{formatPhone(employee.phone)}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
    );
  };
