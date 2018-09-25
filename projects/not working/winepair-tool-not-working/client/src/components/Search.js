import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getFood, getWine, filterResults } from '../redux'
import Result from './Result'

class Search extends Component {
    constructor(){
        super()
        this.state = {
            itemName: '',
            filteredResults: []
        }
    }

    componentDidMount() {
        this.props.getWine()
        this.props.getFood()
    }

    handleChange = e => {
        this.setState({
            itemName: e.target.value,
        })
    }

    handleClick = e => {
        e.preventDefault()
        this.props.filterResults(this.state.itemName)
    }
        


    render() {
        const mappedResults = this.props.filteredResults.map(result => <Result result={result}/>)
        // console.log(this.props)
        return (
            <div>
                <div className="search">
                    <input type='text' placeholder="Search food/wine" name="search" value={this.state.itemName} onChange={this.handleChange}></input>
                    <i class="fas fa-search" onClick={this.handleClick}></i> 
                </div>
                <div className="results">

                    {mappedResults}
                </div>
            </div>
        );
    }
}

export default connect(state => state, {getFood, getWine, filterResults})(Search)