import { ChangeEvent, FormEvent, useState } from "react";
import { Form, Campo, Botao } from "./styles";

type Props = {
  aoPesquisar: (termo: string) => void;
};

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState("");

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aoPesquisar(termo.toLowerCase());
  };

  const aoMudarCampo = (e: ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value);
  };

  return (
    <Form onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={aoMudarCampo}
        type="search"
      />
      <Botao type="submit">Pesquisar</Botao>
    </Form>
  );
};

export default FormVagas;
