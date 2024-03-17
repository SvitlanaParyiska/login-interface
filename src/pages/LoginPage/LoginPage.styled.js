import styled from 'styled-components';

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const LineBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  max-width: 400px;
  text-align: center;
  position: relative;

  > p {
    font-weight: 500;
    line-height: 1.33;
    color: #bec5cc;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      height: 1px;
      width: 45%;
      background-color: #e3e6e9;
    }

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      height: 1px;
      width: 45%;
      background-color: #e3e6e9;
    }
  }
`;
