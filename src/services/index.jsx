const Services = {

  /**
  *
  * @returns
  */
  getFlights: () => {
    return new Promise((resolve, reject) => {
      try {
        let data = require('../lib/flights.json');
        resolve(data.flights);
      } catch (e) {
        reject(e);
      }
    });
  },

  /**
   * 
   * @param {*} type 
   * @returns 
   */
  getOptionWithType: (type) => {
    return new Promise((resolve, reject) => {
      try {
        let data = require('../lib/flights.json');
        let typer = type === 'origin' ? 'originAirport' : 'destinationAirport';
        let mapping = data?.flights.map(p => p[typer]);
        var uniqueOptionList = [];
        mapping?.filter(function (item) {
          var i = uniqueOptionList.findIndex(x => (x.code === item.code));
          if (i <= -1) {
            uniqueOptionList.push(item);
          }
          return uniqueOptionList;
        });
        resolve(uniqueOptionList);
      } catch (e) {
        reject(e);
      }
    });
  },

  /**
   * 
   * @param {*} selected 
   * @returns 
   */
  fetchFlightList: (selected) => {
    return new Promise((resolve, reject) => {
      try {
        let data = require('../lib/flights.json');
        let flights = data.flights;

        let availableFlights = [];
        flights.find(flight => {
          if (flight.originAirport.code === selected.origin && flight.destinationAirport.code === selected.destination) {
            availableFlights.push(flight);
          }
          //TODO buraya bak
          return null
        });
        resolve(availableFlights);
      } catch (e) {
        reject(e);
      }
    });
  },

};

export default Services;
