import React, { useState } from 'react'
import DetailView from '../../ui/views/DetailView'
import Carousel from '../../ui/carousel/Carousel'
import LanguagePage from '../subs/LanguagePage'
import CommunicatingPage from '../subs/CommunicatingPage'
import DontsPage from '../subs/DontsPage'

const CommunicationsPage = () => {
  const [ active, setActive ] = useState("Dog's Language");

  const handleActive = (title) => {
    setActive(title);
  }

  return (
    <DetailView bgColor="bg-sage" size="fit-content">
      <Carousel 
        titles={["Dog's Language", "Communicating", "Don'ts"]}
        onSelect={handleActive}
        active={active}
        width="116%"
      />
      {active === "Dog's Language" && <LanguagePage />}
      {active === "Communicating" && <CommunicatingPage />}
      {active === "Don'ts" && <DontsPage />}
    </DetailView>
  )
}

export default CommunicationsPage