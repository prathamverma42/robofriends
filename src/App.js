import React,{Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css'
import Scroll from './Scroll.js';


class App extends Component {
    constructor(){
        super(); 
        this.state= {
            robots: robots,
            searchfield:''
        }    
    }
    onSearchChange=(event)=>{
        this.setState({ searchfield : event.target.value});
        
    }
    render(){
        const filteredrobots = this.state.robots.filter (robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        } );
        console.log(filteredrobots);
        return (
            <div>
                <h1 className='f1'>Robo friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredrobots}/>
                </Scroll>
            </div>
        );    
    }
}

export default App;