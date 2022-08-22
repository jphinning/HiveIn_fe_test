import * as yup from "yup";

const RestorePasswordSchema = yup.object({
  password: yup
    .string()
    .required("Insert a password")
    .min(8, "Insert at least 8 characters"),
  passwordConfirm: yup
    .string()
    .required("Insert password confirmation")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export default RestorePasswordSchema;
