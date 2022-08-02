import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_PRODUCT } from "./redux/action/Index";
import { HeaderComp } from "./components/HeaderComp";
import ContentComp from "./components/contentComp/ContentComp";
import FooterComp from "./components/FooterComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/contentComp/ProductDetails";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.FETCH_PRODUCT);

  console.log(data);

  useEffect(() => {
    dispatch(FETCH_PRODUCT("1"));
  }, [dispatch]);
  console.log("data", data);

  return (
    <div>
      <Layout>
        <HeaderComp />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ContentComp />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
        <FooterComp />
      </Layout>
    </div>
  );
}

export default App;
