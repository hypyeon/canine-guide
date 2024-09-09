import { Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import { Link, router } from 'expo-router'

import appstorew from '../../../assets/images/icon-ios-w.png'
import googleplayw from '../../../assets/images/icon-android-w.png'
import appstoreb from '../../../assets/images/icon-ios-b.png'
import googleplayb from '../../../assets/images/icon-android-b.png'

import Buttons from '../buttons/Buttons';
import Checkbox from '../checkbox/Checkbox';

const Card = (props) => {
  const { index, title, src, content, href, mb, bold = [], unsafe = Boolean, list = [], apps, openIos, openAndroid, buttons = [], checklist = [], customize } = props;

  const bgColor = index % 2 === 0 ? 'bg-black' : 'bg-white';
  const txtColor = index % 2 === 0 ? 'text-white' : 'text-black';

  const renderContent = () => {
    let parts = content.split(/(\[bold\]|\[list\]|\[button\]|\[checklist\])/);
    let boldIndex = 0;
    let listIndex = 0;
    let btnIndex = 0;
    let checklistIndex = 0;

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
      } else if (part === '[button]' && buttons[btnIndex]) {
        const current = buttons[btnIndex];
        btnIndex++;

        const itemsPosition = (type) => {
          if (type === 'expect') {
            return 'items-center pt-3 pb-4';
          } else {
            return 'items-end pt-2';
          }
        }

        const handleBtn = () => {
          if (current.type === 'finder') {
            Linking.openURL(current.to)
            .catch((err) => {
              console.error("Failed to open URL: ", err);
            })
          }
          return router.push(current.to);
        }

        return (
          <View 
            key={index} 
            className={`w-[70vw] justify-center ${itemsPosition(current.type)}`}
          >
            <Buttons 
              key={`button-${index}`}
              type={current.type}
              text={current.text}
              handlePress={handleBtn}
            />
          </View>
        )
      // } else if (part === '[checklist]' && checklist[checklistIndex]) {
      //   const current = checklist[checklistIndex];
      //   checklistIndex++;

      //   const [ isChecked, setIsChecked ] = React.useState(false);

      //   const handleCheck = () => {
      //     setIsChecked(!isChecked);
      //   }

      //   const renderColor = (color) => {
      //     switch (color) {
      //       case 'yellow':
      //         return '#f7b32b';
      //       case 'sage':
      //         return '#a9e5bb';
      //       default:
      //         return;
      //     }
      //   }

      //   return (
      //     <View key={index} className="pb-1">
      //       <Checkbox 
      //         key={`checklist-${index}`} 
      //         text={current.text}
      //         color={renderColor(current.color)}
      //         isChecked={isChecked}
      //         handleCheck={handleCheck}
      //       />
      //     </View>
      //   )
      } else {
        return (
          <Text 
            key={index} 
            className={`${txtColor} w-[70vw] font-ruda-reg mb-1`}
          >
            {part}
          </Text>
        );
      }
    })
  }

  const renderCustomized = () => {
    return customize;
  }

  const renderFoodContent = () => {
    return (
      <View key={`${index}`}>
        <View>
          <Text 
            className={`${txtColor} w-[70vw] font-ruda-reg mb-[14px]`}
          >
            {content[0]}
          </Text>
        </View>
        <View className="mb-[3px]">
          <Text className="w-[70vw] font-ruda-b text-red">Potential effects</Text>
        </View>
        <View>
          <Text 
            className={`${txtColor} w-[70vw] font-ruda-reg mb-1`}
          >
            {content[1]}
          </Text>
        </View>
      </View>
    )
  }

  const chooseContent = () => {
    if (content) {
      let toRender;

      if (href) {
        toRender = <>"{renderContent()}"</>
      } else {
        if (unsafe === true) {
          toRender = <>{renderFoodContent()}</>;
        } else {
          toRender = <>{renderContent()}</>;
        }
      }

      return (
        <Text className={`${index} ${txtColor} w-[70vw] font-ruda-reg mb-1`}>
          {toRender}
        </Text>
      )
    } else {
      return (
        <>{renderCustomized()}</>
      )
    }
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
      className={`${bgColor} ${mb} shadow-xl rounded-2xl w-[82vw] justify-center items-center p-4`}
    >
      {href ? (
        <Link href={href} className='flex flex-row w-[70vw]'>
          <Text key={index} className={`${txtColor} w-[70vw] pb-4 mb-8 font-rs-reg text-[16px] leading-5`}>
            {title}
          </Text>
          <View className="pl-1">
            <Feather name="external-link" size={18} color={`#F2A202`} />
          </View>
        </Link>
      ) : (
        <Text key={index} className={`${txtColor} w-[70vw] pb-1 font-rs-reg text-[16px] leading-5`}>
          {unsafe === true ? 
            <>
              <Text className="text-[13px]">❌</Text> {title}
            </> : title}
        </Text>
      )}
      <View className="border-b border-yellow mt-2 mb-4 w-[74vw]" />
      { src && (
        <Image 
          source={src}
          className="w-[40vw] mb-4"
          resizeMode="contain"
        />
      )}
      {chooseContent()}
      { apps && (
        <View 
          className="flex flex-row w-[70vw] pt-3 pb-1 justify-center items-center gap-3"
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