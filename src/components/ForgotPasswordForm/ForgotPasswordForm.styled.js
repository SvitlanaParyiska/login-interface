import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  max-width: 400px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  border: 1.2px solid #d3d8dc;
  border-radius: 6px;
  padding: 0 12px;
  font-family: inherit;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.33;
  color: #060e1e;
  transition: all var(--transition);

  &::placeholder {
    font-family: inherit;
    font-weight: 400;
    font-size: 15px;
    margin-left: 15px;
    line-height: 1.33;
    color: #060e1e;
    color: #a1abb5;
  }

  &:hover,
  &:focus {
    border: 1.2px solid #316fea;
  }
`;

export const ButtonSend = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 30px;
  border-radius: 8px;
  background-color: #316fea;
  font-weight: 500;
  line-height: 1.31;
  border: none;
  font-size: 16px;
  font-family: inherit;
  text-align: center;
  color: #fff;
  transition: all var(--transition);

  &:hover,
  &:focus {
    background-color: #275cc5;
  }
`;

export const CancelLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 48px;
  margin-top: 30px;
  border: 1.2px solid #d3d8dc;
  border-radius: 8px;
  background-color: #fff;
  font-weight: 500;
  line-height: 1.31;
  font-size: 16px;
  font-family: inherit;
  justify-content: center;
  align-items: center;
  color: #060e1e;
  transition: all var(--transition);

  &:hover,
  &:focus {
    border: 1.2px solid #316fea;
  }
`;
