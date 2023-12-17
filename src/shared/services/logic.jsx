import React, { useState } from 'react';

const OrdersTable = () => {
  const [sideMenuVisible, setSideMenuVisible] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const Orders = [
    {
        productName: 'Foldable Mini dron',
        productNumber: '85631',
        paymentStatus: 'Due',
        shipping: 'Pending',
    },
    {
        productName: 'Larvender KF102 Drone',
        productNumber: '36378',
        paymentStatus: 'Refunded',
        shipping: 'Declined',
    },
    {
        productName: 'Ruco F11 dron',
        productNumber: '49347',
        paymentStatus: 'Due',
        shipping: 'Pending',
    },
    {
        productName: 'Dron with Camera Drone',
        productNumber: '96996',
        paymentStatus: 'Paid',
        shipping: 'Delivered',
    },
    {
        productName: 'GPS 4k Drone',
        productNumber: '22821',
        paymentStatus: 'Paid',
        shipping: 'Pending',
    },
    {
        productName: 'Losenge Drone',
        productNumber: '00482',
        paymentStatus: 'Paid',
        shipping: 'Delivered',
    },

]

  const toggleSideMenu = () => {
    setSideMenuVisible(!sideMenuVisible);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div>
      <aside style={{ display: sideMenuVisible ? 'block' : 'none' }}>
        <p>Sidebar Content</p>
      </aside>

      <button id="menu-btn" onClick={toggleSideMenu}>
        Open Menu
      </button>

      <button id="close-btn" onClick={() => setSideMenuVisible(false)}>
        Close Menu
      </button>

      <button className="theme-toggler" onClick={toggleTheme}>
        Toggle Theme
      </button>

      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Number</th>
            <th>Payment Status</th>
            <th>Shipping</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {Orders.map((order, index) => (
            <tr key={index}>
              <td>{order.productName}</td>
              <td>{order.productNumber}</td>
              <td>{order.paymentStatus}</td>
              <td className={order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'success'}>
                {order.shipping}
              </td>
              <td className="primary">Details</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
