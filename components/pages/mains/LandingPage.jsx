import React from 'react';
import { Text, Image, View, Share, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link, router } from 'expo-router';

import CenteredView from '../../ui/views/CenteredView';
import Buttons from '../../ui/buttons/Buttons';

import cover from '../../../assets/images/landing-human-pet.png';
import share from '../../../assets/images/btn-share.png';
import donate from '../../../assets/images/btn-donate.png';
import bone from '../../../assets/images/bg-icon-bone.png';
import bowl from '../../../assets/images/bg-icon-bowl.png';
import dog from '../../../assets/images/bg-icon-dog.png';

export default function LandingPage() {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: '🐾 Discover the best resources for your furry friend with Canine Guide!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
          Alert.alert('Shared successfully!');
        } else {
          // Shared
          Alert.alert('Thanks for sharing!');
        }
      } 
    } catch (error) {
      Alert.alert('Error:', error.message);
    }
  };

  return (
    <CenteredView bgColor="bg-yellow" size="flex-1">
      <View
        className='justify-center items-center bg-white py-12 rounded-3xl shadow-md mt-12 z-10'
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
      <View className='z-10 flex items-center'>
        <Buttons 
          type='start'
          text='GET STARTED'
          handlePress={() => router.push('/menu')}
        />
        <View className='flex flex-row w-[52vw] justify-between'>
          <Buttons 
            type='landing'
            bgColor='bg-white'
            src={share}
            onShare={onShare}
          />
          <Buttons 
            type='landing'
            bgColor='bg-sage'
            src={donate}
            handlePress={() => router.push('/donation')}
          />
        </View>
      </View>
      <View className='mt-8 flex justify-center items-center'>
        <Text className='text-[#FFF] text-[12px] font-rs-reg tracking-wide shadow-md'>
          developed with 💛 by <Link href="https://hypyeon.github.io/portfolio-web-v2/" className="font-rs-med tracking-wider">HP</Link>
        </Text>
        <Text className="text-[#FFF] font-ruda-reg text-[11px]">icons by <Link href="https://icons8.com">Icons8</Link></Text>
      </View>
      <View className='relative w-[100vw]'>
        <Image source={bowl} className='absolute -left-1 bottom-44 z-0' />
        <Image source={dog} className='absolute right-1 bottom-32 z-0' />
        <Image source={bone} className='absolute left-8 bottom-0 z-0' />
      </View>
      <StatusBar style="auto" />
    </CenteredView>
  );
}