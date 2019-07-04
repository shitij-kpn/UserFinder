import React,{Component} from "react";
import { connect } from 'react-redux';
import { setSearchField , requestRobots } from './actions';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './scroll';
import './App.css';


const mapStateToProps = (state) => {
    return {
        searchField : state.searchRobots.searchField,
        robots : state.requestRobots.robots,
        error : state.requestRobots.error,
        isPending : state.requestRobots.isPending
    }
}

const mapDispatechToProps = (dispatch) => {
    return {
        OnSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        OnRequestRobots : () => dispatch(requestRobots())
    }
}

class App extends Component{

    componentDidMount(){
        this.props.OnRequestRobots();
    }
    
    render(){
        const {searchField, OnSearchChange , robots } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
        })
        return(
            <div className="tc">
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange = {OnSearchChange}/>
                <Scroll>
                    <CardList robots = {filteredRobots} />
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps , mapDispatechToProps)(App);