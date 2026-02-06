import { useState } from 'react'
import { Run4RightsButton, Run4RightsTextField } from 'main/_sharedComponents'
import { Box, Typography } from '@mui/material'
import api from '../../api'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from 'config/auth/AuthContext'

function AdminLogin() {
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const { refreshAuth } = useAuth();
  const { isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    // make api call to login
    api.postRequest('/admin/login', {password: password}).then(async (res) => {
      if (res.success) {
        // redirect to admin dashboard
        await refreshAuth()
        navigate('/admin/dashboard');
      } else {
        setError(res.message)
      }
    }).catch((err) => {
      setError("Error connecting to the server, please try again.")
    })
  };
  if (isAdmin) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  return (
    <div className='flex justify-center items-center align-center'>
      <Box className="p-4 flex flex-col gap-4 w-full overflow-hidden justify-center items-center">
        <Typography fontWeight={600} variant="h4" color="primary">
          Admin Login
        </Typography>
        { loading ? (
          <>
            <Typography variant='h6' color="primary">Loading...</Typography>
          </>
        ) : (
          <>
            <Run4RightsTextField
              value={password}
              valueChange={(val: string) => setPassword(val)}
              className="w-full"
              label="Password"
              required
              error={error}
              type='password'
              autoComplete='password'
            />
            <Run4RightsButton 
              text="Login"
              onClick={handleLogin}
            />
          </>
        )}
      </Box>
    </div>
  )
}

export default AdminLogin
