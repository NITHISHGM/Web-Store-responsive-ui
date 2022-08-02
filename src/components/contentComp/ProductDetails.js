import React, { useEffect } from "react";
import { Layout, Row, Col, Card, Image, Rate, Button } from "antd";
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
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="product-view-card">
                {" "}
                <Row gutter={16}>
                  <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                    <Image
                      width="100%"
                      height={450}
                      src={FETCH_PRODUCTData.image}
                    />
                  </Col>
                  <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
                  <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                    <div className="prod-catg">
                      {FETCH_PRODUCTData.category}
                    </div>{" "}
                    <div className="prod-desc-title">
                      {FETCH_PRODUCTData.title}
                    </div>
                    <Row>
                      <Col xs={0} sm={2} md={7} lg={7} xl={7}></Col>

                      <Col xs={24} sm={20} md={10} lg={10} xl={10}>
                        {" "}
                      </Col>
                      <Col xs={0} sm={2} md={7} lg={7} xl={7}></Col>
                    </Row>
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
                    <div className="prod-price">${FETCH_PRODUCTData.price}</div>
                    <div className="prod-det-desc">
                      {FETCH_PRODUCTData.description}
                    </div>
                    <Row>
                      <Col span={12} className="text-center">
                        {" "}
                        <Button className="btn-add-cart">add to cart</Button>
                      </Col>
                      <Col span={12} className="text-center">
                        <Button className="btn-go-cart">Go to cart</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default ProductDetails;
