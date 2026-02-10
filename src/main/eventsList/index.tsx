import { useEffect, useState } from 'react'
import { Box, Collapse, Divider, Typography } from '@mui/material'
import { ApiResponse, EventsSorted, Event } from 'models';
import EventCard from 'main/_sharedComponents/EventCard';
import api from "../../api"
import React from 'react';

function EventsPage() {
  const [pastEvents, setPastEvents] = useState<{[key: string]: Event[]}>({});
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [activeEvent, setActiveEvents] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error ,setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("")

  useEffect(()=>{
    if (loading) api.getRequest("/events/sorted")
      .then((response: ApiResponse<EventsSorted>) => {
        if (response.success) {
          setPastEvents(response.data.past || {});
          setUpcomingEvents(response.data.future || []);
          setActiveEvents(response.data.active || null);
        } else {
          setError(true)
          setErrorMessage(response.message)
        }
      })
      .catch(error => {
        console.log(error)
        setErrorMessage(error)
        setError(true)
      })
      .finally(()=>{
        setLoading(false)
      })
  },[error])


  const SectionRender = ({title, children}: {title: string, children?: React.ReactNode}) => {
    const [open, setOpen] = useState<boolean>(false);
    useEffect(()=>{setTimeout(()=>setOpen(!loading),10)},[loading])
    return (
      <div id={title} className="flex flex-col gap-4 w-full sm:w-4/5">
        <Box sx={{backgroundColor: "primary.main"}}>
          <Typography variant='h4' className="p-2">
            {title}:
          </Typography>
        </Box>
        <Collapse in={open} timeout={700}>
          <div className="ml-2 mr-2">
            {children}
          </div>
        </Collapse>
      </div>
    )
  }

  return (
      <div className='flex flex-row w-full h-fit min-h-full'>
        <div className='flex flex-col gap-10 items-center text-center w-full mt-4 mb-4'>
          {/* <SectionRender title={"Active Events"}>
            <>
            {activeEvent ? 
              <EventCard event={activeEvent} future={true} key={`eventCardFor:${activeEvent.organization}-on-${activeEvent.eventDate}`}/>
              :
              <Typography color={error ? 'error' : 'primary'}>{error ? "Error getting event details. Try again soon." : "Currently, there are no active events."}</Typography>
            }
            </>
          </SectionRender> */}
          <SectionRender title={"Upcoming Events"}>
            <div className="flex flex-col gap-6">
              {
                upcomingEvents.length ? upcomingEvents.map((event) => 
                  <EventCard event={event} future={true} key={`eventCardFor:${event.organization}-on-${event.eventDate}`}/>
                )
                  :
                <Typography color={error ? 'error' : 'primary'}>{error ? errorMessage : "Currently, there are no upcoming events scheduled."}</Typography>
              }
            </div>
          </SectionRender>
          <SectionRender title={"Past Events"}>
              <div className="flex flex-col gap-6">
                { Object.keys(pastEvents).length > 0 ?
                  Object.keys(pastEvents).sort((a, b) => Number(b) - Number(a)).map((value: string) => {
                    return (  
                      <div key={`eventListForPastEventYear:${value}`}>
                        <div className='flex flex-col'>
                          <Divider sx={{backgroundColor: "primary.main"}}  />
                          <Typography variant='h4'  color='primary' fontWeight={600}>{value}</Typography>
                          <Divider sx={{backgroundColor: "primary.main"}}  />
                        </div>
                        <div className="flex flex-col gap-6">
                          {pastEvents[value].map(event => {
                            return <EventCard event={event} key={`eventCardFor:${event.organization}-on-${event.eventDate}`}/>
                          })}
                        </div>
                      </div>
                    )
                  })
                  :
                  <Typography color={error ? 'error' : 'primary'}>{error ? "Error getting event details. Try again soon." : null}</Typography>
                }
              </div>
          </SectionRender>
        </div>
      </div>
  )
}

export default EventsPage
