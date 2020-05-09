import React from "react"


class Input extends React.Component {
    state = { inputValue: "" }

    onInputChange = (event) => {
        this.setState({ inputValue: event.target.value })
    }
    getTranslation = (event) => {
        event.preventDefault()
        this.props.getTranslation(this.state.inputValue)
    }


    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <textarea 
                        type="text" 
                        placeholder="Wprowadź tekst" 
                        value={this.state.inputValue} 
                        onChange={this.onInputChange} />

                    </div>
                </form>
            </div>
        )
    }
}

export default Input