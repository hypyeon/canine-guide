import React from 'react'
import DetailView from '../../ui/views/DetailView'
import Note from '../../ui/notes/Note'
import noteData from '../../data/NoteData'
import WebsitesCards from '../../ui/cards/WebsitesCards'
import CardData from '../../data/CardData'

const data = CardData.find(data => data.page === 'donation').list;

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
      <WebsitesCards data={data} />
      <Note 
        position="bottom"
        content={bottomNote.content}
        link={bottomNote.link.map(({ text, url }) => ({ text, href: url }))}
      />
    </DetailView>
  )
}

export default DonationPage