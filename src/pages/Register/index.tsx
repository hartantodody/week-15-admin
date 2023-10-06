import { RegisterForm, CustomCard } from "../../components";
import MainLayout from "../../layouts/MainLayout";

const Register = () => {
  return (
    <MainLayout>
      <CustomCard width={{ width: 500 }}>
        <RegisterForm />
      </CustomCard>
    </MainLayout>
  );
};

export default Register;
