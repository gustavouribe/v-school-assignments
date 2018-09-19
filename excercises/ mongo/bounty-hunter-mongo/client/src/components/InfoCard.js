import React, { Component } from 'react';
import EditForm from './EditForm'

import {connect} from 'react-redux'
import {deleteBounty} from '../redux'

class InfoCard extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    handleDelete = e =>{
        e.preventDefault()
        this.props.deleteBounty(this.props.person._id)
      }

    handleEdit = e =>{
        e.preventDefault()
        this.setState(prevState => {
            return {
                open: !prevState.open
            }
            
        })    
    }




    render() {
        return (
            <div key={this.props.person._id}>
                            <img className="image" src={this.props.person.image} alt="img" />
                            {this.props.person.firstName}
                            {this.props.person.lastName}
                            {this.props.person.bountyAmount}
                            {this.props.person.type}
                            {this.props.person.living}
                            

                            <button onClick={this.handleDelete}>delete</button>
                            <button onClick={this.handleEdit}>edit</button>


                            {this.state.open
                            ? <EditForm editPerson={this.props.person}/>
                            : <div></div>}
            </div>
        );
    }
}

export default connect(state => state, {deleteBounty})(InfoCard)