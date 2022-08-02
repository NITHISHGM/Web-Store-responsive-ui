import React, { useEffect } from "react";
import { Layout, Row, Card, Col, Image, Rate, Button } from "antd";
import { FETCH_PRODUCTS } from "../../redux/action/Index";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import ContentHead from "./ContentHead";
const { Content } = Layout;

const ContentComp = () => {
  const dispatch = useDispatch();
  const FETCH_PRODUCTS_Data = useSelector((state) => state.FETCH_PRODUCTS);
  useEffect(() => {
    dispatch(FETCH_PRODUCTS());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Content className="main-content">
          <ContentHead />
          <Row gutter={16}>
            {FETCH_PRODUCTS_Data?.map((d) => {
              return (
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                  <Card key={d.id} className="product-list-card">
                    {" "}
                    <div className="prod-title">{d.title}</div>
                    <Image width="100%" height={250} src={d.image} />
                    <div className="prod-price">${d.price}</div>
                    <div>
                      {" "}
                      <Rate
                        style={{ color: "green" }}
                        allowHalf
                        value={d.rating.rate}
                      />{" "}
                      <span className="rate-count">
                        {" "}
                        | {d.rating.count} ratings
                      </span>
                    </div>
                    <div className="prod-desc">{d.description}</div>
                    <div className="text-center">
                      {" "}
                      <Link to={`/product/${d.id}`}>
                        {" "}
                        <Button className="add-cart-btn">Add To Cart</Button>
                      </Link>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default ContentComp;
