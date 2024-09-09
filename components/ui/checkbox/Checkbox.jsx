import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from 'react'

const Checkbox = (props) => {
  const { color, text, isChecked, handleCheck, index } = props;

  return (
    <BouncyCheckbox
      key={index}
      size={18}
      fillColor={color}
      unFillColor="transparent"
      iconStyle={{ borderColor: { color } }}
      innerIconStyle={{ borderWidth: 1.5, borderRadius: '5%' }}
      text={text}
      textStyle={{ 
        fontSize: 14, 
        textDecorationLine: "none", 
        color: 'white'
      }}
      isChecked={isChecked}
      onPress={handleCheck}
    />
  )
}

export default Checkbox