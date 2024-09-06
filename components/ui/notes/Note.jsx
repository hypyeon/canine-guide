import { View, Text } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Link } from 'expo-router'

const Note = (props) => {
  const { content, link = [], emphasis, position } = props;

  const renderText = () => {
    let parts = content.split(/(\[emphasis\]|\[link\])/);
    let empIndex = 0;
    let linkIndex = 0;

    return parts.map((part, index) => {
      if (part === '[emphasis]' && emphasis[empIndex]) {
        const current = emphasis[empIndex];
        empIndex++;

        return (
          <Text key={index} className="font-bold">
            {current}
          </Text>
        )
      } else if (part === '[link]' && link[linkIndex]) {
        const current = link[linkIndex];
        linkIndex++;

        return (
          <Link key={index} href={current.href} className="flex flex-row items-center">
            <Text className="font-ruda-b underline">
              {current.text}
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
    <View className={`w-[82vw] h-fit mb-${position === 'top' ? 8 : 2 }`}>
      <Text className="font-ruda-reg text-[14px] text-center text-black">
        {renderText()}
      </Text>
    </View>
  )
}

export default Note
