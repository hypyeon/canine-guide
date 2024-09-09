import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from 'react'
import { Text, View } from 'react-native'

const Checkbox = (props) => {
  const { color, text, index, linked, sideNote } = props;

  const [ isChecked, setIsChecked ] = React.useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  }

  const renderColor = (color) => {
    switch (color) {
      case 'yellow':
        return '#f7b32b';
      case 'sage':
        return '#a9e5bb';
      default:
        return;
    }
  }

  return (
    <>
      <View  
        className={`${sideNote ? 'pt-2 pb-1' : 'py-2'} flex-row justify-start items-start gap-2 w-[68vw]`}
      >
        <BouncyCheckbox
          key={index}
          size={18}
          fillColor={renderColor(color)}
          unFillColor="transparent"
          iconStyle={{ borderColor: { color } }}
          innerIconStyle={{ borderWidth: 1.5, borderRadius: '5%' }}
          disableText={true}
          isChecked={isChecked}
          onPress={handleCheck}
        />
        <Text className={`font-ruda-reg ${isChecked ? 'text-gray-400' : 'text-white'}`}>
          {text} {linked && <Text>{linked}</Text>}
        </Text>
    </View>
    {sideNote && 
      <Text className="mb-2">{sideNote}</Text>
    }
    </>
  )
}

export default Checkbox