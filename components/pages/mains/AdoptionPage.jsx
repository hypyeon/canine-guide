import React from 'react'
import DetailView from '../../ui/views/DetailView'
import Note from '../../ui/notes/Note'
import noteData from '../../data/NoteData'
import CardData from '../../data/CardData'
import AdoptionCards from '../../ui/cards/AdoptionCards'
import ChecklistCards from '../../ui/cards/ChecklistCards'

const adoptionData = CardData.find(data => data.page === 'adoption').list;
const checklistData = CardData.find(data => data.page === 'checklist').list;

const note = noteData.find(note => note.page === 'adoption');
const topNote = note.list.find(n => n.position === 'top');

const AdoptionPage = () => {
  return (
    <DetailView bgColor="bg-sage" size="fit-content">
      <Note 
        position="top"
        content={topNote.content}
      />
      <AdoptionCards data={adoptionData} />
      <ChecklistCards data={checklistData} />
    </DetailView>
  )
}

export default AdoptionPage