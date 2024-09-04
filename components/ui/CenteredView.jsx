import { View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const CenteredView = (props) => {
  const { bgColor, size } = props;
  return (
    <SafeAreaView className={`${bgColor} ${size} justify-center items-center`}>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        {props.children}
      </ScrollView>
    </SafeAreaView>
  )
}

export default CenteredView