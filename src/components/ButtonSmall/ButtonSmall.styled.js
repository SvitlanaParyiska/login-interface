import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: 1.2px solid #d3d8dc;
  border-radius: 6px;
  width: 192px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: #060e1e;
  transition: all var(--transition);

  &:hover,
  &:focus {
    border: 1.2px solid #316fea;
  }

  > svg {
    width: 18px;
    height: 18px;
  }
`;
