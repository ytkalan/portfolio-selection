import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis';

const graph = ({ data }) => (
  <XYPlot width={700} height={300}>
    <HorizontalGridLines />
    <LineSeries
      color="red"
      data={data}
    />
    <XAxis />
    <YAxis />
  </XYPlot>
);

export default graph;