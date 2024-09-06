import { View } from 'react-native'
import React from 'react'
import Note from '../ui/notes/Note'
import noteData from '../data/NoteData'
import LifeStageCards from '../ui/cards/LifeStageCards'
import CardData from '../data/CardData'

const note = noteData.find(note => note.page === 'puppy');
const data = CardData.find(data => data.page === 'puppy').list;

const PuppyPage = () => {
  return (
    <View>
      <Note 
        position="top"
        content={note.list.find(n => n.position === 'top').content}
      />
      <LifeStageCards data={data} />
    </View>
  )
}

export default PuppyPage