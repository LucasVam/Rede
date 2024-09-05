import React from 'react';
import './App.css';

function Lista() {
  return (
   
    <div>
      <section className='section_1'>
        <h1>SEU PEDIDO ESTÁ PRONTO</h1>
        <h1 className='nome'>LUCAS</h1>
      </section>

        <section className='section_2'>
          <h1 >PEDIDOS CHAMADOS</h1>
          <ul className='lista' >
              <li>JOÃO</li>
              <li>PEDRO</li>
              <li>ISAAC</li>
              <li>ANNA</li>
              <li>MARIA</li>
          </ul>
        </section>
    </div>
  );
}

export default Lista;
