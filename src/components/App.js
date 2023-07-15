import React, { useState } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";

import {
  Box,
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

const dataStore = collection(firestore, "messages");

export default function App() {
  const [msg, setMsg] = useState("");

  return (
    <Box>
      <Box
        sx={{
          fontSize: "18px",
          textAlign: "center",
          margin: "16px",
          fontSize: "32px",
          fontWeight: 800,
        }}
      >
        this is Lulu's website
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <TextField
            type="text"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          />
          <Button
            sx={{ display: "block", marginBottom: "16px" }}
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

          <Box>Checkbox</Box>
          <Box sx={{ display: "block", marginBottom: "16px" }}>
            <Checkbox defaultChecked />
            <Checkbox />
            <Checkbox disabled />
            <Checkbox disabled checked />
          </Box>

          <Box>Radio</Box>
          <Box sx={{ display: "block", marginBottom: "16px" }}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box>tooltip</Box>
          <Box sx={{ display: "block", marginBottom: "16px" }}>
            <Tooltip title="Delete">
              <IconButton>
                <AccessAlarmIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
