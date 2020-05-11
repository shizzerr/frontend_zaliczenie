import React from "react"

class Output extends React.Component {
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <input
                            placeholder="Tłumaczenie"
                            type="text"
                            disabled={true}
                            value={this.props.result.replace(/"/g,'')}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Output