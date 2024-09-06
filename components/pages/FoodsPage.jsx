import React, { useState } from 'react'
import DetailView from '../ui/views/DetailView'
import Carousel from '../ui/carousel/Carousel'
import UnsafePage from './UnsafePage'
import SafePage from './SafePage'

const FoodsPage = () => {
  const [ active, setActive ] = useState('Unsafe');

  const handleActive = (title) => {
    setActive(title);
  }

  return (
    <DetailView bgColor="bg-sage" size="fit-content">
      <Carousel 
        titles={['Unsafe', 'Safe']}
        onSelect={handleActive}
        active={active}
      />
      {active === 'Unsafe' && <UnsafePage />}
      {active === 'Safe' && <SafePage />}
    </DetailView>
  )
}

export default FoodsPage