import React from "react"
import NoteCard from "./NoteCard"
import useNotesStore from "../stores/useNotesStore"

function NotesList() {
  const notes = useNotesStore((state) => state.notes)
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  )
}

export default NotesList;