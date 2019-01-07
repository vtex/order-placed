import React from 'react'
import PropTypes from 'prop-types'
import { ProductImage, ProductPrice } from 'vtex.order-details'
import { CurrencyContext } from '../../OrderPlaced'

const Product = ({ productInfo }) => (
  <CurrencyContext.Consumer>
    {currency => (
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <ProductImage
            url={productInfo.imageUrl}
            alt={productInfo.name}
            className="w3 mr5"
          />
          <p href={productInfo.detailUrl} className="t-body" target="_blank">
            {productInfo.name} <br />
            <small className="t-mini">
              {productInfo.quantity}
              {productInfo.measurementUnit
                ? productInfo.measurementUnit
                : (productInfo.quantity > 1) ? ' unidades' : ' unidade' }
            </small>
          </p>
        </div>
        <ProductPrice value={productInfo.price * productInfo.quantity} currency={currency} />
      </div>)}
  </CurrencyContext.Consumer>
)

Product.propTypes = {
  productInfo: PropTypes.object.isRequired,
}

export default Product
