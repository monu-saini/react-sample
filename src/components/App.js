import _ from 'lodash';
import React, { Component } from 'react';
import ZipForm from './ZipForm';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';
const API_KEY = 'AIzaSyDWqwZVqNjGKwM5HCzrMvCxc6i1vq5qdY4'; // TODO get it from config this is just for sample aapp


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('spidermen');
    }

    videoSearch(term) {

        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({ videos: videos, selectedVideo: videos[0] });
        });
    }
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (<div className="app">
            {/*<p>Hello India</p>
            <ZipForm />*/}
            <SearchBar onSearchTermChange={(term) => {this.videoSearch(term)}} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
                onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                videos={this.state.videos}
            />
        </div>);
    }


}

export default App;