import React, { useState } from "react";
import ContextFly from ".";

const Provider = (props) => {
  const { children } = props;
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [cabin, setCabin] = useState("economy");
  const [passenger, setPassenger] = useState(1);
  const [price, setPrice] = useState(0);
  const [time, setTime] = useState(0);
  const [flightcard, setFlightcard] = useState(null);
  const [flights, setFlights] = useState(null);
  const [promotion, setPromotion] = useState(false);
  const [result, setResult] = useState(null);

  /**
   *
   * @param {*} data
   */
  const updateOrigin = (data) => {
    setOrigin(data);
  };

  /**
   *
   * @param {*} data
   */
  const updateDestination = (data) => {
    setDestination(data);
  };

  /**
   *
   * @param {*} data
   */
  const updateCabin = (data) => {
    setCabin(data);
  };

  /**
   *
   * @param {*} data
   */
  const updatePassenger = (data) => {
    setPassenger(data);
  };

  /**
   *
   * @param {*} data
   */
  const updatePrice = (data) => {
    setPrice(data);
  };

  /**
   *
   * @param {*} data
   */
  const updateTime = (data) => {
    setTime(data);
  };

  /**
   *
   * @param {*} data
   */
  const updateFlightcard = (data) => {
    setFlightcard(data);
  };

  /**
   *
   * @param {*} data
   */
  const updateFlights = (data) => {
    setFlights(data);
  };

  /**
   *
   * @param {*} data
   */
  const updatePromotion = (data) => {
    setPromotion(data);
  };

  const updateResult = (data) => {
    setResult(data);
  };

  return (
    <ContextFly.Provider
      value={{
        origin,
        destination,
        cabin,
        passenger,
        price,
        time,
        flightcard,
        flights,
        promotion,
        result,
        updateOrigin,
        updateDestination,
        updateCabin,
        updatePassenger,
        updatePrice,
        updateTime,
        updateFlightcard,
        updateFlights,
        updatePromotion,
        updateResult,
      }}
    >
      {children}
    </ContextFly.Provider>
  );
};

export default Provider;
