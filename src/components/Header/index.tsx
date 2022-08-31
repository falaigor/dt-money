import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styled";

import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <NewTransactionButton>Nova Trnasação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
