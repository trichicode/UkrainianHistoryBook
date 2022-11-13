import { useState, useEffect } from 'react';
import './Timeline.scss';

const Timeline = () => {
  const currentYear = new Date().getFullYear();

  const [year, setYear] = useState<string>('0');

  useEffect(() => {
    if (year) {
      console.log(year);
    }
  }, [year]);

  return (
    <div className="container__timeline">
      <h1> {year} AD </h1>
      <input
        type="range"
        min="0"
        max={currentYear}
        step="20"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
    </div>
  );
};

export default Timeline;
