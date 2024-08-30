import { View } from 'react-native'
import React from 'react'

const CenteredView = (props) => {
  const { bgColor, size } = props;
  return (
    <View className={`${bgColor} ${size} justify-center items-center`}>
      {props.children}
    </View>
  )
}

export default CenteredView