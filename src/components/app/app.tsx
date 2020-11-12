import React from 'react';
import { Col, Layout, Row } from 'antd';
import Navbar from '../navbar/navbar';
import WeatherCard from '../weather-card/weather-card';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';
import WeatherCardTomorrow from '../weather-card-tomorrow/weather-card-tomorrow';

const App: React.FC = (): JSX.Element => {

  const { Footer, Content } = Layout;

  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Content className="content">
          <Row justify="center" align="middle">
            <Col span={24}>
              <Route exact path="/" component={WeatherCard} />
              <Route exact path="/tomorrow" component={WeatherCardTomorrow} />
            </Col>
          </Row>
        </Content>
        <Footer className="footer">Weather App ©2020 Created by ETD</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
