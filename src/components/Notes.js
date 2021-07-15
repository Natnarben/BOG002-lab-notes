import React, { useEffect, useState } from 'react'
import { NotesForm } from '../components/NotesForm'
import fire from "./Firebase";

export const Notes = () => {

    const [notes, setNotes] = useState([]);
    const [currentId, setcurrentId] = useState("");

    const addOrEditNotes = async (notesObject) => {
        if(currentId === "") {
            await fire.firestore().collection("Notes").doc().set(notesObject);
        console.log("nueva nota agregada");
        } else {
            await fire.firestore().collection("Notes").doc(currentId).update(notesObject);
        }
        setcurrentId("");   
    }
    const onDeleteNote = async (id) => {
        if (window.confirm("¿Estas segurx que deseas eliminar esta nota?")) {
            await fire.firestore().collection("Notes").doc(id).delete();
            console.log("nota eliminada");
        }
    }

    const getNotes = async () => {
        fire.firestore().collection("Notes").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({...doc.data(), id:doc.id});
            });
            setNotes(docs);
        });      
    };
    useEffect(() => {
        getNotes()
    }, []); 

    return (
        <div>
            <NotesForm {...{addOrEditNotes, currentId, notes}}/>
            <div className="allNotesContainer">
                { notes.map(note => (
                    <div className="what-ever" key={note.id}>
                        <div className="whatever-2">
                            <div>
                                <h4>{note.titulo}</h4>
                                <p onClick={() => onDeleteNote(note.id)}>X</p>
                                <p onClick={() => setcurrentId(note.id)}>editar</p>
                            </div>
                            <p>{note.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>   
    )
}
