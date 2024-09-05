import React from 'react'
import DetailView from '../ui/views/DetailView'
import Note from '../ui/notes/Note'
import noteData from '../data/NoteData'
import DonationCards from '../ui/cards/DonationCards'

const note = noteData.find(note => note.page === 'donation');
const topNote = note.list.find(n => n.position === 'top');
const bottomNote = note.list.find(n => n.position === 'bottom');

const DonationPage = () => {
  return (
    <DetailView bgColor="bg-yellow" size="fit-content">
      <Note 
        position="top"
        content={topNote.content}
      />
      <DonationCards />
      <Note 
        position="bottom"
        content={bottomNote.content}
        link={{ text: bottomNote.link.text, href: bottomNote.link.url }}
      />
    </DetailView>
  )
}

export default DonationPage