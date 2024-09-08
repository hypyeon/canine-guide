import { View } from 'react-native'
import React from 'react'
import CardData from '../../data/CardData';
import noteData from '../../data/NoteData';
import Note from '../../ui/notes/Note';
import WebsitesCards from '../../ui/cards/WebsitesCards';

const data = CardData.find(data => data.page === 'tools').list;

const note = noteData.find(note => note.page === 'tools');
const bottomNote = note.list.find(n => n.position === 'bottom');

const ToolsPage = () => {
  return (
    <View>
      <WebsitesCards data={data} />
      <Note 
        position="bottom"
        content={bottomNote.content}
      />
    </View>
  )
}

export default ToolsPage