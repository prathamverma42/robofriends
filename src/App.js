import React,{Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';


class App extends Component {
    constructor(){
        super(); 
        this.state= {
            robots: robots,
            searchfield:''
        }    
    }
    onSearchChange(event){
        console.log(event);
    }
    render(){

        return (
            <div>
                <h1>Robo friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={this.state.robots}/>
            </div>
        );    
    }
}

export default App;