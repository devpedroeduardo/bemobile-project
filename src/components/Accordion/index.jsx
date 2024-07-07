import React from "react";
import { AccordionItem } from "./AccordionItem";
import CircleIcon  from "../../assets/Icon/circle"
import styled from "styled-components";


const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 32px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 2px;

  th {
    background: linear-gradient(180deg, #5a84c0 0%, #594ed2 100%);
    color: white;
    padding-block: 14px;
    padding-inline: 16px;
    text-align: center;

     &:first-child{
    text-align: start;
    }
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

export const Accordion = ({ data = [] }) => {
  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <HeaderTable>FOTO</HeaderTable>
            <HeaderTable>NOME</HeaderTable>
            <HeaderTable>
              <CircleIcon />
            </HeaderTable>
          </tr>
        </thead>
        <tbody>
          {data.map((employee, index) => (
            <AccordionItem key={index} employee={employee} index={index} />
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};
