import React, { useEffect, useState } from "react";
import Services from "../services";
import { Col, Container, Form, Row } from "react-bootstrap";
import FlightCard from "../components/FlightCard/index";
import SearchCriteria from "../components/SearchCriteria/index";
import useFly from "../hooks/useFly";

function List() {

  const { origin, destination, cabin, passenger, flights, promotion, updateFlights, updatePromotion } = useFly();
  const [localstoragedata, setLocalstoragedata] = useState(null);

  const sortPriceList = [{ label: 'Ekonomi Ücreti', value: 0 }, { label: 'Business Ücreti', value: 1 }];
  const sortTimeList = [{ label: 'En Erken', value: 0 }, { label: 'En Geç', value: 1 }];

  /**
   * 
   */
  useEffect(() => {
    const userSelects = { origin: origin, destination: destination, cabin: cabin, passenger: passenger };

    /**
     * 
     */
    const getSelecteds = async () => {
      const data = await Services.fetchFlightList(userSelects);
      if (data?.length > 0) {
        updateFlights(data);
      }
    };

    /**
     * özellikle localStorage kullanıldı
     */
    const getLocalStorage = () => {
      let data = JSON.parse(localStorage.getItem("originAndDestination"));
      setLocalstoragedata(data);
    }
    getSelecteds();
    getLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cabin, destination, origin, passenger]);

  /**
   * 
   * @param {*} event 
   */
  const handlePromotion = (event) => {
    updatePromotion(event.currentTarget.checked);
  }

  return (
    <Container>
      <Row>
        <Col md={2}>
          <div className="badge danger">Uçuş</div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h4>{localstoragedata?.origin} - {localstoragedata?.destination}, {passenger} Yolcu</h4>
        </Col>
      </Row>
      <Row className="justify-content-md-start">
        <Col md={12}>
          <Row>
            <Col md={'auto'}>
              Promosyon Kodu
            </Col>
            <Col md={'auto'}>
              <Form.Check type="switch" id="custom-switch" onChange={handlePromotion} />
            </Col>
          </Row>
          {promotion ?
            <Row>
              <Col md={12}>
                <div>Promosyon Kodu seçeneği ile tüm Economy kabini Eco Fly paketlerini %50 indirimler satın alabilirsiniz!</div>
                <div>Promosyon Kodu seçeneği aktifken, <b>Eco Fly</b> paketi haricinde seçim yapılamamaktadır.</div>
              </Col>
            </Row>
            : null}
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="flight-container-header">
            <div className="search-criteria-title">Sıralama Kriteri</div>
            <SearchCriteria type={'price'} list={sortPriceList} placeholder={'Ücretlendirme'} />
            <SearchCriteria type={'time'} list={sortTimeList} placeholder={'Kalkış Saati'} />
          </div>
          <div className="flight-container-body">
            {flights?.map((flight, index) =>
              <div key={index}>
                <FlightCard detail={flight} index={index} key={index} />
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default List;