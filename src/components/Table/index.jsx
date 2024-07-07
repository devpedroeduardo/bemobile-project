import React from 'react'
import { formatDate, formatPhone } from '../../utils/tools';
import styled from 'styled-components';

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 32px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 2px;

  &>tbody tr {
    box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.2);
    img {
    border-radius: 100%
    }
  }

  th,
  td {
    background-color: white;
    padding-block: 14px;
    padding-left: 32px;
    border: none;
    text-align: left;
  }

  th {
    background: linear-gradient(180deg, #5a84c0 0%, #594ed2 100%);
    color: white;
  }

  @media (max-width: 600px) {
    th,
    td {
      font-size: 14px;
    }
  }
`;

const HeaderTable = styled.th`
  &:first-child {
    border-radius: 8px 0px 0px 0px;
  }
  &:last-child {
    border-radius: 0px 8px 0px 0px;
  }
`;

export const Table = ({ data = [] }) => {
  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <HeaderTable>FOTO</HeaderTable>
            <HeaderTable>NOME</HeaderTable>
            <HeaderTable>CARGO</HeaderTable>
            <HeaderTable>DATA DE ADMISSÃO</HeaderTable>
            <HeaderTable>TELEFONE</HeaderTable>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>
                <img src={employee.image} alt={employee.name} width="34" />
              </td>
              <td>{employee.name}</td>
              <td>{employee.job}</td>
              <td>{formatDate(employee.admission_date)}</td>
              <td>{formatPhone(employee.phone)}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  )
}
