import { useEffect, useState } from 'react'
import { Divider, Skeleton, Typography } from '@mui/material'
import EventCard from 'main/_sharedComponents/EventCard';
import { Event, ApiResponse } from 'models';
import api from '../../api';

function ModifyEventSelection() {
  const [ eventsList, setEventsList ] = useState<Event[]>([]);
  const [ error, setError ] = useState<string | null>(null)
  const [ loading, setLoading ] = useState<boolean>(true);

  useEffect(()=> {
    // make a get request to get all events
    api.getRequest("/events").then((res: ApiResponse<Event[]>) => {
      if (res.success) {
        setEventsList(res.data)
      } else {
        setError(res.message);
      }
    }).catch(error => {
      setError("Error getting events list.");
    }).finally(()=>{
      setLoading(false);
    })
  }, [])

  return (
    <div className="flex flex-col w-full h-fit min-h-full p-4 align-center items-center">
      <Typography variant='h4' color='primary'>Modify Events Page</Typography>
      <Divider sx={{backgroundColor: "primary.main"}}  className='w-full'/>
      <div className="flex flex-col gap-6">
        {
          eventsList.length ? eventsList.map((event) => 
            <EventCard event={event} future={true} key={`eventCardFor:${event.organization}-on-${event.eventDate}`}/>
          )
            :
          loading ? 
            <Skeleton variant="rectangular"/>
           : 
            <Typography color={error ? 'error' : 'primary'}>{error ? "Error getting event details. Try again soon." : "Currently, there are no upcoming events scheduled."}</Typography>
          
        }
      </div>
    </div>
  )
}

export default ModifyEventSelection
