import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Home.css";
import CocktailSlide from "../components/CocktailSlide";
import Header from "../components/Header";
import SquareImageExample from "../assets/squareexample.png";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Container fluid>
        <Row>
          <Col>
            <Link className="box_image_link" to="/searchbyname">
              <div className="box_image_container">
                <img className="box_image" src={SquareImageExample}></img>
              </div>
            </Link>
            <Link className="box_image_link" to="/searchbying">
              <div className="box_image_container">
                <img className="box_image" src={SquareImageExample}></img>
              </div>
            </Link>
            <Link className="box_image_link" to="/bartenderschoice">
              <div className="box_image_container">
                <img className="box_image" src={SquareImageExample}></img>
              </div>
            </Link>
          </Col>
          <Col lg={8}>
            <CocktailSlide></CocktailSlide>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
