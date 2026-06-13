import React from 'react';
import Button from 'react-bootstrap/Button';
import useNotesStore from '../stores/useNotesStore'

import IconPlus from '../assets/images/Icons/IconPlus';

function NewNoteButton() {
    const NewNote = useNotesStore((state) => state.addNote)
    return <Button variant="warning" className="justifiy-content-end" onClick={NewNote}><IconPlus /></Button>
}

export default NewNoteButton;