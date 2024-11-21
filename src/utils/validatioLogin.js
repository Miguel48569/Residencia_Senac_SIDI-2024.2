import * as yup from "yup";

const validationLogin = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(12, "A senha deve ter no máximo 12 caracteres"),
});
export default validationLogin;
