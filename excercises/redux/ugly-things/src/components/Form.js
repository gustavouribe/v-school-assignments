import React from 'react'

const Form = props => {
    console.log(props)
    return (
        <form  onSubmit={props.handleSubmit} className="formWrapper">
            <input 
                placeholder="URL"
                type="text" 
                name="image" 
                value={props.image} 
                onChange={props.handleChange}/>
            <input 
                placeholder="TITLE"
                type="text" 
                name="title" 
                value={props.title} 
                onChange={props.handleChange}/>
            <input 
                placeholder="DESCRIPTION"
                type="text" 
                name="description" 
                value={props.description} 
                onChange={props.handleChange}/>
            <button className="submitBtn">Submit</button>
        </form>
    )
}

export default Form
export default connect(null, { startTimer, stopTimer, resetTimer })(Form)