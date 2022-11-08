import { withFormik } from "formik";
import * as Yup from "yup";

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email is invalid.")
      .max(60)
      .trim()
      .required("Email is required."),
    password: Yup.string()
      .min(8, "Password must be atleast 8 characters.")
      .max(16, "Password must be atmost 16 characters.")
      .trim()
      .required("Please provide password."),
  }),
  validateOnMount: true,
  mapPropsToValues: (props) => ({
    email: "",
    password: "",
  }),
  handleSubmit: () => {},
  displayName: "CustomValidationForm",
  enableReinitialize: true,
});

export default formikEnhancer;
