import React from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import { getSearchResult } from '../utils/getData';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: '',
      searchOptions: []
    };
  }

  onChangeSearchKey = ({ target: { value } }) => this.setState({ searchKey: value });

  onSearchButtonClicker = () => {
    console.log(1234);
    getSearchResult(this.state.searchKey).then(data => {
      const filtered_data = data.filter(
        d => d["4. region"] === "Hong Kong"
      ).map(
        obj => [obj["1. symbol"], obj["2. name"]]
      )
      this.setState({ searchOptions: filtered_data });
    });
  };

  render() {
    console.log(this.state);
    return (
      <Grid container>
        <Grid item xs={9}>
          <TextField
            value={this.state.searchKey}
            onChange={this.onChangeSearchKey}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <Button size="small" onClick={this.onSearchButtonClicker}> Seach </Button>
        </Grid>
      </Grid>
    )
  }
}

export default SearchBar;
