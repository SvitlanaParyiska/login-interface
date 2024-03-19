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
  /* border: 1.2px solid #d3d8dc; */
  border: ${props =>
    props.error ? 'red' : props.success ? 'green' : '1.2px solid #d3d8dc'};

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

export const StyledInputPassword = styled.input`
  width: 100%;
  margin-top: 30px;
  height: 48px;
  border: 1.2px solid #d3d8dc;
  border-radius: 6px;
  padding: 0 12px;
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

export const StyledPasswordContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const IconPasswordWrapper = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  width: 20px;
  bottom: 17px;
  right: 14px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const SvgPasswordIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const LinkForgot = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  text-align: right;
  color: #316fea;
  display: block;
  margin-top: 15px;
  transition: all var(--transition);

  &:hover,
  &:focus {
    color: #275cc5;
  }
`;
export const ButtonLogin = styled.button`
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

export const StyledText = styled.p`
  margin-top: 20px;
  font-weight: 400;
  font-size: 14px;
  list-style: 1.43;
  letter-spacing: 0.01em;
  text-align: center;
  color: #060e1e;

  > span {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #316fea;
    transition: all var(--transition);

    &:hover,
    &:focus {
      color: #275cc5;
    }
  }
`;
