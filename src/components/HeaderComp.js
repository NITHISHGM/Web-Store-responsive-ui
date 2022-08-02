import React from "react";
import { Layout, Row, Col, Space } from "antd";
import logo from "../assets/logo.jpg";
import {
  HomeOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
const { Header } = Layout;

export const HeaderComp = () => {
  return (
    <>
      <Layout>
        <Header className="header">
          <Row gutter={16}>
            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <img className="logo-css" src={logo} alt="" />
            </Col>
            <Col xs={20} sm={20} md={12} lg={12} xl={12} className="app-name">
              E - COLLECTIONS
            </Col>
            <Col xs={0} sm={0} md={10} lg={10} xl={10}>
              <Space className="float-right head-nav">
                <div className="nav-icon">
                  <HeartOutlined />
                  &nbsp; Wishlist
                </div>
                |
                <div className="nav-icon">
                  <ShoppingCartOutlined />
                  &nbsp; Cart
                </div>
                |
                <div className="nav-icon">
                  <HomeOutlined />
                  &nbsp; Home
                </div>
              </Space>
            </Col>
          </Row>
        </Header>
      </Layout>
    </>
  );
};
