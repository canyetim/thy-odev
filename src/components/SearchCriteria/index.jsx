import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import useFly from "../../hooks/useFly";
import './style.scss';

/**
 *
 * @param {*} props
 * @returns
 */
const SearchCriteria = (props) => {
    const { list, type, placeholder } = props;
    const { time, price, updateTime, updatePrice, flights, updateFlights } = useFly(null);

    /**
     * 
     */
    useEffect(() => {
    }, [])

    /**
     * 
     * @param {*} value 
     * @param {*} evt 
     */
    const handleSort = (value, evt) => {
        let data = Number(value);
        if (type === 'time') {
            updateTime(data);
            handleSortByTime();
        } else if (type === 'price') {
            updatePrice(data);
            handleSortByPrice();
        }
    }

    /**
     * 
     */
    const handleSortByTime = () => {
        let copiedFlights = flights;
        let sorted = copiedFlights.sort((a, b) => {
            if (time === 0) {
                return b.arrivalDateTimeDisplay.localeCompare(a.arrivalDateTimeDisplay)
            } else {
                return a.arrivalDateTimeDisplay.localeCompare(b.arrivalDateTimeDisplay)
            }
        });
        updateFlights(sorted);
    }

    /**
     * 
     */
    const handleSortByPrice = () => {
        let copiedFlights = flights;
        let sorted = copiedFlights.sort((a, b) => {
            if (price === 1) {
                return a.fareCategories.ECONOMY.subcategories[0].price.amount - b.fareCategories.ECONOMY.subcategories[0].price.amount
            } else {
                return a.fareCategories.BUSINESS.subcategories[0].price.amount - b.fareCategories.BUSINESS.subcategories[0].price.amount
            }
        });
        updateFlights(sorted);
    }

    return (
        <Dropdown onSelect={handleSort}>
            <Dropdown.Toggle variant="dark">
                {placeholder + ': '}
                <b>{type === 'price' && price === 1 ? 'Business Ücreti' : ''}</b>
                <b>{type === 'price' && price === 0 ? 'Ekonomi Ücreti' : ''}</b>
                <b>{type === 'time' && time === 1 ? 'En Geç' : ''}</b>
                <b>{type === 'time' && time === 0 ? 'En Erken' : ''}</b>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {list?.map(({ label, value }, listItemIndex) =>
                    <Dropdown.Item
                        key={listItemIndex}
                        eventKey={value}
                        value={value}
                    >
                        {label}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
    )
};

SearchCriteria.propTypes = {
    type: PropTypes.oneOf(['price', 'time']),
    list: PropTypes.any,
    placeholder: PropTypes.string
};

export default SearchCriteria;
