import { Box, CircularProgress, Typography } from '@mui/material';
import { PolaroidGallery, RenderDate } from 'main/_sharedComponents';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../../api';
import { ApiResponse, Event, Runner } from 'models';
import utils from '../../utils';
import { RunnerCard } from 'main/_sharedComponents/RunnerCard';

function EventPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [event, setEvent] = useState<Event>();
  const [error, setError] = useState<string | null>(null);
  const [mapUrl, setMapUrl] = useState<string | null>(null);

  const params = useParams();

  // make a request to get this event details using query param

  useEffect(() => {
    api.getRequest(`/events/${params.id}`).then((response: ApiResponse<Event>) => {
      // handle response
      if (response.success && response.data) {
        setEvent(response.data);
        const event: Event = response.data;
        if (event.streetAddress) {
          const fullAddress = `${event.streetAddress}, ${event.city}, ${event.state} ${event.zipcode}`;
          const encodedAddress = encodeURIComponent(fullAddress);
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
          setMapUrl(mapsUrl);
        }
      }
    }).catch(() => {
      // handle error
      setError("Error loading event details.");
    }).finally(() => {
      setLoading(false);
    });
  }, [params]);

  return (
    <div className='flex w-full h-full pb-4'>
      {loading ? (
        <div className='w-full h-full flex grow justify-center items-center'>
          <CircularProgress size={"5rem"} />
        </div>      
      ) : !error ? (
        <div className="flex sm:flex-row flex-col">
          <div id="left-side" className="w-full sm:w-3/5 text-left flex flex-col gap-8 mt-4 mb-4">
            <Box sx={{bgcolor: 'primary.main'}} className='w-full flex flex-row h-fit p-4'>
                <Typography variant="h4" fontWeight={'900'}>
                    {event?.organization}
                </Typography>
            </Box>
            <div className='flex flex-col sm:items-start items-center'>
              {event?.eventDate ? (
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-row gap-4'>
                    <div className="h-min-fit w-min-fit flex justify-center items-center">
                      <RenderDate eventDate={new Date(event.eventDate)} dateSize="h4" borderRadius="10px" displayYear={true}/>
                    </div>
                    <div className='flex flex-col w-fit gap-4'>
                      <div>
                        {event.startTime ? (
                          <Typography variant='h6' fontWeight={700} color="primary.main">
                            Start: {utils.formatTime(event.startTime, event.timezone)}
                          </Typography>
                        ) : null}
                        {event.endTime ? (
                          <Typography variant='h6' fontWeight={700} color="primary.main">
                            End: {utils.formatTime(event.endTime, event.timezone)}
                          </Typography>
                        ) : null}
                      </div>
                      <a
                        href={mapUrl || undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <div>
                          <Typography variant="body2" fontWeight={700} color="primary">
                            {event.locationName}
                          </Typography>

                          <Typography variant="body2" fontWeight={700} color="primary">
                            {event.streetAddress}
                          </Typography>

                          <Typography variant="body2" fontWeight={700} color="primary">
                            {event.city}, {event.state} {event.zipcode}
                          </Typography>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='flex flex-col gap-4 p-4'>
                    <Typography variant='h5' fontWeight={700} color='primary'>About the Event</Typography>
                    <Typography 
                      variant='body1' 
                      fontWeight={500} 
                      color='primary'
                      sx={{ whiteSpace: 'pre-line' }}
                    >
                      {event.description}
                    </Typography>
                  </div>
                  <div className='flex flex-col gap-4 p-4'>
                    <Typography variant='h5' fontWeight={700} color='primary'>The Runners</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 4,
                        justifyContent: "center",
                        paddingBottom: 4
                      }}
                    >
                      {event.runners !== undefined && event?.runners?.length > 0 ? event?.runners?.map((runner: Runner) => 
                        <RunnerCard key={`modifyRunnersList-runner:${runner.id}`} runner={runner}/>
                      )
                      : (
                        <Typography variant="h6" color="primary">No runners listed. You can add runners below.</Typography>
                      )}
                    </Box>
                  </div>
                </div>
              ) : (
                <Typography color="primary">Error loading event info.</Typography>
              )}
            </div>
          </div>
          <div id="right-side" className='p-4'>
            {event?.id ? (
              <div>
              <PolaroidGallery eventId={event.id} />
              </div>
            ) : null}
          </div>
        </div>
      ) : null
      }
    </div>
  )
}

export default EventPage
