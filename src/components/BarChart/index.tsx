import React from 'react';
import { Bar, ChartData } from 'react-chartjs-2';
import { ChartData as Data} from 'chart.js';
import { Container } from './styles';

interface Props {
  chartData: ChartData<Data>;
}

const BarChart: React.FC<Props> = ({ chartData }) => {
  return (
    <Container>
      <Bar data={chartData}/>
    </Container>
   
  )
}

export default BarChart;