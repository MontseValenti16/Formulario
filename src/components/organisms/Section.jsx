import { useState } from 'react';
import Form from '../molecules/Form';
import styled from 'styled-components';
import LinkedList from '../../data/LinkedList';

const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const OrderCard = styled.div`
  border: 3px solid #080a0e;
  background: linear-gradient(145deg, lightblue, lightpink);
  padding: 10px;
  margin: 10px;
  border-radius: 10%;
  width: 300px;
  box-shadow: 5px 5px 5px rgba(56, 92, 146, 0.75);
`;

function Section() {
  const [orderList] = useState(new LinkedList());
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    orderList.push(order);
    setOrders(orderList.getAll());
  };

  return (
    <div>
      <Form onSubmit={addOrder} />
      <OrderList>
        {orders.map((order, index) => (
          <OrderCard key={index}>
            <p>Nombre: {order.nombre}</p>
            <p>Teléfono: {order.numero}</p>
            <p>Cantidad: {order.cantidad}</p>
            <p>Talla: {order.talla}</p>
            <p>Fecha de la compra: {order.fecha}</p>
            <p>Total a Pagar: {order.pago}</p>
            <p>Total Deuda: {order.deuda}</p>
          </OrderCard>
        ))}
      </OrderList>
    </div>
  );
}

export default Section;
