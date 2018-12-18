import React from 'react'
import { Button, Alert, IconCaretDown } from 'vtex.styleguide'

const BasicInfo = () => {
  const twoOrders = true

  return (
    <div className="flex flex-column">
      <div className="order-number-date">
        <p className="t-heading-4-ns t-heading-5">
          Número do pedido: "NUMERO DO PEDIDO"
          <br />
          <small className="c-muted-2 t-small">
            Realizado em 15/12/2018 às 16:20
          </small>
        </p>
      </div>

      {
        twoOrders
          ? <div className="mv6">
            <Alert type="success">
              <p>
                Separamos seu pedido em <strong>2 entregas</strong>, além das suas <strong>2 retiradas no ponto.</strong>
                Assim, os produtos que estão mais próximos ao seu endereço chegarão mais rápido!
              </p>
            </Alert>
          </div>
          : null
      }

      <div className="flex justify-between flex-column flex-row-l">
        <div>
          <strong>Dados pessoais</strong>
          <ul className="list pl0 c-on-base">
            <li>Jane Doe</li>
            <li>jane-doe@mail-domain.com</li>
            <li>111.222.333-44</li>
            <li>(11)999887766</li>
          </ul>
        </div>
        <div>
          <strong>Endereço na nota fiscal</strong>
          <ul className="list pl0 c-on-base">
            <li>Avenida Evandro Lins e Silva, 000</li>
            <li>Barra da Tijuca, CEP 22.631-470</li>
            <li>Rio de Janeiro</li>
            <li>Brasil</li>
          </ul>
        </div>
        <div>
          <strong>Forma de pagamento</strong>
          <ul className="list pl0 c-on-base">
            <li>Cartão de crédito</li>
            <li>Bandeira - Final 1234</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center-ns mv9 flex-wrap flex-nowrap-l flex-column flex-row-l">
        <div className="mr4-l mb4 mb0-l center">
          <Button variation="secondary">
            <span className="mr3">Solicitar atendimento</span> <IconCaretDown />
          </Button>
        </div>
        <div className="ml4-l mt4 mt0-l center">
          <Button variation="secondary">
            Ir para seus pedidos
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BasicInfo
