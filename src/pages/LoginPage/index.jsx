import ButtonSmall from 'components/ButtonSmall';
import Title from 'components/Title';
import { ButtonBox, LineBox } from './LoginPage.styled';
import LoginForm from 'components/LoginForm';

function LoginPage() {
  return (
    <main>
      <Title text={'Log in to your account'} />
      <ButtonBox>
        <ButtonSmall text={'Google'} icon={'icon-Vector-1--'} link={'#'} />
        <ButtonSmall text={'Github'} icon={'icon-Vector-2'} link={'#'} />
      </ButtonBox>
      <LineBox>
        <p>OR</p>
      </LineBox>
      <LoginForm />
    </main>
  );
}

export default LoginPage;
