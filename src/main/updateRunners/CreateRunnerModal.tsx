import { Collapse, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { Run4RightsButton, Run4RightsTextField } from "main/_sharedComponents";
import { useEffect, useState } from "react"
import api from "../../api";
import { ApiResponse, Runner } from "models";

type FieldKey = 'name' | 'description' | 'id';

const initialValues: Record<FieldKey, string> = {
  name: '',
  description: '',
  id: "",
};

const initialErrors: Record<FieldKey, string | null> = {
  name: null,
  description: null,
  id: null
};

export default function CreateRunnerModal({open, handleClose, update = null}: {open: boolean, handleClose: Function, update?: Record<FieldKey, string> | null }) {
    const [ submitError, setSubmitError ] = useState<string | null>(null);
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialErrors);

    const handleSubmit = () => {
        let hasError = false;
        const newErrors: Record<FieldKey, string | null> = { ...initialErrors };
    
        if (!formValues.name.trim()) {
            newErrors.name = 'Required';
            hasError = true;
        }
        if (!formValues.description.trim()) {
            newErrors.description = 'Required';
            hasError = true;
        }
        
        setFormErrors(newErrors);
        
        if (!hasError) {
            if (update) {
                api.putRequest(`/runner/${update.id}`,formValues).then((response: ApiResponse<Runner>) => {
                    if (response.success) {
                        handleClose(true);
                    } else {
                        setSubmitError(response.message);
                    }
                })
                .catch(()=>{
                    setSubmitError("Error updating runner. Please try again.");
                })
            } else {
                api.postRequest("/runner",formValues).then((response: ApiResponse<Runner>) => {
                    if (response.success) {
                        handleClose(true);
                    } else {
                        setSubmitError(response.message);
                    }
                })
                .catch(()=>{
                    setSubmitError("Error adding runner. Please try again.");
                })
            }
        }
    }

    const closeDialog = () => {
        handleClose();
    }

    const handleChange = (field: FieldKey, value: string) => {
        setFormValues(prev => ({ ...prev, [field]: value }));
        if (value) {
            setFormErrors(prev => ({ ...prev, [field]: null }));
        }
    };

    useEffect(()=>{
        // return modal to defaults on load
        if (update) {
            setFormValues(update);
        } else {
            setFormValues(initialValues);
        }
        setFormErrors(initialErrors);
        setSubmitError(null);
    },[open])

    return (
        <Dialog open={open} onClose={closeDialog} color="secondary" maxWidth="xs" fullWidth>
            <DialogTitle color="primary">Add Runner</DialogTitle>
            <DialogContent>
                <div className="p-4 flex flex-col gap-4 w-full justify-center items-center align-center">
                    <Run4RightsTextField 
                        label="Name" 
                        className="" 
                        value={formValues.name} 
                        valueChange={(val: string) => {handleChange("name", val)}} 
                        error={formErrors.name}
                    />
                    <Run4RightsTextField 
                        multiline={true} 
                        rows={4} 
                        label="Description" 
                        className="" 
                        value={formValues.description} 
                        valueChange={(val: string) => {handleChange("description", val)}} 
                        error={formErrors.description}
                    />
                </div>
            </DialogContent>
            <DialogActions className="flex flex-col gap-4">
                <div className="flex flex-row w-full gap-4 justify-center">
                    <Run4RightsButton text="Submit" onClick={handleSubmit}/>
                    <Run4RightsButton text="Cancel" onClick={handleClose}/>
                </div>
                <Collapse in={Boolean(submitError)}>
                    <div className="flex flex-col justify-center max-w-full text-center items-center">
                    <Typography variant="body2" color="error">
                        Error updating runner:
                    </Typography>
                    <Typography color="error" variant="body2">
                        {submitError}
                    </Typography>
                    </div>
                </Collapse>
            </DialogActions>
        </Dialog>
    )
}