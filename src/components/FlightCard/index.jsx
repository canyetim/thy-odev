import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import FlightCardDetail from "../FlightCardDetail";
import FlightCardSelect from "../FlightCardSelect";
import useFly from "../../hooks/useFly";
import './style.scss';

/**
 *
 * @param {*} props
 * @returns
 */
const FlightCard = (props) => {

    const { detail, index } = props;
    const { flightcard } = useFly(null);

    return (
        <Container className="flight-card-container" key={index}>
            <Row className="flight-card">
                <Col md={6} >
                    <div className="card">
                        <Row>
                            <Col md={9}>
                                <Row>
                                    <Col md={4}>
                                        <div><b>{detail?.arrivalDateTimeDisplay}</b></div>
                                        <div>{detail?.originAirport.code}</div>
                                        <div className="city-name">{detail?.originAirport.city.name}</div>
                                    </Col>
                                    <Col md={4} className="line-container">
                                        <div className="line"></div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="text-right"><b>{detail?.departureDateTimeDisplay}</b></div>
                                        <div className="text-right">{detail?.destinationAirport.code}</div>
                                        <div className="city-name text-right">{detail?.destinationAirport.city.name}</div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3} className="center">
                                <div className="flight-time-title">Uçuş Süresi</div>
                                <div><b>{detail?.flightDuration}</b></div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={3}>
                    <FlightCardSelect detail={detail?.fareCategories.ECONOMY.subcategories[0]} flightId={index} type="ECONOMY" />
                </Col>
                <Col md={3}>
                    <FlightCardSelect detail={detail?.fareCategories.BUSINESS.subcategories[0]} flightId={index} type="BUSINESS" />
                </Col>
            </Row>
            {flightcard?.flightId === index ?
                <Row className="flight-card-subs">
                    <Col md={12}>
                        <div className="card card-list">
                            {detail?.fareCategories[flightcard?.type].subcategories.map((detail, index) =>
                                <FlightCardDetail detail={detail} index={index} key={index} />
                            )}
                        </div>
                    </Col>
                </Row>
                : null}
        </Container>
    )
};

FlightCard.propTypes = {
    detail: PropTypes.object,
    index: PropTypes.number,
};

export default FlightCard;
