import React from "react"
import Input from "./Input"
import Output from "./Output"
import SelectLangFrom from "./SelectLangFrom"
import SelectLangTo from "./SelectLangTo"
import mymemory from "../apis/mymemory"
import Axios from "axios"



class App extends React.Component {
    state = { result: null }


    getTranslation = (inputValue) => {
        mymemory.get("/get?", {
            params:
            {
                q: "a",
                langpair: "pl" + "|" + "en",
                of: "JSON",
            }
        })
            .then(res => { this.setState({ result: res.data })})
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div className="ui container">
                <h1 className="ui header">
                    <center>
                        Easy Translator
                </center>
                </h1>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eight wide column">
                            <SelectLangFrom />
                            <Input />
                        </div>
                        <div className="eight wide column">
                            <SelectLangTo />
                            <Output />
                        </div>
                    </div>
                    <div>
                        <button className="ui button" onClick={this.getTranslation}>Tłumacz</button>
                    </div>
                </div>
            </div>
        )
    }

}
export default App