import { useRouteLoaderData } from 'react-router-dom';

import { EventForm } from '../components/EventForm';

export const EditEventPage = () => {
  const data = useRouteLoaderData('event-detail');

  return <EventForm method={'PATCH'} event={data.event} />
};