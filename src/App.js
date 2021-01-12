import React from 'react';
import { Grid } from "@material-ui/core";
import './App.css';
import youtube from '../src/api/youtube';
import { SearchBar } from "./components";
// import { VideoList, VideoDetail } from "./components";

class App extends React.Component {
  //  state = {
  //   videos: [],
  //   selectedVideo:null,
  // }

  // componentDidMount() { 
  //   this.handleSubmit('react') 
  // }

  onVideoSelect  = (video) => {
    this.setState({ selectedVideo: video });
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: "snippet",
        maxResults: 5,
        key: 'AIzaSyAqJu_MgUyIUyBHFEFoUNZmw3oeoiHywrE', 
        q: searchTerm,
      }
    });
    console.log(response.data.items);
    // this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
  }
  render() { 
    // const {selectedVideo, videos} = this.state;
    return (
      <Grid container className="App-header">
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              <div className="App-videodetail">VIDEODETAIL</div> 
            </Grid>
            <Grid item xs={4}>
              <div className="App-videoitems">VIDEOLIST</div>
              <Grid item xs={12} className="videoItem">VideoItem1</Grid>
              <Grid item xs={12} className="videoItem">VideoItem2</Grid>
              <Grid item xs={12} className="videoItem">VideoItem3</Grid>
              <Grid item xs={12} className="videoItem">VideoItem4</Grid>
              <Grid item xs={12} className="videoItem">VideoItem5</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  };
}
 
export default App;