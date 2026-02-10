import { useEffect, useState } from 'react'
import { ApiResponse, Runner } from 'models'
import { Box, Breadcrumbs, CircularProgress, Divider, Link, Typography } from '@mui/material'
import { Link as RouterLink } from "react-router-dom";
import api from '../../api'
import { Run4RightsButton } from 'main/_sharedComponents'
import CreateRunnerModal from './CreateRunnerModal'
import { RunnerCard } from 'main/_sharedComponents/RunnerCard'

function UpdateRunners() {
  const [runnerList, setRunnerList] = useState<Runner[]>([])
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ error, setError ] = useState<string | null>(null);
  const [openCreateRunner, setOpenCreateRunner] = useState<boolean>(false);
  const [ openUpdateRunner, setOpenUpdateRunner ] = useState<boolean>(false);
  const [ runnerUpdate, setRunnerUpdate ] = useState<Runner | null>(null);

  const handleCloseCreateRunner = (reload: boolean) => {
    if (reload) {
      fetchRunners()
      setOpenCreateRunner(false);
      setOpenUpdateRunner(false)
    }
    else {
      setOpenUpdateRunner(false)
      setOpenCreateRunner(false);
    }
  };

  const fetchRunners = () => {
    // make call getting list of runners
    setLoading(true)
    api.getRequest("/runner").then((response: ApiResponse<Runner[]>) => {
      if (response.success) {
        setRunnerList(response.data);
      } else {
        setError(response.message)
      }
    })
    .catch (() => {
      setError("Error getting all runners.");
    })
    .finally(()=>{setLoading(false)})
  }

  useEffect(()=> {
    fetchRunners()
  },[])

  const handleCreateRunner = () => {
    setOpenCreateRunner(true);
  }

  const handleUpdateRunner = (runner: Runner) => {
    setRunnerUpdate(runner);
    setOpenUpdateRunner(true);
  }

  return (
    <div className='h-full w-full p-4'>
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
      <div className='flex flex-col h-full w-full items-center'>
        <Typography color="primary" variant='h4' fontWeight={600} className='p-4'>Update Runners</Typography>
        <Divider sx={{backgroundColor: "primary.main"}}  className='w-full'/>
        { loading ? (
          <div className='w-full h-full flex grow justify-center items-center'>
            <CircularProgress size={"5rem"} />
          </div> 
        ) : 
          error ? (
            <Typography color="red" variant='body1'>{error}</Typography>
          ) : (
            <div className='flex flex-col items-center text-center gap-4 p-4'>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 4,
                  justifyContent: "center",
                }}
              >
                <CreateRunnerModal handleClose={handleCloseCreateRunner} open={openUpdateRunner} update={{name: runnerUpdate?.name || "", description: runnerUpdate?.description || "", id: runnerUpdate?.id || 0}}/>
                  {runnerList.length > 0 ? runnerList.map((runner: Runner) => 
                      <RunnerCard key={`modifyRunnersList-runner:${runner.id}`} runner={runner}  onClick={() => handleUpdateRunner(runner)}/>
                    )
                  : (
                    <Typography variant="h6" color="primary">No runners listed. You can add runners below.</Typography>
                  )}
                </Box>
              <div>
                <Run4RightsButton text='Add New Runner' onClick={handleCreateRunner} />
              </div>
            </div>
        )}
        <CreateRunnerModal handleClose={handleCloseCreateRunner} open={openCreateRunner} update={null}/>
      </div>
    </div>
  )
}

export default UpdateRunners
