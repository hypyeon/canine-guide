import { View, Linking } from 'react-native'
import React from 'react'
import Card from './Card'

const AppsCards = (props) => {
  const { data } = props;

  const openLink = (link) => {
    Linking.openURL(link)
  }

  return (
    <View>
      {data.map((item, index) => (
        <Card 
          key={index}
          index={index + 1}
          title={item.title}
          src={item.src}
          href={item.href}
          content={item.content}
          mb={index === data.length - 1 ? 'mb-8' : 'mb-6'}
          apps={item.apps}
          openIos={() => openLink(item.apps[0])}
          openAndroid={() => openLink(item.apps[1])}
        />
      ))}
    </View>
  )
}

export default AppsCards