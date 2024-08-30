import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CenteredView from '../components/ui/CenteredView';
import Card from '../components/ui/Card';

export default function App() {
  return (
    <CenteredView bgColor="bg-yellow" size="flex-1">
      <Card
        radius="[15px]"
        shadow="[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
        bgColor="bg-white"
        size="w-72 h-auto"
        className="py-8"
      >
        <Text className='text-yellowtxt Ruda-Med'>the ultimate</Text>
        <Text className='text-black RS-ExLi'>CANINE GUIDE</Text>
        <Text>
          Bringing a new pet {'\n'}
          into your family is a big step, {'\n'}
          and we’re here to make it easier. 
        </Text>
      </Card>
      <StatusBar style="auto" />
    </CenteredView>
  );
}