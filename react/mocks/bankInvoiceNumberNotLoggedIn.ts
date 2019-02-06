export const orderGroupQuery = {
  orderGroup: {
    orders: [
      {
        allowCancellation: true,
        orderId: '908791797598-01',
        deliveryParcels: [
          {
            address: {
              addressType: 'residential',
              receiverName: 'Victor Hugo',
              state: 'RJ',
              street: 'Praia de Botafogo',
              number: '300',
              city: 'Rio de Janeiro',
              postalCode: '22250-040',
              neighborhood: 'Botafogo',
              complement: null,
              country: 'BRA',
            },
            price: 500,
            pickupFriendlyName: null,
            seller: '1',
            items: [
              {
                id: '282',
                skuName: 'Tipo 1',
                name: 'Delivery 1 SLA | 1 Tipo 1',
                price: 1200,
                listPrice: 1200,
                isGift: false,
                quantity: 1,
                seller: '1',
                imageUrl:
                  'http://vtexgame1.vteximg.com.br/arquivos/ids/155641-55-55/bola.jpg?v=636626686154400000',
                detailUrl: '/teste-so-delivery/p',
                measurementUnit: 'un',
                unitMultiplier: 1,
              },
            ],
            selectedSla: 'PAC',
            selectedSlaObj: {
              id: 'PAC',
              name: 'PAC',
              shippingEstimate: '8bd',
              deliveryWindow: null,
              price: 500,
              deliveryChannel: 'delivery',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                friendlyName: null,
                isPickupStore: false,
              },
            },
            shippingEstimate: '8bd',
            shippingEstimateDate: null,
            deliveryWindow: null,
            deliveryChannel: 'delivery',
            selectedSlaType: 'delivery',
          },
        ],
        pickUpParcels: [],
        takeAwayParcels: [],
        items: [
          {
            id: '282',
            skuName: 'Tipo 1',
            name: 'Delivery 1 SLA | 1 Tipo 1',
            price: 1200,
            listPrice: 1200,
            isGift: false,
            quantity: 1,
            seller: '1',
            imageUrl:
              'http://vtexgame1.vteximg.com.br/arquivos/ids/155641-55-55/bola.jpg?v=636626686154400000',
            detailUrl: '/teste-so-delivery/p',
            measurementUnit: 'un',
            unitMultiplier: 1,
          },
        ],
        sellers: [
          {
            id: '1',
            name: 'vtexgame1',
          },
        ],
        totals: [
          {
            id: 'Items',
            name: 'Total dos Itens',
            value: 1200,
          },
          {
            id: 'Discounts',
            name: 'Total dos Descontos',
            value: 0,
          },
          {
            id: 'Shipping',
            name: 'Total do Frete',
            value: 500,
          },
          {
            id: 'Tax',
            name: 'Total da Taxa',
            value: 0,
          },
        ],
        clientProfileData: {
          email: 'victorhmp@mailinator.com',
          firstName: 'Victor',
          lastName: 'Hugo',
          document: '18430995005',
          documentType: 'cpf',
          phone: '+551112340909',
        },
        paymentData: {
          transactions: [
            {
              transactionId: 'AD0E4AF970E8490A85C5BE29E1066F27',
              payments: [
                {
                  id: '39F4569C6A3440FE8CA4453DAC02CDB0',
                  paymentSystem: '6',
                  paymentSystemName: 'Boleto Bancário',
                  value: 1700,
                  installments: 1,
                  lastDigits: null,
                  group: 'bankInvoice',
                  dueDate: null,
                  url:
                    '*t*p*:*/*o*o*o*.*e*o*d*p*g*m*n*o*r*d*s*o*c*m*b*/*p*b*l*t*/*r*d*s*o*t*k*n*M*B*K*d*Q*t*c*l*a*Y*S*p*N*d*Y*w*Y*5*e*9*b*k*O*Z*b*8*N*J*U*h*a*N*Z*N*W*t*b*t*V*Z*Q*Q*b*.*',
                  bankIssuedInvoiceBarCodePNG: null,
                  bankIssuedInvoiceBarCodeNumber:
                    '23793773500000001990001250000000000112345670',
                  bankIssuedInvoiceIdentificationNumberFormatted:
                    '23790.00124 50000.000005 01123.456707 3 77350000000199',
                },
              ],
            },
          ],
        },
        storePreferencesData: {
          countryCode: 'BRA',
          currencyCode: 'BRL',
        },
        creationDate: '2019-02-06T15:30:07.5855509Z',
        value: 1700,
      },
    ],
    totalPickUpParcels: [],
    totalDeliveryParcels: [
      {
        address: {
          addressType: 'residential',
          receiverName: 'Victor Hugo',
          state: 'RJ',
          street: 'Praia de Botafogo',
          number: '300',
          city: 'Rio de Janeiro',
          postalCode: '22250-040',
          neighborhood: 'Botafogo',
          complement: null,
          country: 'BRA',
        },
        price: 500,
        pickupFriendlyName: null,
        seller: '1',
        items: [
          {
            id: '282',
            skuName: 'Tipo 1',
            name: 'Delivery 1 SLA | 1 Tipo 1',
            price: 1200,
            listPrice: 1200,
            isGift: false,
            quantity: 1,
            seller: '1',
            imageUrl:
              'http://vtexgame1.vteximg.com.br/arquivos/ids/155641-55-55/bola.jpg?v=636626686154400000',
            detailUrl: '/teste-so-delivery/p',
            measurementUnit: 'un',
            unitMultiplier: 1,
          },
        ],
        selectedSla: 'PAC',
        selectedSlaObj: {
          id: 'PAC',
          name: 'PAC',
          shippingEstimate: '8bd',
          deliveryWindow: null,
          price: 500,
          deliveryChannel: 'delivery',
          pickupStoreInfo: {
            additionalInfo: null,
            address: null,
            friendlyName: null,
            isPickupStore: false,
          },
        },
        shippingEstimate: '8bd',
        shippingEstimateDate: null,
        deliveryWindow: null,
        deliveryChannel: 'delivery',
        selectedSlaType: 'delivery',
      },
    ],
    totalTakeAwayParcels: [],
  },
}
