import React, { Component } from 'react'
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props)
    }

    renderDish(dish) {
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

    renderComment(dish) {
        if (dish != null) {
            var comment = dish.comments.map((commentS) => {
                return (
                    <div>
                        <li className="mt-2">{commentS.comment}</li>
                        <li className="mt-2">-- {commentS.author}, {commentS.date}</li>
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
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-4 m-1">
                    {this.renderDish(this.props.dish)}

                </div>
                <div className="col-12 col-md-4 m-1">
                    <ul className="list-unstyled">
                        {this.renderComment(this.props.dish)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default DishDetail;