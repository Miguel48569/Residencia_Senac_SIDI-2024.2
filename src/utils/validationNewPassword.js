import * as yup from "yup";

const validationNewPassword = yup.object().shape({
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(12, "A senha deve ter no máximo 12 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não coincidem")
    .required("Confirmação de senha é obrigatória"),
});
export default validationNewPassword;
