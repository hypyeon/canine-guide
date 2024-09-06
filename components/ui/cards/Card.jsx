import { Text, View, Image } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { Link } from 'expo-router'

const Card = (props) => {
  const { index, title, src, content, href, mb, bold = [] } = props;

  const bgColor = index % 2 === 0 ? 'bg-black' : 'bg-white';
  const txtColor = index % 2 === 0 ? 'text-white' : 'text-black';

  const renderText = () => {
    let parts = content.split(/(\[bold\])/);
    let boldIndex = 0;

    return parts.map((part, index) => {
      if (part === '[bold]' && bold[boldIndex]) {
        const current = bold[boldIndex];
        boldIndex++;

        return (
          <View>
            <Text key={`bold-${index}`} className="font-ruda-b text-white">
              {current}
            </Text>
          </View>
        )
      // } else if (part === '[link]' && link[linkIndex]) {
      //   const current = link[linkIndex];
      //   linkIndex++;

      //   return (
      //     <Link key={index} href={current.href} className="flex flex-row items-center">
      //       <Text className="font-ruda-b underline">
      //         {current.text}
      //       </Text>
      //       <View>
      //         <EvilIcons name="external-link" size={16} />
      //       </View>
      //     </Link>
      //   )
      } else {
        return <Text key={`text-${index}`}>{part}</Text>;
      }
    })
  }

  return (
    <View 
      className={`${bgColor} ${mb} shadow-xl rounded-2xl w-[80vw] justify-center items-center p-4`}
    >
      {href ? (
        <Link href={href} className='flex flex-row w-[68vw]'>
          <Text className={`${txtColor} w-[68vw] pb-4 mb-8 font-rs-reg text-[16px] leading-5`}>
            {title}
          </Text>
          <View className="pl-1">
            <Feather name="external-link" size={18} color={`#F2A202`} />
          </View>
        </Link>
      ) : (
        <Text className={`${txtColor} w-[68vw] pb-1 font-rs-reg text-[16px] leading-5`}>
          {title}
        </Text>
      )}
      <View className="border-b border-yellow mt-2 mb-4 w-[72vw]" />
      { src && (
        <Image 
          source={src}
          className="w-[40vw] mb-4"
          resizeMode="contain"
        />
      )}
      <Text className={`${txtColor} w-[68vw] font-ruda-reg mb-1`}>
        {href ? (
          <>"{renderText()}"</>
        ) : (
          renderText()
        )}
      </Text>
    </View>
  )
}

export default Card