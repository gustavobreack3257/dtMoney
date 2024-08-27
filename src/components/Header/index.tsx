import * as S from "./styles";

import LogoSVG from "../../assets/logo.svg";
export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={LogoSVG} alt="" />
        <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
