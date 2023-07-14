import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Box,
  Fab,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  IconButton,
  Tooltip,
} from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

class App extends Component {
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <h2>this is Lulu's website</h2>

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
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
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
}

export default App;
