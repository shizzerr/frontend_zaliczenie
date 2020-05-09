import React from "react"

class Output extends React.Component {
    state = { result: null }
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <textarea placeholder="Tłumaczenie" type="text" defaultValue={this.state.result}></textarea>
                    </div>
                </form>
            </div>
        )
    }
}

export default Output