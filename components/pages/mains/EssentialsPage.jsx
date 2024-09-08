import React, { useState } from 'react'
import DetailView from '../../ui/views/DetailView'
import Carousel from '../../ui/carousel/Carousel'
import AppsPage from '../subs/AppsPage'
import ToolsPage from '../subs/ToolsPage'

const EssentialsPage = () => {
  const pages = ['Useful Apps', 'Pet Care Tools'];

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
      {active === pages[0] && <AppsPage />}
      {active === pages[1] && <ToolsPage />}
    </DetailView>
  )

}

export default EssentialsPage