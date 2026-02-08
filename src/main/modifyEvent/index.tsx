import { ApiResponse } from 'models';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../../api';
import { CircularProgress, Divider, Typography } from '@mui/material';
import { Run4RightsTextField } from 'main/_sharedComponents';
import { Event } from 'models';


function ModifyEvent() {
  const [event, setEvent] = useState<Event>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    // make api call to get event details using id from query param
    api.getRequest(`/events/${params.id}`).then((response: ApiResponse<Event>) => {
      // handle response
      if (response.success && response.data) {
        setEvent(response.data);
      } else {
        setError(response.message || "Error loading event details.");
      }
    }).catch(() => {
      // handle error
      setError("Error loading event details.");
    }).finally(() => {
      setLoading(false);
    }); 
  }, [params])

  const handleTextUpdates = (field: keyof Event, value: string) => {
    setEvent({...event, [field]: value} as Event)
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
    <div className="flex flex-col w-full h-fit min-h-full p-4 align-center items-center">
      <Typography variant='h4' color='primary'>Modify Events Page</Typography>
      <Divider sx={{backgroundColor: "primary.main"}}  className='w-full'/>
      { loading ? (
        <div className='w-full h-full flex grow justify-center items-center'>
          <CircularProgress size={"5rem"} />
        </div>
      ) : 
        error ? (
          <div className="flex flex-col gap-6 p-4 w-full">
            <Run4RightsTextField
              label="Organization Name"
              value={event?.organization || ""}
              valueChange={(val: string) => handleTextUpdates("organization", val)}
              className='w-full'
            /> 
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
  )
}

export default ModifyEvent
