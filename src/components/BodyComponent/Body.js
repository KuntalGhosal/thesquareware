import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import BodyImage from '../../assets/Untitled_Artwork 8.png'
import '../BodyComponent/Body.css'
import MyCustomForm from '../Form/Form'

export default function Body() {
    return (
        <div className="tab-body ">
            <Row xs={12} sm={12} md={12} lg={12}>

                <Col xs={12} sm={12} md={12} lg={6} ><MyCustomForm /></Col>

                <Col xs={12} sm={12} md={12} lg={6} className="img-container">

                    <Image src={BodyImage} className="image-style" />

                </Col>

            </Row>
        </div>
    )
}
