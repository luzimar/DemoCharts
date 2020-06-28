import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import BarChart from '../../components/BarChart';

const Home: React.FC = () => {
  const [chartData, seChartData] = useState({});

  const chart = () => {
    seChartData({
      labels: ['Segunda', 'Terça', 'Quarta','Quinta','Sexta'],
      datasets:[
        {
          label: 'Mercadorias vendidas',
          labelColor: 'blue',
          data: [32,45,12,76,69],
          backgroundColor: [
            'rgb(226,84,84)',
            'rgba(75,192,192,0.6)',
            'rgb(226,84,84)',
            'rgb(112,235,106)',
            'rgb(112,235,106)'
          ],
          borderWidth: 4
        }
      ]
    })
  }

  useEffect(()=> {
    chart();
  },[])
  return (
    <Container>
      <h1>Estatística de mercadorias vendidas na semana</h1>
      <BarChart chartData={chartData}/>
    </Container>
  )
}

export default Home;