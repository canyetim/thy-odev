import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Row } from "react-bootstrap";
import useFly from "../../hooks/useFly";
import { useHistory } from "react-router-dom";
import './style.scss';

/**
 *
 * @param {*} props
 * @returns
 */
const FlightCardDetail = (props) => {
    let history = useHistory();
    const { detail, index } = props;
    const { promotion, updateResult } = useFly(null);

    /**
     * 
     */
    const selectFlight = () => {
        let result = {
            status: detail?.status,
            amount: promotion && detail?.brandCode === 'ecoFly' ? (detail?.price.amount / 2) : detail?.price.amount,
            currency: detail?.price.currency
        }
        updateResult(result);
        history.push("/result");
    }

    return (
        <Col className="card-detail" md={12 / 3} key={index}>
            <Row className="card-detail-header">
                <Col md={6} className="card-detail-header-left">
                    {detail?.brandCode}
                </Col>
                <Col md={6} className="card-detail-header-right">
                    <div className="currency">{detail?.price.currency}</div>
                    <div className="amount">{promotion && detail?.brandCode === 'ecoFly' ? (detail?.price.amount / 2) : detail?.price.amount}</div>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="card-detail-body">
                    {detail.rights.map((rights, index) => {
                        return (
                            <Row className="right" key={index}>
                                <Col md={12}>{rights}</Col>
                            </Row>
                        );
                    })}
                </Col>
            </Row>
            <Row>
                <Col md={12} className="card-detail-footer">
                    <Button onClick={selectFlight} className="select-flight" disabled={promotion && detail?.brandCode !== 'ecoFly'}>
                        {'Uçuşu Seç'}
                    </Button>
                </Col>
            </Row>
        </Col>
    )
};

FlightCardDetail.propTypes = {
    detail: PropTypes.object,
    index: PropTypes.number
};

export default FlightCardDetail;
