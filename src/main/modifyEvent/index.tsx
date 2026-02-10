import { ApiResponse, Runner } from 'models';
import { useEffect, useState } from 'react'
import api from '../../api';
import { Breadcrumbs, CircularProgress, Divider, Typography, Link, List, ListItem, Checkbox, ListItemAvatar, Avatar, TextField, IconButton } from '@mui/material';
import { Run4RightsButton, Run4RightsTextField } from 'main/_sharedComponents';
import { Event } from 'models';
import { Link as RouterLink, useParams } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { thirtyPercent } from 'config/theme/lightTheme';

interface EventRunner extends Runner {
  inEvent: boolean,
}

function ModifyEvent() {
  const [event, setEvent] = useState<Event>();
  const [runners, setRunners] = useState<EventRunner[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [originalEvent, setOriginalEvent] = useState<Event>();
  const [originalRunners, setOriginalRunners] = useState<EventRunner[]>();
  const params = useParams();

  const fetchEvent = () => {
    // make api call to get event details using id from query param
    api.getRequest(`/events/${params.id}`).then((response: ApiResponse<Event>) => {
      // handle response
      if (response.success && response.data) {
        setEvent(response.data);
        setOriginalEvent(response.data);
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
        const eventRunnerMap = new Map(
          eventRunners.map(r => [r.id, r])
        );

        const inEventRunners: EventRunner[] =
          response.data.map((runner: Runner): EventRunner => {
            const match = eventRunnerMap.get(runner.id);

            return {
              ...runner,
              inEvent: !!match,
              miles: match?.miles ?? undefined
            };
          });

        setRunners(inEventRunners);
        setOriginalRunners(inEventRunners);
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

  const handleReset = () => {
    setEvent(originalEvent);
    setRunners(originalRunners);
  }

  const handleSave = () => {
    api.putRequest(`/events/${event?.id}`,{...event, runners: runners?.filter(runner => runner.inEvent)})
  }

  const updateMiles = (updatedRunner: EventRunner, miles: string) => {
    const milesAsNumber = +miles
    const overwriteIndex = runners?.findIndex(runner => runner.id === updatedRunner.id)
    if (runners && overwriteIndex !== undefined) {
      let shallowCopyOfRunners: EventRunner[] = [...runners]
      setRunners([...shallowCopyOfRunners.slice(0, overwriteIndex), {...updatedRunner, miles: Math.max(0, milesAsNumber)}, ...shallowCopyOfRunners.slice(overwriteIndex + 1)])
    }
  }

  const incrementRunnerMilesUp = (updatedRunner: EventRunner) => {
    const overwriteIndex: number | undefined = runners?.findIndex(runner => runner.id === updatedRunner.id)
    if (runners && overwriteIndex !== undefined) {
      let miles = runners[overwriteIndex].miles || 0;
      let shallowCopyOfRunners: EventRunner[] = [...runners]
      setRunners([...shallowCopyOfRunners.slice(0, overwriteIndex), {...updatedRunner, miles: miles+1}, ...shallowCopyOfRunners.slice(overwriteIndex + 1)])
    }
  }

  const incrementRunnerMilesDown = (updatedRunner: EventRunner) => {
    const overwriteIndex: number | undefined = runners?.findIndex(runner => runner.id === updatedRunner.id)
    if (runners && overwriteIndex !== undefined) {
      let miles = runners[overwriteIndex].miles || 0;
      let shallowCopyOfRunners: EventRunner[] = [...runners]
      setRunners([...shallowCopyOfRunners.slice(0, overwriteIndex), {...updatedRunner, miles: Math.max(0, miles-1)}, ...shallowCopyOfRunners.slice(overwriteIndex + 1)])
    }
  }

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
        <div className="flex flex-col w-full text-center pb-4">
          <Typography color="primary" variant='h4' fontWeight={600} className='p-4'>Modify Event</Typography>
          <Divider sx={{backgroundColor: "primary.main"}}  className='w-full'/>
        </div>
        { loading ? (
          <div className='w-full h-full flex grow justify-center items-center'>
            <CircularProgress size={"5rem"} />
          </div>
        ) : 
          !error ? (
            <div className="flex flex-col gap-4 w-full">
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
                        paddingLeft: "4px",
                      }}
                  >
                      <ListItemAvatar>
                        <Avatar
                          alt={runner.name}
                          src={`/images/runners/${runner.name.toLowerCase()}.webp`}
                        />
                      </ListItemAvatar>
                      <div className="flex flex-row w-full justify-between items-center align-center">
                        <Typography color="primary">
                          {runner.name}
                        </Typography>
                        <div className='flex flex-row align-center'>
                          <IconButton
                            size="small"
                            onClick={() => incrementRunnerMilesDown(runner)}
                          >
                            <RemoveIcon sx={{color:thirtyPercent}} />
                          </IconButton>
                          <TextField 
                            sx={{width: "60px"}} 
                            onChange={(e) => updateMiles(runner, e.target.value)} 
                            type="number" 
                            label="Miles" 
                            size='small' 
                            value={runner.miles || ""} 
                            inputProps={{ min: 0 }}
                            InputLabelProps={{ shrink: true }}  
                          />
                          <IconButton
                            size="small"
                            onClick={() => incrementRunnerMilesUp(runner)}
                          >
                            <AddIcon sx={{color:thirtyPercent}} />
                          </IconButton>
                        </div>
                      </div>
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
              <div className="flex flex-row justify-evenly p-4">
                <Run4RightsButton 
                  text="Save"
                  onClick={handleSave}
                />
                <Run4RightsButton 
                  text="Reset"
                  onClick={handleReset}
                />
              </div>
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
