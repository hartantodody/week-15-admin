import { CustomCard, EditDataForm } from "../../components";
import MainLayout from "../../layouts/MainLayout";

const EditData = () => {
  return (
    <MainLayout>
      <CustomCard width={{ width: 500 }}>
        <EditDataForm />
      </CustomCard>
    </MainLayout>
  );
};

export default EditData;
