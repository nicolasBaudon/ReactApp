import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom';
import { Control, Form, Errors, actions } from 'react-redux-form'


const required = (val) => val && val.length; {/*funcion para verificar que el valor que se pasa sea mayor que 0*/ }
const maxLength = (len) => (val) => !(val) || (val.length <= len); {/*Funcion para verificar que el valor que se pasa sea menor que cierto valor*/ }
const minLength = (len) => (val) => (val) && (val.length >= len); {/*Funcion para verificar que el valor ingresado sea mayor que el valor que tiene que ser*/ }
const isNumber = (val) => !isNaN(Number(val)); {/*Funcion para verificar que el valor ingresado es un valor*/ }
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val); {/*Funcion para verificar que el valor que se ingresa cumple con esa expresion regular. La expresion verifica que empiece con un combinacion de carateres que sean de la A a la Z despues un arroba seguido con otra combinacion de la A a la Z, seguido por un punto, y despues otra combinacion de la A a la Z pero con un valor de entre 2 y 4 caracteres*/ }

class Contact extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        {/*Esta funcion hace algo cada vez que se envia la info del form, osea cada vez que se toca el submit*/ }
        alert(JSON.stringify(values));
        this.props.resetFeedbackForm(); /*Solo borra los datos cargados en la form cuando son mandados, si se navega por los componentes se mantienen*/
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb> {/*Esto agrega una mini navegacion dentro de la pagina esa*/}
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us you Feedback</h3>
                        <hr />
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}> {/*La form con la propiedad model igual a ese valor permite que se llene la propiedad dentro del estado(que tiene el mismo nombre que el model) y asi cambiar el estado de la aplicacion*/}
                            <Row className="form-group">
                                <Label htmlfor="firstName" md={2}>First Name:</Label> {/*El md con el 2 significa que para dispositivos medianos y grandes el label ocupa dos columnas de las 12 y el htmlfor se pone para no confunfir el for, que se usa en html simple, con el for de javascipt*/}
                                <Col md={10}> {/*Col en Reactstrap con el md={10} es como poner un div que va a ocupar 10 columnas*/}
                                    <Control.text model=".firstName" id="firstName" name="firstName" placeholder="First Name" className="form-control" validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} /> {/*El model en redux es el nombre de la propiedad en la que se va a asiganr el valor de lo que se ingrese*/}
                                    <Errors className="text-danger" model=".firstName" show="touched" messages={{
                                        required: "Required",
                                        minLength: "Must be grater than 2 characters",
                                        maxLength: "Must be 15 characters or less"
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="lastName" md={2}>Last Name:</Label> {/*El md con el 2 significa que para dispositivos medianos y grandes el label ocupa dos columnas de las 12 y el htmlfor se pone para no confunfir el for, que se usa en html simple, con el for de javascipt*/}
                                <Col md={10}> {/*Col en Reactstrap con el md={10} es como poner un div que va a ocupar 10 columnas*/}
                                    <Control.text model=".lastName" id="lastName" name="lastName" placeholder="Last Name" className="form-control" validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                                    <Errors className="text-danger" model=".lastName" show="touched" messages={{
                                        required: "Required",
                                        minLength: "Must be grater than 2 characters",
                                        maxLength: "Must be 15 characters or less"
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="telNum" md={2}>Contact Tel:</Label> {/*El md con el 2 significa que para dispositivos medianos y grandes el label ocupa dos columnas de las 12 y el htmlfor se pone para no confunfir el for, que se usa en html simple, con el for de javascipt*/}
                                <Col md={10}> {/*Col en Reactstrap con el md={10} es como poner un div que va a ocupar 10 columnas*/}
                                    <Control.text model=".telNum" id="telNum" name="telNum" placeholder="Tel Num" className="form-control" validators={{ isNumber, required, minLength: minLength(3), maxLength: maxLength(15) }} />
                                    <Errors className="text-danger" model=".telNum" show="touched" messages={{
                                        isNumber: "It Must be a number",
                                        required: "Required",
                                        minLength: "Must be grater than 2 numbers",
                                        maxLength: "Must be 15 numbers or less"
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="email" md={2}>Email:</Label> {/*El md con el 2 significa que para dispositivos medianos y grandes el label ocupa dos columnas de las 12 y el htmlfor se pone para no confunfir el for, que se usa en html simple, con el for de javascipt*/}
                                <Col md={10}> {/*Col en Reactstrap con el md={10} es como poner un div que va a ocupar 10 columnas*/}
                                    <Control.text model=".email" id="email" name="email" placeholder="Email" className="form-control" validators={{ validEmail, required }} />
                                    <Errors className="text-danger" model=".email" show="touched" messages={{
                                        validEmail: "Invalid Email Adress",
                                        required: "Required"
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 6, offset: 2 }}> {/*Esto indica que ocupa 6 columnas el contenido, con 2 de margen hacia el otro elemento*/}
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree" className="form-check-input" /> {' '} <strong>May We Contact You?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType" name="contactType" className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="feedback" md={2}>Feedback:</Label> {/*El md con el 2 significa que para dispositivos medianos y grandes el label ocupa dos columnas de las 12 y el htmlfor se pone para no confunfir el for, que se usa en html simple, con el for de javascipt*/}
                                <Col md={10}> {/*Col en Reactstrap con el md={10} es como poner un div que va a ocupar 10 columnas*/}
                                    <Control.textarea model=".message" id="message" name="message" rows="12" className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="dark">Send Feedback</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;