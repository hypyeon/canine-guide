import { View, Text } from 'react-native'
import React from 'react'
import noteData from '../data/NoteData';
import Note from '../ui/notes/Note';
import SafeCards from '../ui/cards/SafeCards';

const note = noteData.find(note => note.page === 'safe');
const topNote = note.list.find(n => n.position === 'top');

const SafePage = () => {
  return (
    <View>
      <Note 
        position="top"
        content={topNote.content}
      />
      <SafeCards />
    </View>
  )
}

export default SafePage