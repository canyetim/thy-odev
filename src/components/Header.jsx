import React from "react";
import {Row, Col} from "react-bootstrap";

/**
 *
 * @param {*} props
 * @returns
 */
function Header(props) {

  return (
    <>
      <header className="app-header">
        <Row>
          <Col md={6}>
            <a href="/">
              <b>turkishairlines.com</b>
            </a>
          </Col>
          <Col md={6} className="text-right">
            <a href="/">
              search<b>Flight Challange</b>
            </a>
          </Col>
        </Row>
      </header>
    </>
  );
}

export default Header;
