import React from "react";
import styled from "styled-components";

const StyledArrowIcon = styled.svg`
  display: inline-block;
  transition: transform 0.3s ease-in-out;
`;

const ArrowIcon = ({ className, rotated, ...rest }) => (
  <StyledArrowIcon
    className={className}
    width="20"
    height="11"
    viewBox="0 0 20 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M1.5 1L10 10L18.5 1"
      stroke="url(#paint0_linear_4172_2)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4172_2"
        x1="10"
        y1="1"
        x2="10"
        y2="10"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5A84C0" />
        <stop offset="1" stopColor="#594ED2" />
      </linearGradient>
    </defs>
  </StyledArrowIcon>
);

export default ArrowIcon;
