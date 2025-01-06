import { Outlet } from 'react-router-dom';

import { EventsNavigation } from '../components/EventsNavigation';

export const EventsRootLayout = () => {
  return (
    <>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};