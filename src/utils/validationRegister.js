import * as yup from "yup";

const validationRegister = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
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
export default validationRegister;
