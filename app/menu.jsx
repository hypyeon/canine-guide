import { View, Text } from 'react-native'
import React from 'react'
import CenteredView from '../components/ui/CenteredView'
import ManualButtons from '../components/ui/ManualButtons'
import ResourceButtons from '../components/ui/ResourceButtons'

const Menu = () => {
  return (
    <CenteredView bgColor="bg-yellow" size="flex-1">
      <ManualButtons />
      <ResourceButtons />
    </CenteredView>
  )
}

export default Menu