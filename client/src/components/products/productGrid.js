import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import styled from 'styled-components'

const ProductGrid = ({products}) => {
    return (
        <Grid>
            {products.map(({node: {frontmatter: {featuredImage}}}) => {
                console.log(featuredImage.childrenImageSharp[0].gatsbyImageData);
                return(
                    <Card>  
                        <GatsbyImage image={featuredImage.childrenImageSharp[0].gatsbyImageData}/>
                     </Card>
                )
            })}
            
            
        </Grid>
    )
}

export default ProductGrid

const Grid = styled.div`
    display: grid;
  column-gap: 15px;
  row-gap: 15px;

  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
`

const Card = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center
    
`

const Img = styled.div`
    background-color: yellow;
    width: 430px;
    height: 370px
`