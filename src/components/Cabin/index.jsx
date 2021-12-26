import React from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import { faMale, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFly from "../../hooks/useFly";
import './style.scss'

/**
 * 
 * @param {*} props 
 * @returns 
 */
const Cabin = (props) => {
  const { cabin, passenger, updateCabin, updatePassenger } = useFly(null);

  /**
   * 
   * @returns 
   */
  const handleIncrease = () => {
    const updatedPassenger = passenger - 1;
    if (updatedPassenger < 1) return;
    updatePassenger(updatedPassenger);
  };

  /**
   * 
   * @returns 
   */
  const handleDecrease = () => {
    const updatedPassenger = passenger + 1;
    if (updatedPassenger > 10) return;
    updatePassenger(updatedPassenger);
  };

  /**
   * 
   * @param {*} e 
   */
  const handleCabinChange = e => {
    e.persist();
    updateCabin(e.target.value);
  };

  return (
    <Dropdown className="cabin">
      <Dropdown.Toggle variant="dark">
        {Array.from({ length: (passenger <= 3) ? passenger : 3 }, (x, i) =>
          <FontAwesomeIcon key={i} icon={faMale} className="cabin-icon" />
        )}
        {passenger > 3 &&
          <FontAwesomeIcon icon={faPlus} className="cabin-plus-icon" />
        }
        <div className="cabin-counter">{passenger}</div>
      </Dropdown.Toggle>
      <Dropdown.Menu className="cabin-container">
        <Row>
          <Col md={12}>
            <h6>Kabin ve Yolcu Seçimi</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Check type="radio" label="Economy Class" name="cabin" id="economy" value="economy" onChange={handleCabinChange} checked={cabin === 'economy'} />
          </Col>
          <Col>
            <Form.Check type="radio" label="Business Class" name="cabin" id="business" value="business" onChange={handleCabinChange} checked={cabin === 'business'} />
          </Col>
        </Row>
        <Row className="passenger">
          <Col md={6}>
            <h6>Yolcu</h6>
          </Col>
          <Col md={6} className="text-right">
            <Button variant="link" onClick={handleIncrease} className="in-de-crease">
              <FontAwesomeIcon icon={faMinus} className="in-de-crease-icon" />
            </Button>
            {passenger}
            <Button variant="link" onClick={handleDecrease} className="in-de-crease">
              <FontAwesomeIcon icon={faPlus} className="in-de-crease-icon" />
            </Button>
          </Col>
        </Row>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Cabin;
