import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
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
  const [emailValid, setEmailValid] = useState('');

  useEffect(() => {
    if (email.match(emailPattern)) {
      setEmailValid('valid');
    }
  }, [email]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      dispatch(forgotPassword(email)).then(({ payload }) => {
        if (payload.token) {
          toast.success('Welcome!', {
            duration: 3000,
            position: 'top-right',
          });
          e.currentTarget.resetForm();
        }
      });
    } catch (error) {
      toast.error('Fill in correct email or password!', {
        duration: 3000,
        position: 'top-right',
      });
    }
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
          className={emailValid}
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
