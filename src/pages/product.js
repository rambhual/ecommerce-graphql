import React, { useContext, Fragment } from "react";
import { Row } from "reactstrap";
import { ProductContext } from "../context/product.context";
import ProductList from "../components/ProductList";

const Product = () => {
  const { loading, products, error } = useContext(ProductContext);
  console.log(products);
  return (
    <div>
      <Row>
        {products &&
          products.map(p => {
            return <ProductList key={p.id} {...p} />;
          })}
      </Row>
    </div>
  );
};
export default Product;
