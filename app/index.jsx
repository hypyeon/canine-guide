import { Text, Image, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CenteredView from '../components/ui/CenteredView';
import Card from '../components/ui/Card';
import cover from '../assets/images/landing-human-pet.png';
import share from '../assets/images/btn-share.png';
import donate from '../assets/images/btn-donate.png';
import Buttons from '../components/ui/Buttons';
import React from 'react';
import bone from '../assets/images/bg-icon-bone.png';
import bowl from '../assets/images/bg-icon-bowl.png';
import dog from '../assets/images/bg-icon-dog.png';

export default function App() {
  return (
    <CenteredView bgColor="bg-yellow" size="flex-1">
      <View
        className='justify-center items-center bg-white py-12 rounded-3xl shadow-md mt-16 z-10'
      >
        <Text className='text-yellowtxt font-ruda-med'>the ultimate</Text>
        <Text className='text-black font-rs-exli text-title mb-8'>CANINE GUIDE</Text>
        <View className='mb-12 w-[72vw]'>
          <Image 
            source={cover} 
            alt="Human with pet" 
            className='object-contain ml-[8vw] w-[64vw] h-[49vw]'
          />
        </View>
        <Text className='font-rs-li text-center text-black'>
          Bringing a new pet {'\n'}
          into your family is a big step, {'\n'}
          and we’re here to make it easier. 
        </Text>
      </View>
      <View className='z-10'>
        <Buttons 
          type='start'
          text='GET STARTED'
        ></Buttons>
        <View className='flex flex-row w-[52vw] justify-between'>
          <Buttons 
            type='landing'
            bgColor='bg-white'
            src={share}
          ></Buttons>
          <Buttons 
            type='landing'
            bgColor='bg-sage'
            src={donate}
          ></Buttons>
        </View>
      </View>
      <View className='mt-12'>
        <Text className='text-[#FFF] text-[12px] font-rs-med tracking-wide'>developed with ♡ by HP</Text>
      </View>
      <View className='relative w-[100vw]'>
        <Image source={bowl} className='absolute left-0 bottom-40 z-0' />
        <Image source={dog} className='absolute right-2 bottom-28 z-0' />
        <Image source={bone} className='absolute left-8 bottom-0 z-0' />
      </View>
      <StatusBar style="auto" />
    </CenteredView>
  );
}