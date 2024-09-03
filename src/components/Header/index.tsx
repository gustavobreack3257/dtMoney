import * as S from "./styles";

import LogoSVG from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={LogoSVG} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay/>

            <Dialog.Content>
              <Dialog.Title>Nova Transação</Dialog.Title>

              <Dialog.Close/>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
