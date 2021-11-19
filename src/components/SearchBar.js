import React, { Component } from 'react'

class SearchBar extends Component {
    state = {text:""}
    onTextChange = (event)=>{
        
        this.setState({
            text:event.target.value
        });
        
    }
    onFormSubmit = (event)=>{
        event.preventDefault();
        this.props.onFormSubmitted(this.state.text);
    }
    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="ui field">
                        Enter a seach term:
                        <input type="text" value={this.state.text} onChange={this.onTextChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
