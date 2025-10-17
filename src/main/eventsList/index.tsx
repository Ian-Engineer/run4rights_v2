import { useEffect, useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import { Typography } from '@mui/material'
import { ApiResponse, EventsSorted, Event } from 'models';
import EventCard from 'main/_sharedComponents/EventCard';
import api from "../../api"

function EventsPage() {
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [activeEvent, setActiveEvents] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=>{
    api.getRequest("/events/sorted")
      .then((response: ApiResponse<EventsSorted>) => {
        if (response.success) {
          setPastEvents(response.data.past || []);
          setUpcomingEvents(response.data.future || []);
          setActiveEvents(response.data.active);
        }
      })
      .catch(error => {
        console.log(error)
      })
      .finally(()=>{
        setLoading(false);
      })
  },[])

  return (
    <div className='flex flex-col gap-4 m-2 items-center text-center'>
      
      {activeEvent ? 
        <div id="activeEvent">
          <Typography variant='h4'>
            Active Events:
          </Typography>
          <EventCard event={event} future={true} key={`eventCardFor:${activeEvent.organization}-on-${activeEvent.date}`}/>
        </div>
      :
      null
      }
      <div id="upcomingEvents">
        <Typography variant='h4'>
          Upcoming Events:
        </Typography>
        {
          upcomingEvents.length ? upcomingEvents.map((event) => 
            <EventCard event={event} future={true} key={`eventCardFor:${event.organization}-on-${event.date}`}/>
          )
            :
          "Currently, there are no upcoming events."
        }
      </div>
      <div id="pastEvents">
        <Typography variant='h4'>
          Past Events:
        </Typography>
        {
          pastEvents.map((event) => 
            <EventCard event={event} key={`eventCardFor:${event.organization}-on-${event.date}`}/>
          )
        }
      </div>
    </div>
  )
}

export default EventsPage
