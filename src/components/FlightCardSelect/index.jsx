import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import './style.scss';
import useFly from "../../hooks/useFly";
/**
 *
 * @param {*} props
 * @returns
 */
const FlightCardSelect = (props) => {
    const { detail, flightId, type } = props;
    const { flightcard, promotion, updateFlightcard } = useFly(null);

    /**
     * 
     */
    useEffect(() => {
    }, [flightcard, updateFlightcard])

    /**
     * 
     * @param {*} event 
     */
    const handleClick = (event) => {
        if (flightcard?.flightId === flightId && flightcard?.type === type) {
            updateFlightcard({ flightId: null, type: null });
        } else {
            updateFlightcard({ flightId: flightId, type: type });
        }
    }

    return (
        <div className="flight-card-select card center" onClick={handleClick}>
            <Row >
                <Col md={4} className="center radio-select">
                    <Form.Check type="radio" className="radio-button" label={type} id={type} onChange={handleClick} name="cabinType" value={type} checked={flightcard?.flightId === flightId && flightcard?.type === type} />
                </Col>
                <Col md={6} className="center">
                    <div className="f-s-10">Yolcu Başına</div>
                    <b>{detail.price.currency} {promotion && type === 'ECONOMY' ? (detail?.price.amount / 2) : detail?.price.amount}</b>
                </Col>
                <Col md={2} className="center">
                    <Button variant="link" className="in-de-crease">
                        {flightcard?.flightId === flightId && flightcard?.type === type ? <FontAwesomeIcon icon={faChevronUp} className="chevron-icon" /> :
                            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
                        }
                    </Button>
                </Col>
                {flightcard?.flightId === flightId && flightcard?.type === type ?
                    <div className="selected"></div>
                    : null}
            </Row>
        </div>
    )
};

FlightCardSelect.propTypes = {
    detail: PropTypes.object,
    flightId: PropTypes.number,
    type: PropTypes.string
};

export default FlightCardSelect;
