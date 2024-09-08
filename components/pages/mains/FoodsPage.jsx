import React, { useState } from 'react'
import DetailView from '../../ui/views/DetailView'
import Carousel from '../../ui/carousel/Carousel'
import UnsafePage from '../subs/UnsafePage'
import SafePage from '../subs/SafePage'

const FoodsPage = () => {
  const pages = ['Unsafe', 'Safe'];

  const [ active, setActive ] = useState(pages[0]);

  const handleActive = (title) => {
    setActive(title);
  }

  return (
    <DetailView bgColor="bg-sage" size="fit-content">
      <Carousel 
        titles={pages}
        onSelect={handleActive}
        active={active}
      />
      {active === pages[0] && <UnsafePage />}
      {active === pages[1] && <SafePage />}
    </DetailView>
  )
}

export default FoodsPage