import { View, Text } from 'react-native'
import React from 'react'
import noteData from '../data/NoteData';
import Note from '../ui/notes/Note';
import UnsafeCards from '../ui/cards/UnsafeCards';

const note = noteData.find(note => note.page === 'unsafe');
const topNote = note.list.find(n => n.position === 'top');
const bottomNote = note.list.find(n => n.position === 'bottom');

const UnsafePage = () => {
  return (
    <View>
      <Note 
        position="top"
        content={topNote.content}
      />
      <UnsafeCards />
      <Note 
        position="top"
        content={bottomNote.content}
      />
    </View>
  )
}

export default UnsafePage