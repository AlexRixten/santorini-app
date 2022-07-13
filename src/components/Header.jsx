import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import logo from '../assets/header/logo.svg'

const navBarList = [
  {
    'id': '0',
    'title': 'Номера и цены',
    'link': '/rooms',
  },
  {
    'id': '1',
    'title': 'Об отеле',
    'link': '',
  },
  {
    'id': '2',
    'title': 'Услуги',
    'link': '',
  },
  {
    'id': '3',
    'title': 'Условия проживания',
    'link': '',
  },
  {
    'id': '4',
    'title': 'Новости',
    'link': '/news',
  },
  {
    'id': '5',
    'title': 'Контакты',
    'link': '/contacts',
  },
  {
    'id': '6',
    'title': 'Фото отеля',
    'link': '/gallery',
  },
  {
    'id': '7',
    'title': 'Как добраться',
    'link': '/way',
  },
  {
    'id': '8',
    'title': 'Отзывы гостей',
    'link': '',
  },
  {
    'id': '9',
    'title': 'Достопримечательности',
    'link': '',
  },
  {
    'id': '10',
    'title': 'Паста-бар',
    'link': '',
  },
  {
    'id': '11',
    'title': 'Активный отдых',
    'link': '',
  },
  {
    'id': '12',
    'title': 'Спецпредложения',
    'link': '/special-offer',
  },
]

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <header className='header'>
        <Container>
          <Row >
            <Col>
              <div className='header_btn' onClick={handleShow}>
                <span></span>
                <span></span>
              </div>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <Link to='/'>
                      <img className='header_logo' src={logo} alt="logo" />
                    </Link>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <nav className="header_nav">
                    <ul className="header_list">
                      {navBarList.map(item => (
                        <li key={item.id} className="header_item" onClick={handleClose}>
                          <Link className='header_link' to={item.link}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </Offcanvas.Body>
              </Offcanvas>
              <Link to='/'>
                <img className='header_logo' src={logo} alt="logo" />
              </Link>
            </Col>
          </Row>

        </Container>
      </header>
    </>
  )
}


export default Header