import React, { useState } from 'react'
import DetailView from '../../ui/views/DetailView'
import Carousel from '../../ui/carousel/Carousel'

const EssentialsPage = () => {
  const [ active, setActive ] = useState('Useful Apps');

  const handleActive = (title) => {
    setActive(title);
  }

  return (
    <DetailView bgColor="bg-sage" size="fit-content">
      <Carousel 
        titles={['Useful Apps', 'Pet Care Tools']}
        onSelect={handleActive}
        active={active}
      />
      {/* {active === 'Unsafe' && <UnsafePage />}
      {active === 'Safe' && <SafePage />} */}
    </DetailView>
  )

}

export default EssentialsPage