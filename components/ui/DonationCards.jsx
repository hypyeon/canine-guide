import { View, Text } from 'react-native'
import React from 'react'
import Card from './Card'

const data = [
  {
    title: 'The Humane Society',
    src: require('../../assets/images/logo-donate-hs.png'),
    href: 'https://www.humanesociety.org/',
    content: 'Together with millions of supporters, the Humane Society of the United States takes on puppy mills, factory farms, the fur trade, trophy hunting, animal cosmetics testing and other cruel industries. We fight all forms of animal cruelty to achieve the vision behind our name: a humane society.'
  },
  {
    title: 'ASPCA®',
    src: require('../../assets/images/logo-donate-aspca.png'),
    href: 'https://www.aspca.org/',
    content: 'The ASPCA (American Society for the Prevention of Cruelty to Animals®) has been at the forefront of animal rescue and protection since our founding as the first animal welfare organization in North America in 1866. For more than 150 years, we have been the leading voice in animal welfare, bringing the critical protection of animals to the forefront of society.'
  },
  {
    title: 'Apollo Support & Rescue',
    src: require('../../assets/images/logo-donate-apollo.png'),
    href: 'https://www.apollosupportandrescue.org/',
    content: 'Founded in 2012, Apollo Support & Rescue has saved thousands of animals that found themselves alone and in distress. Abused, neglected, abandoned, or orphaned, our efforts to give these animals another chance goes unchallenged.'
  }
]

const DonationCards = () => {
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
          mb={index === data.length - 1 ? 'mb-12' : 'mb-6'}
        />
      ))}
    </View>
  )
}

export default DonationCards