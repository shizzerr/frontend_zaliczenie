import React from "react"

class Output extends React.Component {
<<<<<<< HEAD
=======
    
    
    
    
    
    
    
    
    
>>>>>>> 84c25e1e364097d84c69a97a2d5b54bb638253ec
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <input
                            placeholder="Tłumaczenie"
                            type="text"
                            disabled={true}
<<<<<<< HEAD
                            value={this.props.result.replace(/"/g,'')}
=======
                            value={this.props.result}
>>>>>>> 84c25e1e364097d84c69a97a2d5b54bb638253ec
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Output