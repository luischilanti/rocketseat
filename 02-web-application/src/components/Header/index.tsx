import logoSvg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenModal: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoSvg} alt="dt money" />
        <button type="button" onClick={onOpenModal}>
          Nova transacao
        </button>
      </Content>
    </Container>
  );
}
