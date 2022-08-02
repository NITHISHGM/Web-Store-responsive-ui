import React, { useEffect } from "react";
import { Layout, Row, Col, Card, Image, Rate } from "antd";
import { FETCH_PRODUCT } from "../../redux/action/Index";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { EllipsisOutlined } from "@ant-design/icons";

const { Content } = Layout;

const ProductDetails = () => {
  let params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FETCH_PRODUCT(params.productId));
  }, [dispatch, params]);

  const FETCH_PRODUCTData = useSelector((state) => state.FETCH_PRODUCT);
  return (
    <>
      <Layout>
        <Content className="main-content">
          <Row gutter={16}>
            <Col xs={0} sm={0} md={6} lg={7} xl={7}></Col>
            <Col xs={24} sm={24} md={12} lg={10} xl={10}>
              <Card key={FETCH_PRODUCTData.id} className="product-list-card">
                {" "}
                <div className="prod-desc-title">
                  <Row gutter={16}>
                    <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                      {FETCH_PRODUCTData.title}{" "}
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                      {" "}
                      <span className="float-right">
                        {" "}
                        <EllipsisOutlined />
                      </span>
                    </Col>
                  </Row>
                </div>
                <Row>
                  <Col xs={0} sm={2} md={7} lg={7} xl={7}></Col>

                  <Col xs={24} sm={20} md={10} lg={10} xl={10}>
                    {" "}
                    <Image
                      width="100%"
                      height={250}
                      src={FETCH_PRODUCTData.image}
                    />
                  </Col>
                  <Col xs={0} sm={2} md={7} lg={7} xl={7}></Col>
                </Row>
                <div className="prod-catg">{FETCH_PRODUCTData.category}</div>
                <div className="prod-price">${FETCH_PRODUCTData.price}</div>
                <div>
                  {" "}
                  <Rate
                    style={{ color: "green" }}
                    allowHalf
                    value={FETCH_PRODUCTData.rating.rate}
                  />{" "}
                  <span className="rate-count">
                    {" "}
                    | {FETCH_PRODUCTData.rating.count} ratings
                  </span>
                </div>
                <div className="prod-det-desc">
                  {FETCH_PRODUCTData.description}
                </div>
              </Card>
            </Col>
            <Col xs={0} sm={0} md={6} lg={7} xl={7}></Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default ProductDetails;
