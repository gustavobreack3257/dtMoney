import * as S from "./styles";
import LogoSVG from "../../assets/logo.svg";

import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";
export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={LogoSVG} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal/>
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
