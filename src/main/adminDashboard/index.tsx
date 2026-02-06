import { useState } from 'react'
import { Run4RightsButton, Run4RightsTextField } from 'main/_sharedComponents'
import { Box, Typography } from '@mui/material'
import api from '../../api'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center align-center'>
      <Box className="p-4 flex flex-col gap-4 w-full overflow-hidden justify-center items-center">
        <Typography className="block sm:hidden" fontWeight={600} variant="h3" color="primary">
          Admin Dashboard
        </Typography>
        <Run4RightsButton
          text="Create Event"
        />
        <Run4RightsButton 
          text="Modify Event"
          onClick={()=>navigate("/admin/modify-event")}
        />
        <Run4RightsButton 
          text="Create Runner"
        />
      </Box>
    </div>
  )
}

export default AdminDashboard
