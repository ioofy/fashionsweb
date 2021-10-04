import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
          <title>{title}</title>
          <meta name='description' content={description}/>
          <meta name='keywords' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
   
    title: 'Fashions | Ayo Explore dan beli pakaian dengan fashion favorit kamu sekarang juga.',
    description: 'Explore dan beli produk pakaian murah dan terbaik disini, sekarang juga.',
    keywords: 'pakaian, beli pakaian, pakaian murah, fashions'

}

export default Meta
