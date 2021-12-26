import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import Services from "../../services";
import useFly from "../../hooks/useFly";
import './style.scss';

/**
 *
 * @param {*} props
 * @returns
 */
const City = (props) => {
  const { type, placeholder, icon } = props;
  const [options, setOptions] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const { updateOrigin, updateDestination } = useFly(null);

  /**
   * 
   * @param {*} evt 
   */
  const handleOnSelect = (value, evt) => {
    setSelectedName(evt.target.outerText);

    if (type === 'origin') {
      updateOrigin(value);
    } else if (type === 'destination') {
      updateDestination(value);
    }
  }

  /**
   * 
   */
  useEffect(() => {
    /**
     * 
     */
    const getOptions = async () => {
      const data = await Services.getOptionWithType(type);

      if (data?.length > 0) {
        setOptions(data);
      }
    };

    getOptions();
  }, [type]);

  return (
    <Dropdown
      className="city"
      onSelect={handleOnSelect}
    >
      <Dropdown.Toggle variant="secondary">
        <FontAwesomeIcon icon={icon} className="icon" />
        {selectedName ? selectedName : placeholder}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options?.map(({ code, name }, index) =>
          <Dropdown.Item
            eventKey={code}
            key={index}
            value={name}
          >
            {name}
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

City.propTypes = {
  type: PropTypes.oneOf(['origin', 'destination']),
  placeholder: PropTypes.string,
  icon: PropTypes.any
};

export default City;
