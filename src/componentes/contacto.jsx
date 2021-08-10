import React from 'react';

function Contacto({nombre, apellido, telefono}){
    return(
        <div class="contenedor">
            <div className="fila">
                <div className="colum">
                    Nombre
                </div>
                <div className="colum">
                    {nombre}
                </div>

            </div>
        </div>
    )
}