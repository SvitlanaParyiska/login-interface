import styled from 'styled-components';

export const Form = styled.form`
  max-width: 400px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledInputPassword = styled.input`
  width: 100%;
  margin-bottom: 25px;
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

export const LabelStyled = styled.label`
  font-weight: 500;
  font-size: 15px;
  line-height: 1.4;
  letter-spacing: 0em;
  color: #060e1e;
`;

export const StyledPasswordContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const IconPasswordWrapper = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  width: 20px;
  bottom: 42px;
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

export const ButtonReset = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 5px;
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

  &:disabled {
    background-color: #d3d8dc;
  }
`;
