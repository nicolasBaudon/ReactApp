import React from 'react';

export const Loading = () => {
    return (
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span> {/*Aca agrega un spinner y con el fa-pulse indica que debe girar, con el fa-3x es la velocidad, y con el fa-fw, la direccion*/}
            <p>Loading . . . </p>
        </div>
    );
}