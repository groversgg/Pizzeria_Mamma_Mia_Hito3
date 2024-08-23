// CardPizza.jsx
import React from 'react';
import { formatNumber } from '../../assets/js/utils';
import './cardpizza.css'

const CardPizza = ({ productos }) => {
  return (
    <div className="card" >
      <img src={productos.img} className="card-img-top" alt={productos.name} />
      <div className="card-body">
        <h4 className="card-title">
          {productos.name}
        </h4>

        <hr />
        <p className="card-text">
          <strong>Ingredientes:</strong>
        </p>
        <ul>
          {productos.ingredients.map((ingredient,index) =>(
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <hr/>
        <p className="card-text">
          <strong>Precio: ${formatNumber(productos.price)}</strong>
        </p>
        <div className="mt-auto d-flex justify-content-around gap-2">
          <a href="#" className="btn btn-outline-success col-5">
            <i className="fa-solid fa-eye"></i> Ver mas
          </a>
          <a href="#" className="btn btn-outline-success col-5">
            <i className="fa-solid fa-cart-shopping"></i> Añadir
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;



/*
<div className="card h-100" >
<img src={productos.img} className="card-img-top" alt={productos.name} />
<div className="card-body">
  <h4 className="card-title">
    {productos.name}
  </h4>
  
  <hr />
  <p className="card-text">
  <strong>Ingredientes:</strong>{" "}{productos.ingredients.join(", ")}
  </p>
  <hr />
  <p className="card-text">
    Precio: ${formatNumber(productos.price)}
  </p>
  <div className="mt-auto d-flex justify-content-around gap-2">
    <a href="#" className="btn btn-outline-success col-5">
    <i className="fa-solid fa-eye"></i> Ver mas
    </a>
    <a href="#" className="btn btn-outline-success col-5">
    <i className="fa-solid fa-cart-shopping"></i> Añadir
    </a>
  </div>

</div>
</div>*/