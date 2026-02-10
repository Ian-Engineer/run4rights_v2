import { useEffect, useState } from 'react'
import { Breadcrumbs, Divider, Link, Typography } from '@mui/material'
import { Link as RouterLink } from "react-router-dom";
import { Event, ApiResponse } from 'models';
import api from '../../api';

function ModifyActiveEvent() {
  const [ eventsList, setEventsList ] = useState<Event[]>([]);
  const [ error, setError ] = useState<string | null>(null)
  const [ loading, setLoading ] = useState<boolean>(true);

  useEffect(()=> {

  },[])

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
      </Breadcrumbs>
      <div className="flex flex-col w-full align-center items-center">
        <Typography color="primary" variant='h4' fontWeight={600} className='p-4'>Modify Active Event</Typography>
        <Divider sx={{backgroundColor: "primary.main"}}  className='w-full'/>
        <div className="flex flex-col gap-6">

        </div>
      </div>
    </div>
  )
}

export default ModifyActiveEvent;
