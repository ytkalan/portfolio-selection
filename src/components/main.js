import React from 'react';
import Grid from '@material-ui/core/Grid';
import { getHSIData } from '../utils/getData';
import Graph from './lineGraph';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    getHSIData().then(data => {
      const startTime = new Date();
      startTime.setYear(startTime.getFullYear() - 5);
      const startTimeDateString = startTime.toISOString() .split("T")[0];    

      const filteredData = Object.keys(data).filter(
        value => value > startTimeDateString
      ).reduce(
        (acc, val)=>[...acc, {"x": (new Date(val)).valueOf(), "y": parseFloat(data[val]["1. open"])}],
        []
      );

      console.log(filteredData);
      this.setState({ data: filteredData });
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Grid container alignItems="center" justify="center">
          <Grid container item xs={12} alignItems="center" justify="center">
            <Graph data={this.state.data} />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Main;
