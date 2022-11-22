import { Slider } from '@mui/material';
import { useState, useEffect } from 'react';
import { withStyles } from '@mui/styles'

import './Timeline.scss';

const marks = [
  {
    value: 0,
  },
  {
    value: 1000,
  },
  {
    value: 1250,
  },
  {
    value: 1991,
  },
];

const CustomSlider = withStyles({
  root: {
    "&.MuiSlider-root": {
      color: '#9D9D9D',
      height: 10,
    }
  },
  thumb: {
    "&.MuiSlider-thumb": {
      height: 28,
      width: 28,
      color: "#9D9D9D",
      border: 'none',
      borderRadius: 8,
      boxShadow: 'none',
      outline: 'none'
    },
    "&.MuiSlider-thumb:hover, &.MuiSlider-thumb:focus, &.MuiSlider-thumb:active, &.MuiSlider-thumb.Mui-focusVisible": {
      boxShadow: 'none',
      outline: 'none'
    }
  },
  valueLabel: {
    "&.MuiSlider-valueLabel": {
      background: 'transparent',
      fontFamily: 'e-Ukraine',
      fontWeight: 400,
      fontSize: 20
    }
  },
  track: {
    borderRadius: 4,
    color: '#353535',
  },
  rail: {
    borderRadius: 4,
    color: "#353535"
  },
})(Slider);

const Timeline = () => {
  const currentYear = new Date().getFullYear();
  
  const [year, setYear] = useState(0);
  const [step, setStep] = useState(20);

  useEffect(() => {
    if (year) {
      console.log(year);
    }
  }, [year]);

  const valueLabelFormat = (value) => `${value} AC`;

  return (
    <div style={{marginTop: 60, marginBottom: 20}}>
      <CustomSlider
        value={year}
        max={currentYear}
        onChange={e => setYear(e.target.value)}
        valueLabelFormat={valueLabelFormat}
        step={null}
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
  );
};

export default Timeline;
