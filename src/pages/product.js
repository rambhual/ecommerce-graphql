import React, { useContext, Fragment } from "react";
import { Row } from "reactstrap";
import { ProductContext } from "../context/product.context";
import ProductList from "../components/ProductList";

const Product = () => {
  const { products } = useContext(ProductContext);

  return (
    <Fragment>
      <Row>
        {products &&
          products.map(p => {
            return <ProductList key={p.id} {...p} />;
          })}
      </Row>
    </Fragment>
  );
};
export default Product;
