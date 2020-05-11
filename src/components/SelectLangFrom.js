import React from 'react'

class SelectLangFrom extends React.Component {
    state = { langFrom: null, language: "" }

    langFromChange = (event) => {
        event.preventDefault()
        this.props.langFromChange(this.state.langFrom)
    }

    render() {
        return (
            <div className="ui compact menu">
                <div className="ui simple dropdown item">
                    Język: {this.state.language}
                    <i className="dropdown icon"></i>
                    <div className="menu" onClick={this.langFromChange}>
                        <div className="item" onClick={() => this.setState({ langFrom: "en", language: "Angielski" })}>Angielski</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "bg", language: "Bułgarski" })} >Bułgarski</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "hr", language: "Chorwacki" })} >Chorwacki</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "cs", language: "Czeski" })} >Czeski</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "da", language: "Duński" })} >Duński</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "et", language: "Estoński" })} >Estoński</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "fi", language: "Fiński" })} >Fiński</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "fr", language: "Francuski" })} >Francuski</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "el", language: "Grecki" })} >Grecki</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "es", language: "Hiszpański" })} >Hiszpański</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "nl", language: "Holenderski" })} >Holenderski</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "ga", language: "Irlandski" })} >Irlandski</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "lt", language: "Litewski" })} >Litewski</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "lv", language: "Łotewski" })} >Łotewski</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "mt", language: "Maltański" })} >Maltański</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "de", language: "Niemiecki" })} >Niemiecki</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "pl", language: "Polski" })} >Polski</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "pt", language: "Portugalski" })} >Portugalski</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "ro", language: "Rumuński" })} >Rumuński</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "sk", language: "Słowacki" })} >Słowacki</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "sl", language: "Słoweński" })} >Słoweński</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "sv", language: "Szwedzki" })} >Szwedzki</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "hu", language: "Węgierski" })} >Węgierski</div>
                        <div className="item" onClick={() => this.setState({ langFrom: "it", language: "Włoski" })} >Włoski</div>
                    </div>
                </div>
            </div>















            /*
            <select className="ui search dropdown" onChange={this.langFromChange}>
                <option value="">Z jakiego języka</option>
                <option value="en">Angielski</option>
                <option value="bg">Bułgarski</option>
                <option value="hr">Chorwacki</option>
                <option value="cs">Czeski</option>
                <option value="da">Duński</option>
                <option value="et">Estoński</option>
                <option value="fi">Fiński</option>
                <option value="fr">Francuski</option>
                <option value="el">Grecki</option>
                <option value="es">Hiszpański</option>
                <option value="nl">Holenderski</option>
                <option value="ga">Irlandski</option>
                <option value="lt">Litewski</option>
                <option value="lv">Łotewski</option>
                <option value="mt">Maltański</option>
                <option value="de">Niemiecki</option>
                <option value="pl">Polski</option>
                <option value="pt">Portugalski</option>
                <option value="ro">Rumuński</option>
                <option value="sk">Słowacki</option>
                <option value="sl">Słoweński</option>
                <option value="sv">Szwedzki</option>
                <option value="hu">Węgierski</option>
                <option value="it">Włoski</option>
            </select>*/
        )
    }
}

export default SelectLangFrom