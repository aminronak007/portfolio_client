import { withFormik } from "formik";
import * as Yup from "yup";

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    first_name: Yup.string().required("First name is required."),
    last_name: Yup.string().required("Last name is required."),
    email: Yup.string()
      .email("Email is invalid.")
      .max(60)
      .trim()
      .required("Email is required."),
    birthdate: Yup.string().required("Birthdate is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
    pincode: Yup.string().required("Pincode is required"),
    aboutme: Yup.string().required("Aboutme is required"),
  }),
  validateOnMount: true,
  mapPropsToValues: (props) => ({
    id: "",
    first_name: "",
    last_name:"",
    email: "",
    birthdate: "",
    address: "",
    city: "",
    state: "",
    country:"",
    pincode: "",
    aboutme: "",
    fullName: "",
  }),
  handleSubmit: () => {},
  displayName: "CustomValidationForm",
  enableReinitialize: true,
});

export default formikEnhancer;
