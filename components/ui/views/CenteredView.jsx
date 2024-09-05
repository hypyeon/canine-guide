import { View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const CenteredView = (props) => {
  const { bgColor, size } = props;
  return (
    <SafeAreaView className={`${bgColor} h-full`}>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className={`${size} justify-center items-center`}>
          {props.children}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CenteredView