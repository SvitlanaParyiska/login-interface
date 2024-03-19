import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authOperations';
import sprite from '../../images/sprite.svg';
import {
  ButtonLogin,
  Form,
  IconPasswordWrapper,
  LinkForgot,
  StyledInput,
  StyledInputPassword,
  StyledPasswordContainer,
  StyledText,
  SvgPasswordIcon,
} from './LoginForm.styled';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  useEffect(() => {
    if (email.match(emailPattern) && email.length > 14) {
      setEmailValid(true);
    }
  }, [email]);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(logIn({ email, password })).then(({ payload }) => {
      if (payload?.token) {
        toast
          .success('Welcome!', {
            duration: 4000,
            position: 'top-right',
          })
          .then(() => navigate('/', { replace: true }));
        e.currentTarget.reset();
      }
    });
  };

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const passwordIcon = showPassword ? 'icon-eye' : 'icon-eye-off';

  return (
    <>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label className="visually-hidden" htmlFor="email">
            email
          </label>
          <StyledInput
            id="email"
            name="email"
            type="email"
            className={emailValid ? 'validInput' : ''}
            placeholder="Work email"
            pattern={emailPattern}
            minLength="15"
            required
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        {emailValid && (
          <StyledPasswordContainer>
            <label className="visually-hidden" htmlFor="password">
              password
            </label>
            <StyledInputPassword
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              minLength="8"
              required
              onChange={e => setPassword(e.target.value)}
            />
            <IconPasswordWrapper onClick={togglePassword}>
              <SvgPasswordIcon>
                <use href={`${sprite}#${passwordIcon}`} />
              </SvgPasswordIcon>
            </IconPasswordWrapper>
          </StyledPasswordContainer>
        )}

        <LinkForgot to="/forgotpass">Forgot your password?</LinkForgot>
        <ButtonLogin type="submit">Log in to Qencode</ButtonLogin>
      </Form>
      <StyledText>
        Is your company new to Qencode?
        <span>
          <Link to="/register">{'Sign up'}</Link>
        </span>
      </StyledText>
    </>
  );
}

export default LoginForm;
