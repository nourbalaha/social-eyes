import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchUI() {
  const [state, setState] = useState(false);

  const handleChange = (event) => {
    setState(event.target.checked);
  };

  return (
        <FormControlLabel
          control={<Switch checked={state.openProfile} onChange={handleChange} name="openProfile" />}
          label="Open Profile"
        />
  );
}
