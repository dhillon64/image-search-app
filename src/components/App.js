import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={images:[]};
        this.onSearchSubmit=this.onSearchSubmit.bind(this);
    }

    async onSearchSubmit(term){
        const response=await axios.get('https://api.unsplash.com/search/photos',{
            params:{ query:term },
            headers:{
                Authorization: 'Client-ID m-H3SXitSihhF5YzApAHxTUMvO6hrjxAX5qs4Gx_4GY'
            }
        })
        this.setState({images:response.data.results});
        console.log(response);
    }


    render(){
    return (
    <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
    </div>
    )
    }
};

export default App;