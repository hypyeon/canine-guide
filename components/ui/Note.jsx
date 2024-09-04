import { View, Text } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Link } from 'expo-router'

const Note = (props) => {
  const { content, link, emphasis } = props;

  const renderText = () => {
    let parts = content.split(/(\[emphasis\]|\[link\])/);

    return parts.map((part, index) => {
      if (part === '[emphasis]' && emphasis) {
        return (
          <Text key={index} className="font-bold">
            {emphasis}
          </Text>
        )
      } else if (part === '[link]' && link) {
        return (
          <Link key={index} href={link.href} className="flex flex-row items-center">
            <Text className="font-ruda-b underline">
              {link.text}
            </Text>
            <View>
              <EvilIcons name="external-link" size={16} />
            </View>
          </Link>
        )
      } else {
        return part;
      }
    })
  }

  return (
    <View className="w-[82vw] h-fit mb-8">
      <Text className="font-ruda-reg text-[14px] text-center text-black">
        {renderText()}
      </Text>
    </View>
  )
}

export default Note
