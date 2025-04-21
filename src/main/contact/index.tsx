import { Box, Button, Collapse, Typography } from "@mui/material"
import IanPaper from "../_sharedComponents/IanPaper"
import { useState } from "react"
import IanTextField from "../_sharedComponents/IanTextField";
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

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, "").slice(0, 10); // Cap to 10 digits

    // Format based on length
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return cleaned;

    let formatted = "";
    if (match[1]) {
      formatted += `(${match[1]}`;
    }
    if (match[2]) {
      formatted += match[2].length === 3 ? `) ${match[2]}` : match[2];
    }
    if (match[3]) {
      formatted += `-${match[3]}`;
    }

    return formatted;
  };

  const handlePhoneNumberChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    handleChange('phone', formatted)
  }

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
    if (formValues.phone.length > 0 && !isValidPhoneNumber(formValues.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
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
        message: `${formValues.message}${formValues.phone? `\n\n${formValues.name} provided their phone number: ${formValues.phone}` : ''}`,
      };
      emailjs.send(
        'service_05brftm', 
        'template_gido9bh', 
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
        <IanPaper className={"flex justify-center items-center max-w-sm w-full h-fit overflow-hidden"}>
          <Box className="m-4 flex flex-col gap-4 w-full overflow-hidden">
            <Typography variant="h4">
              {header}
            </Typography>
            <Collapse in={!submitted}>
              <div className="flex flex-col gap-4 w-full">
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
                  valueChange={(val: string) => handlePhoneNumberChange(val)}
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
                Your message has been sent to Ian Swensson.
              </Typography>
            </Collapse>
          </Box>
        </IanPaper>
      </div>
    </div>
  )
}

export default ContactPage
