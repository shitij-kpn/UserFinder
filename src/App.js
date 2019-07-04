import React,{Component} from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './scroll';
import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots : [],
            searchfield: ''
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => this.setState({ robots : users }));         
    }

    OnSearchChange = (event) => {
        this.setState({ searchfield : event.target.value});
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        return(
            <div className="tc">
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange = {this.OnSearchChange}/>
                <Scroll>
                    <CardList robots = {filteredRobots} />
                </Scroll>
            </div>
        );
    }
}

export default App;