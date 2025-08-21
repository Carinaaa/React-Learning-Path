import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const ESignature = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(dayjs());

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="body">
      <div className="grid-outputs">
        <label htmlFor="input-name">
          {name.toUpperCase() ? name.toUpperCase() : "_______"}{" "}
        </label>
        <label htmlFor="input-name">{date.format("YYYY-MM-DD")}</label>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          quia, nemo quam repudiandae molestiae dignissimos quod in tempore
          numquam voluptatibus? Similique sequi ea pariatur nisi natus?
          Inventore voluptate dolor error.
        </p>
      </div>
      <div className="grid-inputs">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker value={date} onChange={(e) => setDate(e)}></DatePicker>
        </LocalizationProvider>

        <input
          type="text"
          value={name}
          placeholder="Your signature"
          onChange={(e) => handleNameChange(e)}
        ></input>
      </div>
    </div>
  );
};

export default ESignature;
