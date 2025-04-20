import { Box, Button, Typography } from "@mui/material"
import IanPaper from "../_sharedComponents/IanPaper"
import { useState } from "react"
import IanTextField from "../_sharedComponents/IanTextField";

type FieldKey = 'name' | 'email' | 'phone' | 'message';

const initialValues: Record<FieldKey, string> = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const initialErrors: Record<FieldKey, string | null> = {
  name: null,
  email: null,
  phone: null,
  message: null,
};

function ContactPage() {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);

  const handleChange = (field: FieldKey, value: string) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
    if (value) {
      setFormErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = () => {
    let hasError = false;
    const newErrors: Record<FieldKey, string | null> = { ...initialErrors };

    if (!formValues.name.trim()) {
      newErrors.name = 'Required';
      hasError = true;
    }
    if (!formValues.email.trim()) {
      newErrors.email = 'Required';
      hasError = true;
    }
    if (!formValues.message.trim()) {
      newErrors.message = 'Required';
      hasError = true;
    }

    setFormErrors(newErrors);

    if (!hasError) {
      // Submit logic here
      console.log('Submitted:', formValues);
    }
  };

  return (
    <div className="w-full m-8 mb-4 flex items-center">
        <IanPaper className={"flex justify-center items-center sm:w-1/3 w-full h-fit"}>
          <Box className="m-4 flex flex-col gap-4 w-full">
            <Typography variant="h4">
              Get in touch!
            </Typography>
            <IanTextField
              value={formValues.name}
              valueChange={(val: string) => handleChange('name', val)}
              className="w-full"
              label="Your Name"
              required
              error={formErrors.name}
            />
            <IanTextField
              value={formValues.email}
              valueChange={(val: string) => handleChange('email', val)}
              className="w-full"
              label="Email"
              required
              error={formErrors.email}
            />
            <IanTextField
              value={formValues.phone}
              valueChange={(val: string) => handleChange('phone', val)}
              className="w-full"
              label="Phone"
              error={formErrors.phone}
            />
            <IanTextField
              value={formValues.message}
              valueChange={(val: string) => handleChange('message', val)}
              className="w-full"
              label="Message"
              required
              multiline
              rows={4}
              color="secondary"
              error={formErrors.message}
            />
            <Button
              variant="contained"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </IanPaper>
    </div>
  )
}

export default ContactPage
