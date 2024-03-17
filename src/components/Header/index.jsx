import sprite from '../../images/sprite.svg';
import { HeaderSection, IconLogo } from './Header.styled';

function Header() {
  return (
    <header className="container">
      <HeaderSection>
        <IconLogo>
          <use href={`${sprite}#icon-Vector--`}></use>
        </IconLogo>
      </HeaderSection>
    </header>
  );
}

export default Header;
