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
    getHSIData().then(data => this.setState({ data }));
  }

  render() {
    return (
      <div>
        <div style={{fontSize: 40, fontWeight: 700, color: 'white', textAlign: 'center'}}>
          Just a simple widget to get HSI stock data!
        </div>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Graph />
          </Grid>
          <Grid item xs={6}>2</Grid>
        </Grid>
      </div>
    )
  }
}

export default Main;
