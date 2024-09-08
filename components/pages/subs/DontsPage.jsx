import { View } from 'react-native'
import React from 'react'
import noteData from '../../data/NoteData';
import Note from '../../ui/notes/Note';
import CommunicatingCards from '../../ui/cards/CommunicatingCards';
import CardData from '../../data/CardData';

const note = noteData.find(note => note.page === 'donts');
const topNote = note.list.find(n => n.position === 'top');
const data = CardData.find(data => data.page === 'communicating').list;

const DontsPage = () => {
  return (
    <View>
      <Note 
        position="top"
        content={topNote.content}
      />
      <CommunicatingCards data={data} />
    </View>
  )
}

export default DontsPage