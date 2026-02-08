import { Box, Collapse, Typography } from "@mui/material"
import { Run4RightsButton, Run4RightsTextField } from "sharedComponents"
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
  const [header, setHeader] = useState<string>('Contact Us')

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
      hasError = true;
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
    <div className="w-full flex flex-row">
      <div className="w-3/5 sm:block hidden" id='left-side'>
        <Box className="w-full h-1/2 flex flex-col-reverse text-right p-8" sx={{backgroundColor: "primary.main"}}>
          <Typography variant="h1" fontWeight={700}>{header}</Typography>
        </Box>
        <div className="flex flex-col justify-center m-8 gap-2">
          <Typography variant="h6"  className="" color="primary">
            Your voice keeps us running.
          </Typography>
          <Typography variant="h6" className="" color="primary">
            Whether you're a donor, runner, nonprofit partner, or someone curious about what we do - we'd love to hear from you.
          </Typography>
          <Typography variant="h6" className="" color="primary">
            Reach out anytime with questions, feedback, or partnership ideas.
          </Typography>
        </div>
      </div>
      <div className="flex flex-row justify-center grow items-center ml-8 mr-8" id='right-side'>
        <div className="max-w-96 flex grow justify-center items-center">
            <Box className="p-4 flex flex-col gap-4 w-full overflow-hidden">
              <Typography className="block sm:hidden" fontWeight={600} variant="h4" color="primary">
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
                    rows={7}
                    color="secondary"
                    error={formErrors.message}
                  />
                  <Run4RightsButton
                    text="Submit"
                    onClick={handleSubmit}
                  />
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
        </div>
      </div>
    </div>
  )
}

export default ContactPage
