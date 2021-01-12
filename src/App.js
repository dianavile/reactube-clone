import React from 'react';
import { Grid } from "@material-ui/core";
import logo from './logo.svg';
import './App.css';
import youtube from '../src/api/youtube';
// import { SearchBar, VideoList, VideoDetail } from "./components";

class App extends React.Component {
   state = {
    videos: [],
    selectedVideo:null,
  }

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
        key: "AIzaSyCn0H63y8Z28n7g-NkLhVrDpLGoDuQs6VM",
        q: searchTerm,
      }
    });
    console.log(response.data.items);
    // this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
  }

  render() { 
    //  const {selectedVideo, videos} = this.state;
    return (
      <Grid 
        container
        className="App-header"
        justify="center"
        alignItems="center">
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <div>
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <div className="App-searchbar">SEARCHBAR</div>
                </header>  
              </div>
            </Grid>
            <Grid item xs={8}>
              <div className="App-videodetail">VIDEODETAIL</div> 
            </Grid>
            <Grid item xs={4}>
            <div className="App-videoitems">VIDEOLIST</div> 
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  };
}
 
export default App;