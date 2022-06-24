import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Button, NavLink, Form } from "react-bootstrap";
import Navigation from "../components/Navigation";

const Home = () => {
  const [data, setData] = useState([]);
  const [sector, setSector] = useState([]);

  useEffect(() => {
    axios
      .get("https://test.wertkt.com/api/biz/")
      .then((res) => setData(res.data));
  }, []);

  const Buttonn = () => {
    <NavLink to="/Detail"></NavLink>;
  };

  return (
    <div className="Home">
      <Navigation />

      <Form.Select aria-label="Default select example">
        <option value="A">Compagny</option>
        {data.map((compagny) => (
          <option value={compagny.id}>{compagny.name}</option>
        ))}
      </Form.Select>

      <Form.Select aria-label="Default select example">
        <option value="A">Selector</option>
        {data.map((compagny, index) => (
          <option key={index}>{compagny.sector}</option>
        ))}
      </Form.Select>

      <ul>
        {data.map((compagny, index) => (
          <li key={index}>
            {compagny.name} {compagny.siren}
            <Button variant="primary" onClick={Buttonn}>
              {compagny.sector}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
