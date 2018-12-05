import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    } else {
        return (
            <div></div>
        );
    }
}

function RenderComment({ dish }) {
    if (dish != null) {
        var comment = dish.comments.map((commentS) => {
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
    } else {
        return (
            <div></div>
        );
    }
}

const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-4 m-1">
                    <ul className="list-unstyled">
                        <RenderComment dish={props.dish} />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DishDetail;