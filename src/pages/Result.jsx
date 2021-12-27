import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import useFly from "../hooks/useFly";

function Result() {
  let history = useHistory();
  const { result, updateCabin, updateDestination,
    updateFlightcard, updateFlights, updateOrigin,
    updatePassenger, updatePrice, updatePromotion,
    updateResult, updateTime } = useFly(null);

  /**
   * 
   */
  const clearStore = () => {
    updateOrigin(null);
    updateDestination(null);
    updateCabin("economy");
    updatePassenger(1);
    updatePrice(0);
    updateTime(0);
    updateFlightcard(null);
    updateFlights(null);
    updatePromotion(false);
    updateResult(null)
  }

  /**
   * 
   */
  const goMainPage = () => {
    clearStore();
    history.push("/");
  }

  return (
    <Row className="justify-content-md-center result">
      <Col md={6}>
        <Row className="justify-content-md-start">
          <Col md={12} className="text-left">
            {result?.status === 'AVAILABLE' ?
              <>
                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                <span className="status-message">Kabin seçiminiz tamamlandı.</span>
              </>
              :
              <>
                <FontAwesomeIcon icon={faTimesCircle} className="times-icon" />
                <span className="status-message">Kabin seçiminiz tamamlanamadı.</span>
              </>
            }
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <hr />
          </Col>
        </Row>
        {result?.status === 'AVAILABLE' ?
          <Row className="justify-content-md-between">
            <Col md={'auto'}>
              <div className="total">Toplam tutar</div>
            </Col>
            <Col md={'auto'} className="text-right">
              <div className="currency-and-price">{result?.currency + ' ' + result?.amount}</div>
            </Col>
          </Row>
          :
          <Row className="justify-content-md-end">
            <Col md={'auto'}>
              <Button onClick={goMainPage} className="go-home">
                {'Başa Dön'}
              </Button>
            </Col>
          </Row>
        }
      </Col>
    </Row>
  );
}

export default Result;


