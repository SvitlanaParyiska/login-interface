import { useEffect, useState } from 'react';
import sprite from '../../images/sprite.svg';
import {
  ButtonReset,
  Form,
  IconPasswordWrapper,
  LabelStyled,
  StyledInputPassword,
  StyledPasswordContainer,
  SvgPasswordIcon,
} from './CreateNewPasswordForm.styled';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setNewPassword } from '../../redux/authOperations';

function CreateNewPasswordForm({ token }) {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [password_confirm, setPassword_confirm] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [passwordsMatches, setPasswordsMatches] = useState(false);
  const secret = document.cookie.match(/CSRF-TOKEN=([\w-]+)/);

  useEffect(() => {
    if (password === password_confirm) {
      setPasswordsMatches(true);
    }
  }, [password, password_confirm]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      dispatch(
        setNewPassword({
          password,
          password_confirm,
          token,
          secret,
        })
      ).then(() => {
        setPassword('');
        setPassword_confirm('');
      });
    } catch (error) {
      toast.error('Error of reset. Please try again!', {
        duration: 3000,
        position: 'top-right',
      });
    }
  };

  const passwordIcon = showPassword ? 'icon-eye' : 'icon-eye-off';

  const passwordIconConfirm = showPasswordConfirm ? 'icon-eye' : 'icon-eye-off';

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <StyledPasswordContainer>
        <LabelStyled htmlFor="password">Password</LabelStyled>
        <StyledInputPassword
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          minLength="8"
          required
          onChange={e => setPassword(e.target.value)}
        />
        <IconPasswordWrapper
          onClick={() => setShowPassword(prevState => !prevState)}
        >
          <SvgPasswordIcon>
            <use href={`${sprite}#${passwordIcon}`} />
          </SvgPasswordIcon>
        </IconPasswordWrapper>
      </StyledPasswordContainer>
      <StyledPasswordContainer>
        <LabelStyled htmlFor="passwordConfirm">Confirm Password</LabelStyled>
        <StyledInputPassword
          id="passwordConfirm"
          name="password"
          type={showPasswordConfirm ? 'text' : 'password'}
          placeholder="Password"
          minLength="8"
          required
          onChange={e => setPassword_confirm(e.target.value)}
        />
        <IconPasswordWrapper
          onClick={() => setShowPasswordConfirm(prevState => !prevState)}
        >
          <SvgPasswordIcon>
            <use href={`${sprite}#${passwordIconConfirm}`} />
          </SvgPasswordIcon>
        </IconPasswordWrapper>
      </StyledPasswordContainer>
      <ButtonReset disabled={passwordsMatches ? false : true} type="submit">
        Reset Password
      </ButtonReset>
    </Form>
  );
}

export default CreateNewPasswordForm;
