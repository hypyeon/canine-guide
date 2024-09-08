import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'

const Carousel = (props) => {
  const { titles = [], onSelect, active, width = '100%' } = props;
  const scrollViewRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidths, setItemWidths] = useState({});

  const handleSelect = (title, index) => {
    onSelect(title);
    let scrollToPosition = 0;

    if (index === 0) {
      scrollToPosition = 0;
    } else if (index === titles.length - 1) {
      scrollToPosition = containerWidth;
    } else {
      const halfContainerWidth = containerWidth / 2;
      const itemWidth = itemWidths[index];
      const prevItemsWidth = Object.values(itemWidths).slice(0, index).reduce((acc, w) => acc + w, 0);
      scrollToPosition = prevItemsWidth + itemWidth / 2 - halfContainerWidth;
    }

    scrollViewRef.current?.scrollTo({ x: scrollToPosition, animated: true });
  };

  return (
    <View 
      className="min-w-full mb-5 flex-row justify-center items-center"
      onLayout={(event) => {
        const { width } = event.nativeEvent.layout;
        setContainerWidth(width); // Capture the container width
      }}
    >
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ 
          width: width, 
          justifyContent: 'center', 
          gap: 12 
        }}
      >
        {titles.map((title, index) => (
          <TouchableOpacity key={index} onPress={() => handleSelect(title, index)}>
            <View 
              className={`
                rounded-2xl py-1 px-3 bg-white 
                ${active === title ? 'border-black border-[1.25px]' : 'border-transparent border-[1.25px] opacity-50'}`}
              onLayout={(event) => {
                const { width } = event.nativeEvent.layout;
                setItemWidths(prev => ({ ...prev, [index]: width })); // Capture width of each item
              }}
            >
              <Text 
                key={index}
                className="font-rs-reg text-[14px] text-black"
              >
                {title.toUpperCase()}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Carousel;
