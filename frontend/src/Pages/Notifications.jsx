import React from 'react';
import { FaRegBell } from 'react-icons/fa';

const Notifications = () => {
  const notifications = [
    { id: 1, text: 'Notification 1' },
    { id: 2, text: 'Notification 2' },
    { id: 3, text: 'Notification 3' },
  ];

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Notifications
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente
            unde voluptatum alias vero debitis, magnam quis quod.
          </p>
        </div>
        <div className="flex flex-col px-20 text-center justify-center  w-full m-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="px-4 py-2 lg:w-full">
              <div className="h-full bg-gray-800 p-8 rounded">
                <FaRegBell />
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Notification {notification.id}
                </h2>
                <p className="leading-relaxed text-base">{notification.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notifications;
