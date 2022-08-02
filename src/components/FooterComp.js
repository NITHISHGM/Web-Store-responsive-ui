import React from "react";
import { Layout, Row, Col } from "antd";
const { Footer } = Layout;

const FooterComp = () => {
  return (
    <>
      <Layout>
        <Footer className="app-footer">
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="text-center">Web Store</div>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </>
  );
};

export default FooterComp;
