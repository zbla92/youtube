import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../components/apis/youtube';

class App extends React.Component{
    onTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term
            }
        })
    }


    render(){
        return(
            <div className="ui container">
                <div><SearchBar onFormSubmit={this.onTermSubmit} /></div>
            </div>
        );
    }
}

export default App;