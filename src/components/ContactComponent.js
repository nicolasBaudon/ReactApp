import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'
import { Link } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            telNum: '',
            email: '',
            agree: false,
            contactType: '',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checkbox : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert(JSON.stringify(this.state));
        event.preventDefault(); {/*Este metodo previene que el evento no haga la accion por defecto, que es irse a otra pagina*/ }
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>{/*Se crea un formgruop por cada elemento del form, osea, uno para el nombre, otro para el apellido, etc*/}
                                <Label htmlfor="firstName" md={2}>First Name:</Label> {/*El md con el 2 significa que para dispositivos medianos y grandes el label ocupa dos columnas de las 12 y el htmlfor se pone para no confunfir el for, que se usa en html simple, con el for de javascipt*/}
                                <Col md={10}> {/*Col en Reactstrap con el md={10} es como poner un div que va a ocupar 10 columnas*/}
                                    <Input type="text" id="firstName" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="lastName" md={2}>Last Name:</Label> {/*El md con el 2 significa que para dispositivos medianos y grandes el label ocupa dos columnas de las 12 y el htmlfor se pone para no confunfir el for, que se usa en html simple, con el for de javascipt*/}
                                <Col md={10}> {/*Col en Reactstrap con el md={10} es como poner un div que va a ocupar 10 columnas*/}
                                    <Input type="text" id="lastName" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="telNum" md={2}>Contact Tel:</Label> {/*El md con el 2 significa que para dispositivos medianos y grandes el label ocupa dos columnas de las 12 y el htmlfor se pone para no confunfir el for, que se usa en html simple, con el for de javascipt*/}
                                <Col md={10}> {/*Col en Reactstrap con el md={10} es como poner un div que va a ocupar 10 columnas*/}
                                    <Input type="tel" id="telNum" name="telNum" placeholder="Tel Num" value={this.state.telNum} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="email" md={2}>Email:</Label> {/*El md con el 2 significa que para dispositivos medianos y grandes el label ocupa dos columnas de las 12 y el htmlfor se pone para no confunfir el for, que se usa en html simple, con el for de javascipt*/}
                                <Col md={10}> {/*Col en Reactstrap con el md={10} es como poner un div que va a ocupar 10 columnas*/}
                                    <Input type="email" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}> {/*Esto indica que ocupa 6 columnas el contenido, con 2 de margen hacia el otro elemento*/}
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" value={this.state.agree} onChange={this.handleInputChange} /> {' '} <strong>May We Contact You?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="feedback" md={2}>Feedback:</Label> {/*El md con el 2 significa que para dispositivos medianos y grandes el label ocupa dos columnas de las 12 y el htmlfor se pone para no confunfir el for, que se usa en html simple, con el for de javascipt*/}
                                <Col md={10}> {/*Col en Reactstrap con el md={10} es como poner un div que va a ocupar 10 columnas*/}
                                    <Input type="textarea" id="message" name="message" rows="12" value={this.state.message} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="dark">Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;