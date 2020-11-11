import React from 'react';
import { Col, Layout, Row } from 'antd';
import Navbar from '../navbar/navbar';
import WeatherCard from '../weather-card/weather-card';
import './app.css';

const App: React.FC = (): JSX.Element => {

  const { Footer, Content } = Layout;

  return (
    <Layout>
      <Navbar />
      <Content className="content">
        <Row justify="center" align="middle">
          <Col span={24}>
            <WeatherCard />
          </Col>
        </Row>
      </Content>
      <Footer className="footer">Weather App ©2020 Created by ETD</Footer>
    </Layout>
  );
}

export default App;
