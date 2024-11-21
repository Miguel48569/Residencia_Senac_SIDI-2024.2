import * as yup from "yup";

const validationResetPassword = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
});

export default validationResetPassword;
