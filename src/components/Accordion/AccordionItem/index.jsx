import React, { useState } from "react";
import styled from "styled-components";
import { formatDate, formatPhone } from "../../../utils/tools";
import ArrowIcon from "../../../assets/Icon/arrow";

const AccordionRow = styled.tr`
  cursor: pointer;
  background-color: #FFF;
  border-collapse: collapse;
  display: ${(props) => (props.open ? "table-row" : "none")};
  box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.2);

  td {
    padding: 16px 23px;
    border-top: 1px solid #ddd;
  }
`;

const AccordionShadow = styled.tr`
  box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  & > td {
    padding: 16px;
    text-align: center;
    &:first-child {
      text-align: start;
      img {
        border-radius: 100%;
      }
    }
  }
`;

const AccordionContent = styled.table`
  width: 100%;
  border-collapse: collapse;
  & > th,
  td {
    border: 1px dashed #ddd;
    padding: 16px 0 0 0;
    border-inline: none;
    border-top: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 18.75px;
    max-width: 296px;
    text-align: center;

    &:first-child {
      text-align: start;
    }

    &:last-child {
      text-align: end;
      font-weight: 500;
    }
  }
`;

const IconWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  transition: transform 0.3s ease;
  border-radius: 50px 0 0;

  &.rotated {
    transform: rotate(180deg);
  }
`;

export const AccordionItem = ({ employee, index }) => {
  const [expandedRow, setExpandedRow] = useState(null);

  const [isRotated, setIsRotated] = useState(false);

  const toggleRotation = () => {
    setIsRotated(!isRotated);
  };

  const toggleAccordion = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
    toggleRotation();
  };

  return (
    <React.Fragment key={employee.id}>
      <AccordionShadow onClick={() => toggleAccordion(index)}>
        <td>
          <img src={employee.image} alt={employee.name} width="34" />
        </td>
        <td>{employee.name}</td>
        <td>
          <IconWrapper className={isRotated ? `rotated` : ""}>
            <ArrowIcon />
          </IconWrapper>
        </td>
      </AccordionShadow>
      <AccordionRow open={expandedRow === index}>
        <td colSpan="3">
          <AccordionContent>
            <tbody>
              <tr>
                <td>Cargo</td>
                <td>{employee.job}</td>
              </tr>
              <tr>
                <td>Data de Admissão</td>
                <td>{formatDate(employee.admission_date)}</td>
              </tr>
              <tr>
                <td>Telefone</td>
                <td>{formatPhone(employee.phone)}</td>
              </tr>
            </tbody>
          </AccordionContent>
        </td>
      </AccordionRow>
    </React.Fragment>
  );
};
