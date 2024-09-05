import { View, Text } from 'react-native'
import React from 'react'
import CenteredView from '../components/ui/views/CenteredView'
import ManualButtons from '../components/ui/buttons/ManualButtons'
import ResourceButtons from '../components/ui/buttons/ResourceButtons'

const Menu = () => {
  return (
    <CenteredView bgColor="bg-yellow" size="flex-1">
      <ManualButtons />
      <ResourceButtons />
    </CenteredView>
  )
}

export default Menu