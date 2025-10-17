import { Button, Typography } from "@mui/material";
import { Run4RightsButton, Run4RightsPaper } from "main/_sharedComponents";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="w-full m-8 mb-4 flex flex-row items-center overscroll-hidden">
                <div className="w-full sm:w-1/2">
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <Run4RightsPaper className="m-4">
                                <div className="flex flex-col gap-4 m-2">
                                    <Typography variant="h4" className="text-center">
                                        We run so others don’t have to! 
                                    </Typography>

                                    <Typography variant="body2">
                                        During local protests, we run in a loop around the area in solidarity with the anti-ICE raid protest.
                                    </Typography>

                                    <Typography variant="body2">
                                        ALL donations go to the Colorado Immigrant Rights Coalition Legal Defense Fund. 
                                    </Typography>

                                    <Typography variant="body2">
                                        If you would like to donate through us, click the button below to see upcoming events. If you would like too donate directly, follow the link below to CIRC's website.
                                    </Typography>

                                    <Typography variant="body2" className="text-center">
                                        <a href="https://coloradoimmigrant.org/our-work/campaign-for-universal-representation/" target="_blank" className="text-blue-500 underline">
                                            Campaign for Universal Representation
                                        </a>
                                    </Typography>
                                </div>
                            </Run4RightsPaper>
                            <Run4RightsButton         
                                className="w-2/3"
                                onClick={()=>navigate('/events')}
                            >
                                <Typography variant="h4">See upcoming events</Typography>
                            </Run4RightsButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;