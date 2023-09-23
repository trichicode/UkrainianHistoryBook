import {useState, useEffect, useContext} from 'react';

import './Timeline.scss';
import { TimelineSlider } from "../slider/CustomSlider";
import {BookContext} from "../../context/bookContext";
import {BOOK_DATA} from "../../constants/bookData";
import {useSwiper} from "swiper/react";

const Timeline = () => {
    const {
        currentPage,
        setCurrentPage
    } = useContext(BookContext);
    const swiper = useSwiper();

    useEffect(() => {
        console.log(swiper);
    }, [swiper])

    const currentYear = new Date().getFullYear();

    const [year, setYear] = useState<number>(BOOK_DATA[0].year);
    const marks = BOOK_DATA.map(el => { return {value: el.year}});

    useEffect(() => {
        setYear(BOOK_DATA[currentPage].year);
    }, [currentPage]);
    const valueLabelFormat = (value: number) => {
        const index = BOOK_DATA.findIndex(el => el.year === value );
        return BOOK_DATA[index].endYear ? `\t${value} - ${BOOK_DATA[index].endYear} AC` : `${value} AC`;
    };

    const ChangeHandler = (e: any) => {
        setYear((e.target as any).value);
        const page = BOOK_DATA.findIndex(el => el.year === (e.target as any).value);
        setCurrentPage(page);
    }

    return (
        <div className="wrapper__timeline" id="timeline-element">
            <TimelineSlider
                value={year}
                min={0}
                max={currentYear}
                onChange={ChangeHandler}
                valueLabelFormat={valueLabelFormat}
                step={null}
                marks={marks}
                valueLabelDisplay="on"
            />
        </div>
    );
};

export default Timeline;
