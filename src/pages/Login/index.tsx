import { LoginForm, CustomCard } from "../../components";
import MainLayout from "../../layouts/MainLayout";

const Login = () => {
  return (
    <MainLayout>
      <CustomCard width={{ width: 500 }}>
        <LoginForm />
      </CustomCard>
    </MainLayout>
  );
};

export default Login;
