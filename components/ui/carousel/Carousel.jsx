import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Carousel = (props) => {
  const { titles = [], onSelect, active } = props;

  return (
    <View className="min-w-full mb-6 flex-row justify-center items-center gap-3">
      {titles.map((title, index) => (
        <TouchableOpacity key={index} onPress={() => onSelect(title)}>
          <View 
            className={`
              rounded-2xl py-1 px-3 bg-white 
              ${active === title ? 'border-black border-[1.25px]' : 'border-transparent border-[1.25px] opacity-50'}`}>
            <Text 
              key={index}
              className="font-rs-reg text-[14px] text-black"
            >
              {title.toUpperCase()}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default Carousel