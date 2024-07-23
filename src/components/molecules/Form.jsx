import React, { useState } from 'react';
import Field from './Field';
import Button from '../atoms/Button';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
  text-align: center;
  justify-content: center;
`;

const FormFields = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

function Form({ onSubmit }) {
  const [nombre, setName] = useState('');
  const [numero, setNumero] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [talla, setTalla] = useState('');
  const [fecha, setFecha] = useState('');
  const [pago, setPago] = useState('');
  const [deuda, setDeuda] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (numero.length !== 10) {
      Swal.fire({
        title: 'Error',
        text: 'El número telefónico debe tener 10 dígitos.',
        icon: 'error',
      });
      return;
    }

    if (cantidad <= 0) {
      Swal.fire({
        title: 'Error',
        text: 'La cantidad debe ser mayor a 0.',
        icon: 'error',
      });
      return;
    }
    if (talla <= 0) {
      Swal.fire({
        title: 'Error',
        text: 'La talla debe ser mayor a 0.',
        icon: 'error',
      });
      return;
    }
    const data = {
      nombre,
      numero,
      cantidad,
      talla,
      fecha,
      pago,
      deuda,
    };
    onSubmit(data);
    Swal.fire({
      title: 'Datos Guardados',
      text: '¡Los datos del pedido han sido guardados exitosamente!',
      icon: 'success',
    });

    setName('');
    setNumero('');
    setCantidad('');
    setTalla('');
    setFecha('');
    setPago('');
    setDeuda('');
  };

  return (
    <FormContainer>
      <FormFields>
        <form onSubmit={handleSubmit}>
          <Field type="text" placeholder="Nombre" text="Nombre: " val={nombre} fnVal={setName} />
          <Field type="tel" placeholder="Ingrese 10 dígitos" text="Teléfono: " val={numero} fnVal={setNumero} />
          <Field type="number" placeholder="Cantidad de artículos" text="Cantidad: " val={cantidad} fnVal={setCantidad} min={1} step={1} />
          <Field type="number" placeholder="Talla" text="Talla: " val={talla} fnVal={setTalla} min={1} step={1} />
          <Field type="date" placeholder="Fecha" text="Fecha de la compra: " val={fecha} fnVal={setFecha} />
          <Field type="text" placeholder="Total a Pagar" text="Total a Pagar: " val={pago} fnVal={setPago} />
          <Field type="text" placeholder="Total de Deuda" text="Total de Deuda: " val={deuda} fnVal={setDeuda} />
          <Button type="submit" label="Guardar y mostrar datos" />
        </form>
      </FormFields>
    </FormContainer>
  );
}

export default Form;
