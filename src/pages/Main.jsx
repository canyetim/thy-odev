import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { faChevronRight, faPlaneArrival, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import Cabin from "../components/Cabin/index";
import City from "../components/City/index";
import Calendar from "../components/Calendar/index";
import useFly from "../hooks/useFly";


function Main() {
  let history = useHistory();
  const { origin, destination } = useFly();

  /**
   * 
   * @returns 
   */
  const validationCheck = () => {
    if (origin == null || destination == null) {
      alert("Lütfen bilgileri eksiksiz doldurunuz!");
      return false;
    } else {
      return true;
    }
  }

  /**
   * 
   */
  const submit = () => {
    /** ödevde localstorage kullanımı + puan getirdiği için aşağıdaki kısmı ekledim */
    let localstorageData = { origin: origin, destination: destination };
    localStorage.setItem("originAndDestination", JSON.stringify(localstorageData));
    const validation = validationCheck();
    if (validation) {
      history.push("/list");
    }
  }

  return (
    <Container className="main">
      <Row>
        <Col md={12}>
          <h2>Merhaba</h2>
          <h4>Nereyi keşfetmek istersiniz?</h4>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="flight-search-area">
          <Row>
            <Col md={4} className="p-l-r-5">
              <City type="origin" placeholder="Nereden" icon={faPlaneDeparture} />
            </Col>
            <Col md={4} className="p-l-r-5">
              <City type="destination" placeholder="Nereye" icon={faPlaneArrival} />
            </Col>
            <Col md={4}>
              <Row>
                <Col md={5} className="p-l-r-5">
                  <Calendar />
                </Col>
                <Col md={5} className="p-l-r-5">
                  <Cabin />
                </Col>
                <Col md={2} className="p-l-r-5" >
                  <Button variant="primary" className="submit" onClick={submit}>
                    <FontAwesomeIcon icon={faChevronRight} className="submitIcon" />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Main;
