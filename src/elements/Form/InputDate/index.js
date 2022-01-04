import React, { useState,useRef, useEffect } from 'react';
import propTypes from 'prop-types';

import { DateRange } from 'react-date-range';

import "./index.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import formatDate from 'utils/formatDate';
import iconCalendar from 'assets/images/icons/calendar.svg';

export default function Date(props) {
    const { value, placeholder, name } = props;
    const { isShowed, setIsShowed } = useState(false);

    const datePickerChange = value => {
        const target = {
            target: {
                value: value.selection,
                name: name
            }
        };
        props.onChange(target);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return() => {
            document.addEventListener("mousedown", handleClickOutside);
        };
    });

    const refDate = useRef(null);
    const handleClickOutside = event => {
        if (refDate && refDate.current.contains(event.target)){
            setIsShowed(false)
        }
    }

    return (
        <div>
            
        </div>
    )
}

Date.propTypes = {
    value: propTypes.object,
    onChange: propTypes.func,
    placeholder: propTypes.string,
    outerClassName: propTypes.string,
}
