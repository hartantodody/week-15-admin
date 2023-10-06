import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { CustomButton, Text } from "..";
import { TransactionProps } from "../../interface";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const AddDataForm = () => {
  const navigate = useNavigate();
  const [xRequestId, setXRequestId] = useState("");
  const handleSubmit = async (formData: TransactionProps) => {
    try {
      const XRequestId = uuidv4();
      setXRequestId(XRequestId);
      const response = await fetch(
        "http://localhost:3000/api/v1/admin/transactions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-request-id": xRequestId,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add data");
      }

      navigate("/");

      console.log("Data added successfully!");
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };
  const initialValues: TransactionProps = {
    id: 0,
    type: "",
    category: "",
    description: "",
    amount: 0,
  };

  const validationSchema = Yup.object({
    type: Yup.string().required("Type is required"),
    category: Yup.string().required("Category is required"),
    description: Yup.string().required("Description is required"),
    amount: Yup.number()
      .typeError("Amount must be a number")
      .required("Amount is required")
      .positive("Amount must be positive")
      .integer("Amount must be an integer"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <Text text="Add Data" variant="h3" />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          label="Type"
          variant="outlined"
          margin="normal"
          {...formik.getFieldProps("type")}
          error={formik.touched.type && Boolean(formik.errors.type)}
          helperText={formik.touched.type && formik.errors.type}
        />
        <TextField
          fullWidth
          label="Category"
          variant="outlined"
          margin="normal"
          {...formik.getFieldProps("category")}
          error={formik.touched.category && Boolean(formik.errors.category)}
          helperText={formik.touched.category && formik.errors.category}
        />
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          margin="normal"
          {...formik.getFieldProps("description")}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
        <TextField
          fullWidth
          label="Amount"
          variant="outlined"
          margin="normal"
          {...formik.getFieldProps("amount")}
          error={formik.touched.amount && Boolean(formik.errors.amount)}
          helperText={formik.touched.amount && formik.errors.amount}
        />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          my={3}
        >
          <CustomButton
            type="submit"
            color="primary"
            variant="contained"
            disabled={!formik.isValid}
          >
            Add Data
          </CustomButton>
        </Box>
      </form>
    </>
  );
};

export default AddDataForm;
