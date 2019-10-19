import { Chart, Axis, Legend, Tooltip, Coord, Interval } from 'viser-react';
import * as React from 'react';
import * as _ from 'lodash';
const data = [
{country:'Food',cost:121},
{country:'Entertainment',cost:100},
{country:'Health',cost:111},
{country:'Clothes',cost:102},
{country:'Rent',cost: 320},
{country:'Utilities',cost:180}];

const scale = [{
  dataKey: 'cost',
  min: 0,
}];

const axis1Opts = {
  dataKey: 'cost',
  label: null,
  tickLine: null,
  line: {
    stroke: '#E9E9E9',
    lineDash: [ 3, 3 ]
  }
};
const axis2Opts = {
  dataKey: 'category',
  grid: {
    align: 'center'
  },
  tickLine: null,
  label: {
    Offset: 10,
    textStyle: {
      textAlign: 'center' // 设置坐标轴 label 的文本对齐方向
    }
  }
};

const interval1Opts = {
  position: 'country*cost',
  color: 'country',
  label: ['cost', {
    offset: -15,
    textStyle: {
      textAlign: 'center',
      fontSize: 11,
      shadowBlur: 2,
      shadowColor: 'rgba(0, 0, 0, .45)'
    }
  }],
  style: {
    lineWidth: 1,
    stroke: '#fff',
  },
};

class PieChart extends React.Component {
  render() {
    return (
      <div id='PieChart'>
        <Chart height={400} padding={[ 40, 40, 130, 40 ]} data={data} scale={scale}>
          <Coord type="polar" />
          <Axis {...axis1Opts} />
          <Axis {...axis2Opts} />
          <Legend dataKey="category" itemWidth={50} />
          <Axis dataKey="percent" title={{ offset: 40, text: 'Percentage'}} />
          <Interval {...interval1Opts} />
        </Chart>
      </div>
    );
  }
}

export default PieChart;

