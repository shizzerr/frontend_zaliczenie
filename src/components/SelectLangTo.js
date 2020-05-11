import React from 'react'

class SelectLangTo extends React.Component {
<<<<<<< HEAD
    state = { langTo: null, language: "" }

    langToChange = (event) => {
         event.preventDefault()
         this.props.langToChange(this.state.langTo)
     }

    render() {
        return (
            <div className="ui compact menu">
                <div className="ui simple dropdown item">
                    Na jaki język: {this.state.language}
                    <i className="dropdown icon"></i>
                    <div className="menu" onClick={this.langToChange}>
                        <div className="item" onClick={() => this.setState({ langTo: "en", language: "Angielski" })} >Angielski</div>
                        <div className="item" onClick={() => this.setState({ langTo: "bg", language: "Bułgarski" })} >Bułgarski</div>
                        <div className="item" onClick={() => this.setState({ langTo: "hr", language: "Chorwacki" })} >Chorwacki</div>
                        <div className="item" onClick={() => this.setState({ langTo: "cs", language: "Czeski" })} >Czeski</div>
                        <div className="item" onClick={() => this.setState({ langTo: "da", language: "Duński" })} >Duński</div>
                        <div className="item" onClick={() => this.setState({ langTo: "et", language: "Estoński" })} >Estoński</div>
                        <div className="item" onClick={() => this.setState({ langTo: "fi", language: "Fiński" })} >Fiński</div>
                        <div className="item" onClick={() => this.setState({ langTo: "fr", language: "Francuski" })} >Francuski</div>
                        <div className="item" onClick={() => this.setState({ langTo: "el", language: "Grecki" })} >Grecki</div>
                        <div className="item" onClick={() => this.setState({ langTo: "es", language: "Hiszpański" })} >Hiszpański</div>
                        <div className="item" onClick={() => this.setState({ langTo: "nl", language: "Holenderski" })} >Holenderski</div>
                        <div className="item" onClick={() => this.setState({ langTo: "ga", language: "Irlandski" })} >Irlandski</div>
                        <div className="item" onClick={() => this.setState({ langTo: "lt", language: "Litewski" })} >Litewski</div>
                        <div className="item" onClick={() => this.setState({ langTo: "lv", language: "Łotewski" })} >Łotewski</div>
                        <div className="item" onClick={() => this.setState({ langTo: "mt", language: "Maltański" })} >Maltański</div>
                        <div className="item" onClick={() => this.setState({ langTo: "de", language: "Niemiecki" })} >Niemiecki</div>
                        <div className="item" onClick={() => this.setState({ langTo: "pl", language: "Polski" })} >Polski</div>
                        <div className="item" onClick={() => this.setState({ langTo: "pt", language: "Portugalski" })} >Portugalski</div>
                        <div className="item" onClick={() => this.setState({ langTo: "ro", language: "Rumuński" })} >Rumuński</div>
                        <div className="item" onClick={() => this.setState({ langTo: "sk", language: "Słowacki" })} >Słowacki</div>
                        <div className="item" onClick={() => this.setState({ langTo: "sl", language: "Słoweński" })} >Słoweński</div>
                        <div className="item" onClick={() => this.setState({ langTo: "sv", language: "Szwedzki" })} >Szwedzki</div>
                        <div className="item" onClick={() => this.setState({ langTo: "hu", language: "Węgierski" })} >Węgierski</div>
                        <div className="item" onClick={() => this.setState({ langTo: "it", language: "Włoski" })} >Włoski</div>
                    </div>
                </div>
            </div>





            /*  <select className="ui search dropdown" onChange={this.langToChange}>
                  <option value="">Na jaki język</option>
                  <option value="en" >Angielski</option>
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
=======
    render() {
        return (
            <select className="ui search dropdown">
                <option value="">Na jaki język</option>
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
            </select>
>>>>>>> 84c25e1e364097d84c69a97a2d5b54bb638253ec
        )
    }
}

export default SelectLangTo