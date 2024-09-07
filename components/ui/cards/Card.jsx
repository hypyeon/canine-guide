import { Text, View, Image } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { Link } from 'expo-router'

const Card = (props) => {
  const { index, title, src, content, href, mb, bold = [], unsafe = Boolean, list = [], pb } = props;

  const bgColor = index % 2 === 0 ? 'bg-black' : 'bg-white';
  const txtColor = index % 2 === 0 ? 'text-white' : 'text-black';

  const renderContent = () => {
    let parts = content.split(/(\[bold\]|\[list\])/);
    let boldIndex = 0;
    let listIndex = 0;

    return parts.map((part, index) => {
      if (part === '[bold]' && bold[boldIndex]) {
        const current = bold[boldIndex];
        boldIndex++;

        return (
          <View>
            <Text key={`bold-${index}`} className={`font-ruda-b ${txtColor}`}>
              {current}
            </Text>
          </View>
        )
      } else if (part === '[list]' && list[listIndex]) {
        const current = list[listIndex];
        listIndex++;
        let listCount = (content.match(/\[list\]/g) || []).length;

        const getPb = () => {
          return listIndex < listCount ? 'pb-3' : '';
        }

        return (
          <View className={getPb()} key={index}>
            <Text key={`list-${index}`} className={`font-ruda-b ${txtColor}`}>
              {current.subtitle}
            </Text>
            <View className="pt-[2px]">
              {current.elements.map((element, index) => (
                <Text key={`element-${index}`} className={`font-ruda-reg ${txtColor}`}>
                  {"  \u2022 "}{element}
                </Text>
              ))}
            </View>
          </View>          
        )
      } else {
        return <Text key={`text-${index}`}>{part}</Text>;
      }
    })
  }

  const renderFoodContent = () => {
    return (
      <>
        <Text className={`${txtColor} w-[68vw] font-ruda-reg mb-[14px]`}>{content[0]} {`\n\n`}</Text>
        <Text className="w-[68vw] font-ruda-b text-red">Potential effects{`\n`}</Text>
        <Text className={`${txtColor} w-[68vw] font-ruda-reg mb-1`}>{content[1]}</Text>
      </>
    )
  }

  return (
    <View 
      className={`${bgColor} ${mb} shadow-xl rounded-2xl w-[80vw] justify-center items-center p-4`}
    >
      {href ? (
        <Link href={href} className='flex flex-row w-[68vw]'>
          <Text key={index} className={`${txtColor} w-[68vw] pb-4 mb-8 font-rs-reg text-[16px] leading-5`}>
            {title}
          </Text>
          <View className="pl-1">
            <Feather name="external-link" size={18} color={`#F2A202`} />
          </View>
        </Link>
      ) : (
        <Text key={index} className={`${txtColor} w-[68vw] pb-1 font-rs-reg text-[16px] leading-5`}>
          {unsafe === true ? 
            <>
              <Text className="text-[13px]">❌</Text> {title}
            </> : title}
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
          <>{unsafe === true ? renderFoodContent() : renderContent()}</>
        )}
      </Text>
    </View>
  )
}

export default Card