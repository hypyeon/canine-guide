import { View, Text } from 'react-native'
import React from 'react'
import DetailPage from '../components/ui/DetailPage'
import Note from '../components/ui/Note'
import noteData from '../components/ui/NoteData'
import DonationCards from '../components/ui/DonationCards'

const topNote = noteData.find(note => note.page === 'donations');

const Donation = () => {
  return (
    <DetailPage bgColor="bg-yellow" size="fit-content">
      <Note 
        content={topNote.content}
        link={{ text: topNote.link.text, href: topNote.link.url }}
      />
      <DonationCards />
    </DetailPage>
  )
}

export default Donation