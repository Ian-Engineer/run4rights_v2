import { ApiResponse, Runner } from 'models';
import { useEffect, useState } from 'react'
import api from '../../api';
import { Breadcrumbs, CircularProgress, Divider, Typography, Link, List, ListItem, ListItemButton, ListItemText, Checkbox, ListItemAvatar, Avatar } from '@mui/material';
import { Run4RightsTextField } from 'main/_sharedComponents';
import { Event } from 'models';
import { Link as RouterLink, useParams } from "react-router-dom";

interface EventRunner extends Runner {
  inEvent: boolean,
}

function ModifyEvent() {
  const [event, setEvent] = useState<Event>();
  const [runners, setRunners] = useState<EventRunner[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  const fetchEvent = () => {
    // make api call to get event details using id from query param
    api.getRequest(`/events/${params.id}`).then((response: ApiResponse<Event>) => {
      // handle response
      if (response.success && response.data) {
        setEvent(response.data);
        const eventRunners: Runner[] = response.data.runners || [];
        fetchRunners(eventRunners);
      } else {
        setError(response.message || "Error loading event details.");
      }
    }).catch(() => {
      // handle error
      setError("Error loading event details.");
    }).finally(() => {
      setLoading(false);
    }); 
  }

  const fetchRunners = (eventRunners: Runner[]) => {
    api.getRequest("/runner").then((response: ApiResponse<Runner[]>) => {
      if (response.success) {

        // build fast lookup set
        const eventRunnerIds = new Set(eventRunners.map(r => r.id));

        const inEventRunners: EventRunner[] =
          response.data.map((runner: Runner): EventRunner => ({
            ...runner,
            inEvent: eventRunnerIds.has(runner.id)
          }));

        setRunners(inEventRunners);
      } else {
        setError(response.message);
      }
    })
    .catch(() => {
      setError("Error getting runners.");
    });
  };

  useEffect(() => {
    fetchEvent();
  }, [params])

  const handleTextUpdates = (field: keyof Event, value: string) => {
    setEvent({...event, [field]: value} as Event)
  }

  const handleChangeRunner = (runner: EventRunner) => {
    setRunners(prev =>
      prev?.map(r =>
        r.id === runner.id
          ? { ...r, inEvent: !r.inEvent }
          : r
      )
    );
  };

// const handleDateUpdate = (
//   field: keyof Event,
//   value: string | null
// ) => {
//   if (!value) return;

//   setEvent(prev => ({
//     ...prev!,
//     [field]: value.toString()
//   }));
// };

  return (
    <div className="w-full h-full p-4">
      <Breadcrumbs>
        <Link
          component={RouterLink}
          to="/admin/dashboard"
          underline="hover"
          color="inherit"
        >
          Admin
        </Link>
        <Link
          component={RouterLink}
          to="/admin/dashboard"
          underline="hover"
          color="inherit"
        >
          Dashboard
        </Link>
        <Link
          component={RouterLink}
          to="/admin/modify-event"
          underline="hover"
          color="inherit"
        >
          Event Selection
        </Link>
      </Breadcrumbs>
      <div className="flex flex-col w-full align-center items-center">
        <Typography color="primary" variant='h4' fontWeight={600} className='p-4'>Modify Event</Typography>
        <Divider sx={{backgroundColor: "primary.main"}}  className='w-full'/>
        { loading ? (
          <div className='w-full h-full flex grow justify-center items-center'>
            <CircularProgress size={"5rem"} />
          </div>
        ) : 
          !error ? (
            <div className="flex flex-col gap-6 p-4 w-full">
              <Run4RightsTextField
                label="Organization Name"
                value={event?.organization || ""}
                valueChange={(val: string) => handleTextUpdates("organization", val)}
                className='w-full'
                multiline={true}
                rows={2}
              /> 
              <List dense sx={{ maxWidth: '24rem', maxHeight: "24rem" }} className="flex flex-col gap-1">
                {runners?.map((runner: EventRunner) => 
                  <ListItem   
                    key={`eventRunnersList-runner:${runner.id}`}          
                    secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={() => handleChangeRunner(runner)}
                      checked={runner.inEvent}
                    />}
                      sx={{
                        border: 1,
                        borderColor: 'divider',
                      }}
                  >
                      <ListItemAvatar>
                        <Avatar
                          alt={runner.name}
                          src={`/images/runners/${runner.name.toLowerCase()}.webp`}
                        />
                      </ListItemAvatar>
                      <Typography color="primary">
                        {runner.name}
                      </Typography>
                  </ListItem>
                )}
              </List>
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <AppDatePicker 
                  label="Event Date"
                  value={event?.eventDate}
                  onChange={(newValue) => handleDateUpdate("eventDate", newValue)}
                />
              </LocalizationProvider> */}
            </div>
          )
          : 
          null
        }
        </div>
    </div>
  )
}

export default ModifyEvent
