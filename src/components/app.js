import React, {Component} from 'react';
import SearchBar from './searchBar/searchBar';
import ImageList from "./image/imageList";
import axios from 'axios'
import './app.css';

class App extends Component {

    state = {
        images: []
    };

    //isteği göndereceğimiz bir fonksiyon
    onSearchImage = async (search) => {
        const result = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: search
            },
            headers: {
                Authorization: 'Client-ID 6cf75965284cf24ac346df043abcdbf1d05889676259ef3e8cfa2881a1125b65'
            }
        });
        this.setState({
            images: result.data.results
        });
    };
    //burada bitiyor fonksiyon

    render() {
        return (
            <div className={'app-container'}>
                <SearchBar onSearchImage={this.onSearchImage}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;