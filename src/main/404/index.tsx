import { useEffect, useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();

  // useEffect(()=>{navigate("/")},[])

  return (
    <>
    Error
    </>
  )
}

export default ErrorPage
