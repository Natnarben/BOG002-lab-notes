import React, { useState, useEffect } from 'react'
import fire from "./Firebase";

export const NotesForm = (props) => {

    const initialSatateValues = {
        titulo: "",
        descripcion: "",
    };

    const [values, setValues] = useState(initialSatateValues);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({...values, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.addOrEditNotes(values);
        setValues({...initialSatateValues});
    }

    const getNoteById  = async (id) => {
        const doc = await fire.firestore().collection("Notes").doc(id).get();
        setValues({...doc.data()})
    }

    useEffect(() =>{
        if (props.currentId === "") {
            setValues({...initialSatateValues });
        } else {
            getNoteById(props.currentId);
        }

    },[props.currentId]);

    return (
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="name-notes-container">
                    <div className="user-name-cont">
                        <p className="user-name">Hola Nat</p>
                    </div>
                    <input 
                        type="text" 
                        className="note-names" 
                        placeholder="Título Ej: Libros 2021 "
                        name="titulo" 
                        onChange={handleInputChange}
                        value={values.titulo}
                        required
                    />
                </div>
                <div className="note-description">
                    <div className="description-cont">
                        <p className="description-tittle">Descripcion</p>
                    </div>
                    <textarea 
                        className="description" 
                        name="descripcion" 
                        placeholder="Ej: Robin S. Sahrma-El club de las am "
                        onChange={handleInputChange}
                        value={values.descripcion}
                    ></textarea>
                </div>
                <button className="btn-guardar">
                    {props.currentId === "" ? "Guardar" : "Actualizar"}
                </button>
            </form>
    )
}
