import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

type DateFieldProps = {
  label: string;
  value: string | null | undefined;     // ISO or YYYY-MM-DD
  onChange: (value: string | null) => void;
  disabled?: boolean;
};

export function AppDatePicker({
  label,
  value,
  onChange,
  disabled
}: DateFieldProps) {

  const pickerValue: Dayjs | null =
    value ? dayjs(value) : null;

  const handleChange = (d: Dayjs | null) => {
    onChange(d ? d.toISOString() : null);
  };

  return (
    <DatePicker
        label={label}
        value={pickerValue}
        onChange={handleChange}
        disabled={disabled}
        sx={{ width: "100%" }}
slotProps={{
  textField: {
    InputProps: {
      sx: {
        color: "red"
      }
    }
  }
}}
    />
  );
}
