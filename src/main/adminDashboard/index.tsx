import { Run4RightsButton } from 'main/_sharedComponents'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {

  const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center align-center'>
      <Box className="p-4 flex flex-col gap-4 w-full overflow-hidden justify-center items-center">
        <Typography className="block" fontWeight={600} variant="h3" color="primary">
          Admin Dashboard
        </Typography>
        <Run4RightsButton
          text="Active Event"
          onClick={()=>navigate("/admin/update-active-event")}
        />
        <Run4RightsButton 
          text="Manage Events"
          onClick={()=>navigate("/admin/modify-event")}
        />
        <Run4RightsButton 
          text="Update Runners"
          onClick={()=>navigate("/admin/update-runners")}
        />
      </Box>
    </div>
  )
}

export default AdminDashboard
