import { View } from 'react-native'
import React from 'react'
import noteData from '../../data/NoteData';
import Note from '../../ui/notes/Note';
import CommunicatingCards from '../../ui/cards/CommunicatingCards';
import CardData from '../../data/CardData';

const note = noteData.find(note => note.page === 'language');
const topNote = note.list.find(n => n.position === 'top');
const bottomNote = note.list.find(n => n.position === 'bottom');
const data = CardData.find(data => data.page === 'language').list;

const LanguagePage = () => {
  return (
    <View>
      <Note 
        position="top"
        content={topNote.content}
      />
      <CommunicatingCards data={data} />
      <Note 
        position="bottom"
        content={bottomNote.content}
      />
    </View>
  )
}

export default LanguagePage