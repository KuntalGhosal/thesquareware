import { Slider } from 'antd'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import '../Form/Form.css'
import Radiobtn from './Radiobtn'
export default function MyCustomForm() {
    const marks = {
        12: '12 KM',
    };
    return (


        <div>
            <div>
                <h1 className="header-text">Allgemeines:</h1>
            </div>
            <div>
                <Form className="form-parent">
                    <Form.Group style={{ paddingBottom: 8, marginLeft: 0 }}>
                        <Form.Label className="label-style">Alter</Form.Label>
                        <Form.Control className="form-controlStyle" placeholder="Type here…" />

                    </Form.Group>
                    <Form.Group style={{ paddingBottom: 8, marginLeft: 0 }}>
                        <Form.Label className="label-style">Geschlecht</Form.Label>
                        <div className="radio-style">
                            <Radiobtn />
                        </div>
                        <div>
                            <Form.Group style={{ paddingBottom: 8, marginLeft: 0 }} >
                                <Form.Label className="label-style" >Wohnort</Form.Label>
                                <Form.Control className="form-controlStyle" placeholder="Type here…" />

                            </Form.Group>
                        </div>
                        <Form.Group style={{ paddingBottom: 8, marginLeft: 0 }} >
                            <Form.Label className="label-style" >Wie weit bist du bereit zu fahren?</Form.Label>
                            <Slider
                                trackStyle={{ backgroundColor: '#E35E00', opacity: 0.8, }}
                                handleStyle={{ borderColor: '#E35E00', backgroundColor: '#E35E00', }}
                                defaultValue={12}
                                marks={marks}
                                style={{ width: '70%', marginLeft: 0 }}
                                railStyle={{ backgroundColor: '#E35E00', opacity: 0.3, }}
                            />
                        </Form.Group>
                        <p style={{ color: '#762f00' }}>Gemessen vom Wohnort</p>
                    </Form.Group>



                    <div className="btn-container">
                        <Button type="submit" className="submit-one">
                            Save me
                    </Button>
                        <Button type="submit" className="submit-two">
                            Next
                    </Button>
                    </div>
                </Form>
            </div>
        </div>


    )
}
