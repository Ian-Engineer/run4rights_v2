import { useState } from 'react'
import { Run4RightsButton, Run4RightsTextField } from 'main/_sharedComponents'
import { Box, Typography } from '@mui/material'
import api from '../../api'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string | null>(null)

  return (
    <div className='flex justify-center items-center align-center'>
      <Box className="p-4 flex flex-col gap-4 w-full overflow-hidden">
        <Typography className="block sm:hidden" fontWeight={600} variant="h4" color="primary">
          Admin Dashboard
        </Typography>
      </Box>
    </div>
  )
}

export default AdminDashboard
