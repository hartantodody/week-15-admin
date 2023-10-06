import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { CustomButton, Text } from "../../components";

function RegistrationForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Confirm password is required"),
  });

  const onSubmit = (values: any) => {
    console.log("Submitted data:", values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const isFormEmpty =
    !formik.values.username ||
    !formik.values.email ||
    !formik.values.password ||
    !formik.values.confirmPassword;

  return (
    <>
      <Text text="Register" variant="h3" />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          margin="normal"
          {...formik.getFieldProps("username")}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          {...formik.getFieldProps("email")}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          {...formik.getFieldProps("password")}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          variant="outlined"
          margin="normal"
          {...formik.getFieldProps("confirmPassword")}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
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
            disabled={isFormEmpty}
          >
            Register
          </CustomButton>
        </Box>
      </form>
    </>
  );
}

export default RegistrationForm;
