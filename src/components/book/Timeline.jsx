import { useState, useEffect } from 'react';

import './Timeline.scss';
import { TimelineSlider } from "../slider/CustomSlider";

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

const Timeline = () => {
    const currentYear = new Date().getFullYear();

    const [year, setYear] = useState(0);

    useEffect(() => {
        if (year) {
            console.log(year);
        }
    }, [year]);

    const valueLabelFormat = (value) => `${value} AC`;

    return (
        <div style={{marginTop: 60, marginBottom: 20}}>
            <TimelineSlider
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
