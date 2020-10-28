import React from 'react';
import { Layout } from 'antd';
import Navbar from '../navbar/navbar';
import WeatherCard from '../weather-card/weather-card';
import './app.css';

const App: React.FC = (): JSX.Element => {

  const { Footer, Content } = Layout;

  return (
    <Layout>
      <Navbar />
      <Content className="content">
        <WeatherCard />
      </Content>
      <Footer className="footer">Weather App ©2020 Created by ETD</Footer>
    </Layout>
  );
}

export default App;
