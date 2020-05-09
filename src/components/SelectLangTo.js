import React from 'react'

class SelectLangTo extends React.Component {
    state = { languageTo: null }
    languageToSet = (event) => {
        this.setState({ languageTo: event.target.value })
    }
    render() {
        return (
            <select className="ui search dropdown" onChange={this.languageToSet}>
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
        )
    }
}

export default SelectLangTo