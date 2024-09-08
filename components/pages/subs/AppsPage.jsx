import { View } from 'react-native'
import React from 'react'
import CardData from '../../data/CardData';
import noteData from '../../data/NoteData';
import Note from '../../ui/notes/Note';
import AppsCards from '../../ui/cards/AppsCards';

const data = CardData.find(data => data.page === 'apps').list;

const note = noteData.find(note => note.page === 'apps');
const bottomNote = note.list.find(n => n.position === 'bottom');


const AppsPage = () => {
  return (
    <View>
      <AppsCards data={data} />
      <Note 
        position="bottom"
        content={bottomNote.content}
      />
    </View>
  )
}

export default AppsPage