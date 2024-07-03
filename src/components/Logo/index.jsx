import styled from 'styled-components';
import logo from '../../assets/logo-bemobile.png';


export const Logo = styled.img.attrs(() => ({
    src: logo,
    alt: 'Logo da empresa',
  }))`
    width: 44px;
    height: 34px;
    margin-right: 1rem;
  `;
  