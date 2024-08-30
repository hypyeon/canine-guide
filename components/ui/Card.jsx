import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CenteredView from './CenteredView'

const Card = (props) => {
  const { bgColor, size, padding } = props;

  return (
    <View 
      className={`shadow-lg rounded-lg ${padding} ${size} ${bgColor} justify-center items-center`}
    >
      {props.children}
    </View>
  )
}

export default Card