// Crea un formulario que reciba un archivo
// y lo envíe a la ruta /upload
// El formulario debe tener un botón de submit
// y un campo de texto para el nombre del archivo

import React, { useState, useEffect } from 'react';

function Form() {
    const [file, setFile] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("/upload", {
            method: "POST",
            body: JSON.stringify({
              file: file,
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setFile("");
            console.log("Hola");
          } 
        } catch (err) {
          console.log(err);
        }
      };
    
    return (
    <form enctype="multipart/form-data" method="post"  onSubmit={handleSubmit}>
        <input type="file" name="file" />
        <input type="text" name="filename" />
        <button type="submit">Upload</button>
    </form>
    );
}

export default Form;