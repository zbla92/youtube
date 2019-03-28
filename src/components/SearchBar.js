import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    onInputCHange= (event) => {
        this.setState({ term: event.target.value })
    };

    onFOrmSubmit= event => {
        event.preventDefault();

        console.log(this.state.term)
    }


    render() {
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFOrmSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputCHange}    
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;