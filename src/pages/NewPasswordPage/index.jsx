import CreateNewPasswordForm from 'components/CreateNewPasswordForm';
import Title from 'components/Title';
import { useParams } from 'react-router-dom';

function NewPassword() {
  const { token } = useParams();

  return (
    <main>
      <Title text={'Create new Password?'} />
      <CreateNewPasswordForm token={token} />
    </main>
  );
}

export default NewPassword;
