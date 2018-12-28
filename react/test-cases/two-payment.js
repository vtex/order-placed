export const profileQuery = {
  'profile': {
    'id': '37faf0df-4164-4fab-b80f-5e1b9957b411',
    'firstName': 'Victor',
    'lastName': 'Hugo',
    'email': 'victor2142@gmail.com',
    'document': '45325123440',
    'phone': '+5511983768051',
  },
}

export const orderGroupQuery = {
  'orderGroup': [
    {
      'allowCancellation': true,
      'orderId': '886772148808-02',
      'orderGroup': '886772148808',
      'state': 'payment-approved',
      'salesChannel': '1',
      'creationDate': '2018-12-28T12:35:55.4356299Z',
      'timeZoneCreationDate': '2018-12-28T10:35:55.4356299',
      'value': 90100,
      'storePreferencesData': {
        'currencyCode': 'BRL',
      },
      'sellers': [
        {
          'id': 'ambienteqa',
          'name': 'ambienteqa',
        },
      ],
      'totals': [
        {
          'id': 'Items',
          'name': 'Total dos Itens',
          'value': 90100,
        },
        {
          'id': 'Discounts',
          'name': 'Total dos Descontos',
          'value': 0,
        },
        {
          'id': 'Shipping',
          'name': 'Total do Frete',
          'value': 0,
        },
        {
          'id': 'Tax',
          'name': 'Total da Taxa',
          'value': 0,
        },
      ],
      'items': [
        {
          'uniqueId': 'A8E986A85548436592BB52917E29383E',
          'id': '32',
          'productId': '19',
          'name': 'PRODUTO 6',
          'skuName': 'PRODUTO 6',
          'tax': 0,
          'price': 45050,
          'listPrice': 50000,
          'sellingPrice': 45050,
          'isGift': false,
          'quantity': 2,
          'seller': 'ambienteqa',
          'imageUrl': 'http://recorrenciaqa.vteximg.com.br/arquivos/ids/155412-55-55/mambo.png?v=636093678280930000',
          'detailUrl': '/abobrinha-la-pastina-na-brasa-145g-/p',
          'measurementUnit': 'un',
          'unitMultiplier': 1,
        },
      ],
      'shippingData': {
        'address': {
          'addressId': 'bcff3e538b0b488483b73f0e036ebb4e',
          'addressType': 'residential',
          'receiverName': 'Victor Hugo',
          'city': 'São Paulo',
          'state': 'SP',
          'street': 'Rua Domiciano Leite Ribeiro',
          'number': '18',
          'neighborhood': 'Vila Guarani (Z Sul)',
          'complement': null,
          'postalCode': '04317-000',
        },
        'logisticsInfo': [
          {
            'itemIndex': 0,
            'shippingEstimate': null,
            'shippingEstimateDate': null,
            'selectedSla': 'Retiro en Tienda',
            'deliveryChannel': null,
            'slas': [
              {
                'id': 'Retiro en Tienda',
                'name': 'Retiro en Tienda',
                'price': 0,
                'shippingEstimate': '1bd',
                'deliveryWindow': null,
                'deliveryChannel': 'delivery',
                'pickupStoreInfo': {
                  'additionalInfo': 'Test',
                  'address': '[object Object]',
                  'dockId': null,
                  'friendlyName': null,
                  'isPickupStore': true,
                },
              },
              {
                'id': 'Econômica',
                'name': 'Econômica',
                'price': 378,
                'shippingEstimate': '20d',
                'deliveryWindow': null,
                'deliveryChannel': 'delivery',
                'pickupStoreInfo': {
                  'additionalInfo': null,
                  'address': null,
                  'dockId': null,
                  'friendlyName': null,
                  'isPickupStore': false,
                },
              },
            ],
            'deliveryIds': null,
          },
        ],
      },
      'packageAttachment': null,
      'paymentData': {
        'transactions': [
          {
            'transactionId': 'AB8BCEBFBBC04779BE742FAD56B384E9',
            'payments': [
              {
                'paymentSystemName': 'Diners',
                'paymentSystem': '3',
                'value': 47800,
                'lastDigits': '1234',
                'group': 'creditCard',
                'installments': 1,
              },
              {
                'paymentSystemName': 'Visa',
                'paymentSystem': '2',
                'value': 47800,
                'lastDigits': '2324',
                'group': 'creditCard',
                'installments': 2,
              },
            ],
          },
        ],
      },
    },
    {
      'allowCancellation': true,
      'orderId': '886772148808-01',
      'orderGroup': '886772148808',
      'state': 'payment-approved',
      'salesChannel': '1',
      'creationDate': '2018-12-28T12:35:55.4200502Z',
      'timeZoneCreationDate': '2018-12-28T10:35:55.4200502',
      'value': 5500,
      'storePreferencesData': {
        'currencyCode': 'BRL',
      },
      'sellers': [
        {
          'id': '1',
          'name': 'Principal',
        },
      ],
      'totals': [
        {
          'id': 'Items',
          'name': 'Total dos Itens',
          'value': 5000,
        },
        {
          'id': 'Discounts',
          'name': 'Total dos Descontos',
          'value': 0,
        },
        {
          'id': 'Shipping',
          'name': 'Total do Frete',
          'value': 500,
        },
        {
          'id': 'Tax',
          'name': 'Total da Taxa',
          'value': 0,
        },
      ],
      'items': [
        {
          'uniqueId': '81529141AD7C4A9686D995208B5BC7A6',
          'id': '36',
          'productId': '23',
          'name': 'PRODUTO 10',
          'skuName': 'PRODUTO 10',
          'tax': 0,
          'price': 1000,
          'listPrice': 1000,
          'sellingPrice': 1000,
          'isGift': false,
          'quantity': 3,
          'seller': '1',
          'imageUrl': 'http://recorrenciaqa.vteximg.com.br/arquivos/ids/155416-55-55/mambo.png?v=636093678303200000',
          'detailUrl': '/acafrao-em-po-cia-das-ervas-23g/p',
          'measurementUnit': 'un',
          'unitMultiplier': 1,
        },
        {
          'uniqueId': 'BBB77E45B1FD4D8CAA8452540D3BFEDF',
          'id': '35',
          'productId': '22',
          'name': 'PRODUTO 9',
          'skuName': 'PRODUTO 9',
          'tax': 0,
          'price': 1000,
          'listPrice': 1000,
          'sellingPrice': 1000,
          'isGift': false,
          'quantity': 2,
          'seller': '1',
          'imageUrl': 'http://recorrenciaqa.vteximg.com.br/arquivos/ids/155415-55-55/mambo.png?v=636093678294900000',
          'detailUrl': '/acafrao-em-po-carmencita-04g/p',
          'measurementUnit': 'un',
          'unitMultiplier': 1,
        },
      ],
      'shippingData': {
        'address': {
          'addressId': 'bcff3e538b0b488483b73f0e036ebb4e',
          'addressType': 'residential',
          'receiverName': 'Victor Hugo',
          'city': 'São Paulo',
          'state': 'SP',
          'street': 'Rua Domiciano Leite Ribeiro',
          'number': '18',
          'neighborhood': 'Vila Guarani (Z Sul)',
          'complement': null,
          'postalCode': '04317-000',
        },
        'logisticsInfo': [
          {
            'itemIndex': 0,
            'shippingEstimate': null,
            'shippingEstimateDate': null,
            'selectedSla': 'Normal',
            'deliveryChannel': null,
            'slas': [
              {
                'id': 'PAC',
                'name': 'PAC',
                'price': 0,
                'shippingEstimate': '4bd',
                'deliveryWindow': null,
                'deliveryChannel': 'delivery',
                'pickupStoreInfo': {
                  'additionalInfo': null,
                  'address': null,
                  'dockId': null,
                  'friendlyName': null,
                  'isPickupStore': false,
                },
              },
              {
                'id': 'Normal',
                'name': 'Normal',
                'price': 300,
                'shippingEstimate': '3bd',
                'deliveryWindow': null,
                'deliveryChannel': 'delivery',
                'pickupStoreInfo': {
                  'additionalInfo': null,
                  'address': null,
                  'dockId': null,
                  'friendlyName': null,
                  'isPickupStore': false,
                },
              },
            ],
            'deliveryIds': null,
          },
          {
            'itemIndex': 1,
            'shippingEstimate': null,
            'shippingEstimateDate': null,
            'selectedSla': 'Normal',
            'deliveryChannel': null,
            'slas': [
              {
                'id': 'PAC',
                'name': 'PAC',
                'price': 0,
                'shippingEstimate': '4bd',
                'deliveryWindow': null,
                'deliveryChannel': 'delivery',
                'pickupStoreInfo': {
                  'additionalInfo': null,
                  'address': null,
                  'dockId': null,
                  'friendlyName': null,
                  'isPickupStore': false,
                },
              },
              {
                'id': 'Normal',
                'name': 'Normal',
                'price': 200,
                'shippingEstimate': '3bd',
                'deliveryWindow': null,
                'deliveryChannel': 'delivery',
                'pickupStoreInfo': {
                  'additionalInfo': null,
                  'address': null,
                  'dockId': null,
                  'friendlyName': null,
                  'isPickupStore': false,
                },
              },
            ],
            'deliveryIds': null,
          },
        ],
      },
      'packageAttachment': null,
      'paymentData': {
        'transactions': [
          {
            'transactionId': 'AB8BCEBFBBC04779BE742FAD56B384E9',
            'payments': [
              {
                'paymentSystemName': 'Diners',
                'paymentSystem': '3',
                'value': 47800,
                'lastDigits': '1234',
                'group': 'creditCard',
                'installments': 1,
              },
              {
                'paymentSystemName': 'Visa',
                'paymentSystem': '2',
                'value': 47800,
                'lastDigits': '2324',
                'group': 'creditCard',
                'installments': 2,
              },
            ],
          },
        ],
      },
    },
  ],
}
