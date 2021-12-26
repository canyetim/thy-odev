import { createContext } from "react";

const context = createContext({
  origin: null,
  destination: null,
  passenger: null,
  cabin: null,
  price: null,
  time: null,
  flights: null,
  flightcard: null,
  promotion: null,
  result: null,
  updateOrigin: null,
  updateDestination: null,
  updatePassenger: null,
  updateCabin: null,
  updatePrice: null,
  updateTime: null,
  updateFlightcard: null,
  updateFlights: null,
  updatePromotion: null,
  updateResult: null,
});

export default context;
