import React, { useState } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";

import {
  Button,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  IconButton,
  Tooltip,
  TextField,
} from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { async } from "@firebase/util";

const dataStore = collection(firestore, "messages");

export default function App() {
  const [msg, setMsg] = useState("");

  return (
    <div>
      <h1>hello world</h1>
      <h2>this is Lulu's website</h2>

      <TextField
        type="text"
        value={msg}
        onChange={(e) => {
          setMsg(e.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={async () => {
          await addDoc(dataStore, { message: msg });
          setTimeout(() => {
            setMsg("");
          }, 100);
        }}
      >
        submit
      </Button>

      <div>Button</div>
      <Button variant="contained">Hello World</Button>

      <div>Checkbox</div>
      <div>
        <Checkbox defaultChecked />
        <Checkbox />
        <Checkbox disabled />
        <Checkbox disabled checked />
      </div>

      <div>Radio</div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      <div>tooltip</div>
      <Tooltip title="Delete">
        <IconButton>
          <AccessAlarmIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}
