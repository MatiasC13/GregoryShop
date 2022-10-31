import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Nombre requerido";
  }
  if (!values.email) {
    errors.email = "Email requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email inválido";
  }
  if (!values.message) {
    errors.message = "Mensaje requerido";
  }
  return errors;
}
