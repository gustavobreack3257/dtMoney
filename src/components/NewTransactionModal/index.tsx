import { X } from '@phosphor-icons/react'

import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog'

export function NewTransactionModal(){
    return(
        <Dialog.Portal>
            <S.Overlay/>

            <S.Content>
              <Dialog.Title>Nova Transação</Dialog.Title>

              <S.CloseButton>
                <X size={24}/>
              </S.CloseButton>

              <form >
                <input type="text" placeholder='Descrição' required />
                <input type="number" placeholder='Preço' required />
                <input type="text" placeholder='Categoria' required />

                <button type='submit'>
                    Cadastrar
                </button>
              </form>
            </S.Content>
          </Dialog.Portal>
    )
}