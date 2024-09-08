import React, { useState } from 'react'
import DetailView from '../../ui/views/DetailView'
import Carousel from '../../ui/carousel/Carousel'
import LanguagePage from '../subs/LanguagePage'
import CommunicatingPage from '../subs/CommunicatingPage'
import DontsPage from '../subs/DontsPage'

const CommunicationsPage = () => {
  const pages = ["Dog's Language", "Communicating", "Don'ts"];

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
        width="116%"
      />
      {active === pages[0] && <LanguagePage />}
      {active === pages[1] && <CommunicatingPage />}
      {active === pages[2] && <DontsPage />}
    </DetailView>
  )
}

export default CommunicationsPage