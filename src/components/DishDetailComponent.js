import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Row, Col
} from 'reactstrap';
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from 'react-redux-form'

const minLength = (len) => (val) => (val) && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    handleSubmit(values) {
        this.props.addComment(this.props.dishId, values.rating, values.yourName, values.comments);
        this.toggleModal();
    }

    render() {
        return (
            <div>
                <br />
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <div className="col-12 col-md-9">
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}> {/*La propiedad toggle, tanto aca como en la linea de abajo, no permite cambiar el estado tocando fuera del modal o en la cruz respectivamente a las lineas, escondiendo el modal*/}
                        <ModalHeader toggle={this.toggleModal} >Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating" md={2}>Rating</Label>
                                    <Col md={12}>
                                        <Control.select model=".rating" name="rating" className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="yourName" md={4}>Your Name</Label>
                                    <Col md={12}>
                                        <Control.text model=".yourName" id="yourName" name="yourName" placeholder="Your Name" className="form-control" validators={{ minLength: minLength(3), maxLength: maxLength(15) }} />
                                        <Errors className="text-danger" model=".yourName" show="touched" messages={{
                                            minLength: "Must be grater than 2 characters",
                                            maxLength: "Must be 15 characters or less"
                                        }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comments" md={2}>Comments</Label>
                                    <Col md={12}>
                                        <Control.textarea model=".comments" id="comments" name="comments" rows="6" className="form-control" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{ size: 12, offset: 0 }}>
                                        <Button type="submit" color="dark">Submit</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        );
    }

}

function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComment({ comentario, addComment, dishId }) {
    var comment = comentario.map((commentS) => {
        return (
            <div>
                <li className="mt-2">{commentS.comment}</li>
                <li className="mt-2">-- {commentS.author}, {new Intl.DateTimeFormat('es', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(commentS.date)))}</li> {/*Esa funcion esa para convertir una hora en formato bien*/}
            </div>
        );
    })
    return (
        <div>
            <h4>Comments</h4>
            {comment}
            <CommentForm addComment={addComment} dishId={dishId} />
        </div>
    );
}

const DishDetail = (props) => {
    if (props.dish != null && props.comments != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-4 m-1">
                        <ul className="list-unstyled">
                            <RenderComment comentario={props.comments} addComment={props.addComment} dishId={props.dish.id} />
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;