import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import './style.scss';

/**
 *
 * @param {*} props
 * @returns
 */
const Calendar = (props) => {

    return (
        <Dropdown className="calendar">
            <Dropdown.Toggle variant="secondary">
                <Row>
                    <Col md={6}><div className="calendar-title">Tarih</div></Col>
                    <Col md={6} className="text-right"><FontAwesomeIcon icon={faCalendarDay} className="calendar-icon" /></Col>
                </Row>
            </Dropdown.Toggle>
        </Dropdown>
    )
};

Calendar.propTypes = {

};

export default Calendar;
