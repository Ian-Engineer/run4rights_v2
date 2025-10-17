import { Box, Button, Collapse, Typography } from "@mui/material"
import { Run4RightsPaper, Run4RightsTextField } from "sharedComponents"
import { useState } from "react"
import emailjs from 'emailjs-com';

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

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPhoneNumber(input: string): boolean {
  const digitsOnly = input.replace(/\D/g, "");
  return digitsOnly.length === 10;
}

type EmailJSError = {
  status: number;
  text: string;
};

function ContactPage() {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [header, setHeader] = useState<string>('Get in touch!')

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
    } else if (!isValidEmail(formValues.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formValues.message.trim()) {
      newErrors.message = 'Required';
      hasError = true;
    }

    setFormErrors(newErrors);

    if (!hasError) {
      const templateParams = {
        name: formValues.name,
        email: formValues.email,
        time: new Date(),
        message: formValues.message,
        to_email: "i.c.swensson@hotmail.com"
      };
      emailjs.send(
        'service_2ac8ous', 
        'template_s610c99', 
        templateParams, 
        'DcfZGSVMzQkbU_Fin'
      )
        .then(() => {
          setSubmitted(true);
          setHeader('Thanks for reaching out!')
        }, (err: EmailJSError) => {
          setSubmitError(err.text);
        });
    }
  };

  return (
    <div className="w-full m-8 mb-4 flex flex-row items-center">
      <div className="w-full sm:w-1/3 flex justify-center items-center">
        <Run4RightsPaper className={"flex justify-center items-center max-w-sm w-full h-fit overflow-hidden"}>
          <Box className="m-4 flex flex-col gap-4 w-full overflow-hidden">
            <Typography variant="h4">
              {header}
            </Typography>
            <Collapse in={!submitted}>
              <div className="flex flex-col gap-4 w-full">
                <Run4RightsTextField
                  value={formValues.name}
                  valueChange={(val: string) => handleChange('name', val)}
                  className="w-full"
                  label="Your Name"
                  required
                  error={formErrors.name}
                />
                <Run4RightsTextField
                  value={formValues.email}
                  valueChange={(val: string) => handleChange('email', val)}
                  className="w-full"
                  label="Email"
                  required
                  error={formErrors.email}
                />
                <Run4RightsTextField
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
                <Collapse in={Boolean(submitError)}>
                <div className="flex flex-col text-center items-center">
                  <Typography>
                    Error sending message:
                  </Typography>
                  <Typography color="error">
                    {submitError}
                  </Typography>
                </div>
                </Collapse>
              </div>
            </Collapse>
            <Collapse in={submitted}>
              <Typography variant="h6">
                Thanks you. Your message has been sent to run4rights admin.
              </Typography>
            </Collapse>
          </Box>
        </Run4RightsPaper>
      </div>
    </div>
  )
}

export default ContactPage
