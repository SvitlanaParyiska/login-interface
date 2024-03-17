import sprite from '../../images/sprite.svg';
import { ButtonStyled } from './ButtonSmall.styled';

function ButtonSmall({ text, icon, link }) {
  const registrationLink = () => {};
  return (
    <ButtonStyled type="button" onClick={registrationLink}>
      <svg>
        <use href={`${sprite}#${icon}`}></use>
      </svg>
      {text}
    </ButtonStyled>
  );
}

export default ButtonSmall;
