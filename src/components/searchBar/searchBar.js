// eslint-disable-next-line jsx-a11y/anchor-is-valid
import React, {Component} from 'react';
import './searchBar.css'

//yaaşm döngüsü fonksiyonları oluşturuldu
class SearchBar extends Component {
    state = {
        search: ''
    };

    inputChanged(event) {
        this.setState({
            search: event.target.value
        })
    }

    searchImage() {
        this.props.onSearchImage(this.state.search);
    }

    render() {
        return (
            <div className={'search-bar-container ui input'}>
                <input type="text" placeholder={'Ara...'}
                       value={this.state.search}
                       onChange={this.inputChanged.bind(this)}
                       //entera basarak arama yapmak için onKeyPress
                       onKeyPress={(e) => {
                           if (e.key === 'Enter') {
                               this.searchImage();
                           }
                       }}
                />
                <button className="ui icon button"
                        //butonu tıklayarak arama yapmak için onClick
                        onClick={this.searchImage}>
                    <i className="search icon"></i>
                </button>
            </div>
        )
    }
}

export default SearchBar;