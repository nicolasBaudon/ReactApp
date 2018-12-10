import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from "react-router-dom";

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

function RenderComment({ comentario }) {
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
                            <RenderComment comentario={props.comments} />
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