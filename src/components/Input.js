import React from "react"


class Input extends React.Component {
    state = { term: "" }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" >
                    <div className="field">
                        <textarea 
                        type="text" 
                        placeholder="Wprowadź tekst" 
                        value={this.state.term} 
                        onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default Input