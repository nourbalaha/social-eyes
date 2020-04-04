import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    openProfile: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
        <FormControlLabel
          control={<Switch checked={state.openProfile} onChange={handleChange} name="openProfile" />}
          label="Open Profile"
        />
  );
}
