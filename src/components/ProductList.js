import React from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Button
} from "reactstrap";
const ProductList = ({ id, title, price, description, image }) => {
  const history = useHistory();
  return (
    <Col xs="12" md="4" lg="3" className="mt-3">
      <Card className="shadow p-3 mb-5 bg-white rounded">
        <CardImg top src={image.url} alt={image.name} />
        <CardBody>
          <CardTitle>{title.substr(0, 20).concat("...")}</CardTitle>
          <CardSubtitle>${price}</CardSubtitle>
          <CardText>{description.substr(0, 120).concat("...")}</CardText>
          <Button
            className="btn-sm btn-primary"
            onClick={() => history.push(`/products/${id}`)}
          >
            Cart
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ProductList;
