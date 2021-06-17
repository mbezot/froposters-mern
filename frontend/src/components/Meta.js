import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Frog Posters',
  description: 'Affiches culturelles et décalées',
  keywords: 'affiches, posters, vintage posters, affiche décalée, affiche vintage, illustration, design, affiche utile, affiche ludique',
}

export default Meta
