import CustomModal from "../../components/CustomModal";
import { LoginForm } from "../../components";
import { Props } from "../../interface";

const LoginModal = (
  props: Props & { isOpen: boolean; onClose: () => void }
) => {
  return (
    <CustomModal isOpen={props.isOpen} onClose={props.onClose}>
      <LoginForm />
    </CustomModal>
  );
};

export default LoginModal;
