import CreateNewPasswordForm from 'components/CreateNewPasswordForm';
import Title from 'components/Title';

function NewPassword() {
  return (
    <main>
      <Title text={'Create new Password?'} />
      <CreateNewPasswordForm />
    </main>
  );
}

export default NewPassword;
