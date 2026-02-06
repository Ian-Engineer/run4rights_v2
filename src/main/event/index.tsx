import { Box, Paper, Skeleton, Typography } from '@mui/material';
import { Run4RightsButton } from 'main/_sharedComponents';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../../api';
import { Event } from 'models';
import EventCard from 'main/_sharedComponents/EventCard';
import utils from '../../utils';

function EventPage() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState<boolean>(true);
  const [event, setEvent] = useState<Event>();
  const [error, setError] = useState<string | null>(null);

  const params = useParams();

  // make a request to get this event details using query param

  useEffect(() => {
    api.getRequest(`/events/${params.id}`).then((response) => {
      // handle response
      if (response.success && response.data) {
        setEvent(response.data);
      }
    }).catch((error) => {
      // handle error
      setError("Error loading event details.");
    }).finally(() => {
      setLoading(false);
    });
  }, [params]);

  return (
    <div className='flex w-full h-full'>
        <div id="left-side" className="w-full sm:w-3/5 text-left flex flex-col gap-8 mt-4 mb-4">
          <Box sx={{bgcolor: 'primary.main'}} className='w-full flex flex-row h-fit p-4'>
            { loading ? (
              <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} className='w-full'/>
            ) : (
              <Typography variant="h4" fontWeight={'900'}>
                  {event?.organization}
              </Typography>
            )}
          </Box>
          <div className='flex flex-col ml-8'>
            {event?.eventDate ? (
              <Typography variant="h5" color='secondary' fontWeight={"500"}>
                {utils.formatDateLongUS(event?.eventDate)}
              </Typography>
            ) : (null)}
          </div>
        </div>
        <div id="right-side">

        </div>
    </div>
  )
}

export default EventPage
