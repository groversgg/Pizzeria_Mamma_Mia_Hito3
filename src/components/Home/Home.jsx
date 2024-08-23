import React from 'react';
import CardPizza from '../CardPizza/CardPizza'; // Ajusta la ruta según tu estructura de archivos
import Header from './Header';

const Home = ({productos}) => {
    return (
            <div className="container">
                <div className="row">
                    {productos.map((productos)=>(
                        <div className="col-md-4" key={productos.id}>
                        <CardPizza productos={productos}/>
                    </div>
                    ))}
                </div>
            </div>


    );
}

export default Home;
