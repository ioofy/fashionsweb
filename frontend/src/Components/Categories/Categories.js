import React from 'react'
import styled from '@emotion/styled'
import categories from '../data/categories'
import CategoryItem from './CategoryItem'

const ContainerCat = styled.div
`
    display: flex;
    justify-content: center;

`

const Categories = () => {
    return (
        <ContainerCat>
            {categories.map(item => (

                <CategoryItem item={item} key={item.id}/>

            ))}
        </ContainerCat>
    )
}

export default Categories
