import React, { useState } from 'react'
import DetailView from '../../ui/views/DetailView'
import Carousel from '../../ui/carousel/Carousel'
import PuppyPage from '../subs/PuppyPage'
import AdultPage from '../subs/AdultPage'
import SeniorPage from '../subs/SeniorPage'

const GuidesPage = () => {
  const pages = ['Puppy', 'Adult', 'Senior'];
  
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
      {active === pages[0] && <PuppyPage />}
      {active === pages[1] && <AdultPage />}
      {active === pages[2] && <SeniorPage />}
    </DetailView>
  )
}

export default GuidesPage