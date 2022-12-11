import {withStyles} from "@mui/styles";
import {Slider} from "@mui/material";
import './CustomSlider.scss';

const TimelineSlider = withStyles({
    root: {
        '&.MuiSlider-root': {
            color: '#9D9D9D',
            height: 10,
            boxShadow: 'none',
            outline: 'none',
        },
    },
    thumb: {
        '&.MuiSlider-thumb': {
            height: 28,
            width: 28,
            color: '#9D9D9D',
            border: 'none',
            borderRadius: 8,
            boxShadow: 'none',
            outline: 'none',
        },
        '&.MuiSlider-thumb:hover, &.MuiSlider-thumb:focus, &.MuiSlider-thumb:active, &.MuiSlider-thumb.Mui-focusVisible':
        {
            boxShadow: 'none',
            outline: 'none',
        },
    },
    markActive: {
        '&.MuiSlider-markActive':
        {
            boxShadow: 'none',
            outline: 'none',
        },
    },
    valueLabel: {
        '&.MuiSlider-valueLabel': {
            background: 'transparent',
            fontFamily: 'e-Ukraine',
            fontWeight: 400,
            fontSize: 20,
        },
    },
    track: {
        borderRadius: 4,
        color: '#353535',
    },
    rail: {
        borderRadius: 4,
        color: '#353535',
    },
})(Slider);

const VolumeSlider = withStyles({
    root: {
        '&.MuiSlider-root': {
            color: '#9D9D9D',
            height: 10,
            boxShadow: 'none',
            outline: 'none',
        },
    },
    thumb: {
        '&.MuiSlider-thumb': {
            height: 32,
            width: 32,
            color: '#9D9D9D',
            border: 'none',
            borderRadius: 8,
            boxShadow: 'none',
            outline: 'none',
        },
        '&.MuiSlider-thumb:hover, &.MuiSlider-thumb:focus, &.MuiSlider-thumb:active, &.MuiSlider-thumb.Mui-focusVisible':
            {
                boxShadow: 'none',
                outline: 'none',
            },
    },
    markActive: {
        '&.MuiSlider-markActive':
            {
                boxShadow: 'none',
                outline: 'none',
            },
    },
    valueLabel: {
        '&.MuiSlider-valueLabel': {
            background: 'transparent',
            fontFamily: 'e-Ukraine',
            fontWeight: 400,
            fontSize: 16,
            top: 32,
        },
    },
    track: {
        borderRadius: 4,
        color: '#353535',
    },
    rail: {
        borderRadius: 4,
        color: '#353535',
    },
})(Slider);

export { TimelineSlider, VolumeSlider };