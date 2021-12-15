import React from 'react'
import styled from 'styled-components'
import { CartState } from '../../context/cartContext'


const CartProduct = ({product}) => {
    
    const {state: {cart}, dispatch} = CartState();
    const {frontmatter: {featuredImage, price, productName, secondaryProduct, productType}, id} = product
    return (
        <ProductContainer>
            <h1>{productName}</h1>
            <span>{price}</span>
            <button >add</button>
        </ProductContainer>
    )
}

export default CartProduct
const ProductContainer = styled.div``