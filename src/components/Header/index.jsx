import styled from 'styled-components';

const HeaderStyle = styled.header`
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2); 
  display: flex;
  align-items: center;
  `

export const Header = ({children}) => {
    return (
       <HeaderStyle>{children}</HeaderStyle>
    )
}