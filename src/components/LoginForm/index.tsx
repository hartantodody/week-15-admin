import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { Box, IconButton, InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { CustomButton, Text } from "../../components";

function LoginForm() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values: any) => {
    console.log("Submitted data:", values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const isFormEmpty = !formik.values.username && !formik.values.password;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Text text="Login" variant="h3" />
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
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          margin="normal"
          {...formik.getFieldProps("password")}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
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
            Login
          </CustomButton>
          <Link
            to="/account"
            target="_blank"
            style={{ textDecoration: "none", color: "gray" }}
          >
            Forgot your password?
          </Link>
        </Box>
        <Link
          to="/signup"
          target="_blank"
          style={{ textDecoration: "none", color: "gray" }}
        >
          Dont have any account? Sign up now!
        </Link>
      </form>
    </>
  );
}

export default LoginForm;
