import React, { Component } from 'react';
import LoadingIndicator  from '../common/LoadingIndicator';
import { Button, Icon, notification } from 'antd';
import { withRouter } from 'react-router-dom';
import BarChartComponent from '../graficos/BarChartComponent';
import LineChartComponent from '../graficos/LineChartComponent';
import PieChartComponent from '../graficos/PieChartComponent';
import DoughnutChartComponent from '../graficos/DoughnutChartComponent';
import RadarChartComponent from '../graficos/RadarChartComponent';
import './Home.css';

class Home extends Component {
	
  render() {
  	if(!this.props.isAuthenticated){
  		this.props.handleLogout("/login", "success", "prueba home.");
  	}
    return (
      <div className="App">
      <h1>BarChart</h1>
        <BarChartComponent/>
      <h1>Line</h1>
        <LineChartComponent/>
      <h1>PieChart</h1>
        <PieChartComponent/>
      <h1>Doughnut</h1>
        <DoughnutChartComponent/>
      <h1>Radar</h1>
        <RadarChartComponent/>
      </div>
    );
  }
}

export default withRouter(Home);
