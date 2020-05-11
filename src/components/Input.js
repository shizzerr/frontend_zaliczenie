import React from "react"

class Input extends React.Component {
    state = { term: "" }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form" >
                    <div className="field">
<<<<<<< HEAD
                        <input
                            type="text"
                            placeholder="Wprowadź tekst"
                            value={this.state.term}
                            onChange={this.onInputChange} />
=======
                        <input 
                        type="text" 
                        placeholder="Wprowadź tekst" 
                        value={this.state.term} 
                        onChange={this.onInputChange} />
>>>>>>> 84c25e1e364097d84c69a97a2d5b54bb638253ec
                    </div>
                </form>
            </div>
        )
    }
}

export default Input