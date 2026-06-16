import { Card, LinkVaga, Titulo } from "./styles";

type Props = {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

const Vaga = (props: Props) => (
  <Card>
    <Titulo>{props.titulo}</Titulo>

    <ul>
      <li>Localização: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratação: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(", ")}</li>
    </ul>

    <LinkVaga href="#">Ver detalhes e candidatar-se</LinkVaga>
  </Card>
);

export default Vaga;
