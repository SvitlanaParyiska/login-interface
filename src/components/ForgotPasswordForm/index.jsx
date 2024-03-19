import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../redux/authOperations';
import {
  Form,
  ButtonSend,
  StyledInput,
  CancelLink,
} from './ForgotPasswordForm.styled';

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function ForgotPasswordForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  useEffect(() => {
    if (email.match(emailPattern) && email.length > 14) {
      setEmailValid(true);
    }
  }, [email]);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(forgotPassword(email));
    e.currentTarget.reset();
  };

  return (
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
          placeholder="Enter your email"
          pattern={emailPattern}
          minLength="15"
          required
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <ButtonSend type="submit">Send</ButtonSend>
      <CancelLink to="/login">Cancel</CancelLink>
    </Form>
  );
}

export default ForgotPasswordForm;
