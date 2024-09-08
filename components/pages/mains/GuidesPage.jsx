import React, { useState } from 'react'
import DetailView from '../../ui/views/DetailView'
import Carousel from '../../ui/carousel/Carousel'
import PuppyPage from '../subs/PuppyPage'
import AdultPage from '../subs/AdultPage'
import SeniorPage from '../subs/SeniorPage'

const GuidesPage = () => {
  const [ active, setActive ] = useState('Puppy');

  const handleActive = (title) => {
    setActive(title);
  }

  return (
    <DetailView bgColor="bg-sage" size="fit-content">
      <Carousel 
        titles={['Puppy', 'Adult', 'Senior']}
        onSelect={handleActive}
        active={active}
      />
      {active === 'Puppy' && <PuppyPage />}
      {active === 'Adult' && <AdultPage />}
      {active === 'Senior' && <SeniorPage />}
    </DetailView>
  )
}

export default GuidesPage