import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CenteredView from './CenteredView'

const Card = (props) => {
  const { radius, shadow, bgColor, size } = props;

  return (
    <CenteredView 
      bgColor={bgColor} 
      size={size}
      className={`shadow-${shadow} rounded-${radius}`}
    >
      {props.children}
    </CenteredView>
  )
}

export default Card