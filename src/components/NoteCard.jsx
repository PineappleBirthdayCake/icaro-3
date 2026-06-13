import React from "react";
import useNotesStore from "../stores/useNotesStore";
import Button from "react-bootstrap/Button";
import TextareaAutosize from "react-textarea-autosize";

import IconCheck from "../assets/images/Icons/IconCheck";
import IconTrash from "../assets/images/Icons/IconTrash";

function NoteCard({ note }) {
    const deleteNote = useNotesStore((state) => state.deleteNote)
    const completeNote = useNotesStore((state) => state.completeNote)
  return (
    <div className={note.completed ? 'CompleteNoteCard' : 'NoteCard'}>
      <input type="text" placeholder="Titulo" defaultValue={note.title} className="NoteTitle" onChange={(e) => updateNote(note.id, { title: e.target.value })} />
      <hr className="NoteBreak" />
      <TextareaAutosize
        defaultValue={note.body}
        placeholder="Descripcion"
        onChange={(e) => updateNote(note.id, { body: e.target.value })}
        minRows={3}
        maxRows={10}
        className="NoteBody"
      />
      <Button variant={note.completed ? "outline-success" : "success"} onClick={() => completeNote(note.id)} className="NoteButton"><IconCheck /></Button>
      <Button variant="danger" onClick={() => deleteNote(note.id)} className="NoteButton ml-auto"><IconTrash /></Button>
    </div>
  )
}

export default NoteCard;