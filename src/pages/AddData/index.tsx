import { CustomCard, AddDataForm } from "../../components";
import MainLayout from "../../layouts/MainLayout";

const AddData = () => {
  return (
    <MainLayout>
      <CustomCard width={{ width: 500 }}>
        <AddDataForm />
      </CustomCard>
    </MainLayout>
  );
};

export default AddData;
