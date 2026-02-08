import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

function ErrorPage() {
  const navigate = useNavigate();

  useEffect(()=>{navigate("/")},[])

  return (
    <Typography color="primary">
      Error
    </Typography>
  )
}

export default ErrorPage
