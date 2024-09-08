import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { Link } from 'expo-router'

import appstorew from '../../../assets/images/icon-ios-w.png'
import googleplayw from '../../../assets/images/icon-android-w.png'
import appstoreb from '../../../assets/images/icon-ios-b.png'
import googleplayb from '../../../assets/images/icon-android-b.png'

const Card = (props) => {
  const { index, title, src, content, href, mb, bold = [], unsafe = Boolean, list = [], apps, openIos, openAndroid } = props;

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
      <View className={`${index}`} key={index}>
        <View>
          <Text className={`${txtColor} w-[68vw] font-ruda-reg mb-[14px]`}>{content[0]}</Text>
        </View>
        <View className="mb-[3px]">
          <Text className="w-[68vw] font-ruda-b text-red">Potential effects</Text>
        </View>
        <View>
          <Text className={`${txtColor} w-[68vw] font-ruda-reg mb-1`}>{content[1]}</Text>
        </View>
      </View>
    )
  }

  const createAppLink = (platform, index) => {
    const appstoreColor = (index) => {
      return index % 2 === 0 ? appstoreb : appstorew;
    }
    const googleplayColor = (index) => {
      return index % 2 === 0 ? googleplayb : googleplayw;
    }
    const buttonColor = (index) => {
      return index % 2 === 0 ? 'bg-yellow' : 'bg-black';
    }

    return (
      <TouchableOpacity 
        className={`flex justify-center items-center w-[14vw] h-[14vw] rounded-full shadow-sm ${buttonColor(index)}`}
        onPress={platform === 'iOS' ? openIos : openAndroid}
      >
        <Image 
          source={platform === 'iOS' ? `${appstoreColor(index)}` : `${googleplayColor(index)}`}
          className={platform === 'iOS' ? 'w-[32px] h-[32px]' : 'w-[28px] h-[28px] ml-1'}
          resizeMode="contain"
        />
      </TouchableOpacity>
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
          <>"{renderContent()}"</>
        ) : (
          <>{unsafe === true ? renderFoodContent() : renderContent()}</>
        )}
      </Text>
      { apps && (
        <View 
          className="flex flex-row w-[68vw] pt-3 pb-1 justify-center items-center gap-3"
          key={index}
        >
          {createAppLink('iOS', index)}
          {createAppLink('Android', index)}
        </View>
      )}
    </View>
  )
}

export default Card