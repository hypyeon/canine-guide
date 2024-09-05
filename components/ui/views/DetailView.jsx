import { View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'

const DetailView = (props) => {
  const { bgColor, size } = props;
  return (
    <SafeAreaView className={`${bgColor}`}>
      <ScrollView contentContainerStyle={{ height: 'fit-content' }}>
        <View className={`${size} justify-start items-center py-8`}>
          {props.children}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailView