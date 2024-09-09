import { View, Text } from 'react-native'
import React from 'react'
import DetailView from '../../ui/views/DetailView'
import noteData from '../../data/NoteData'
import Note from '../../ui/notes/Note'
import ExpectCards from '../../ui/cards/ExpectCards'

const note = noteData.find(note => note.page === 'expect');
const topNote = note.list.find(n => n.position === 'top');

const ExpectPage = () => {
  return (
    <DetailView bgColor="bg-sage" size="fit-content">
      <Note 
        position="top"
        content={topNote.content}
      />
      <ExpectCards />
    </DetailView>
  )
}

export default ExpectPage