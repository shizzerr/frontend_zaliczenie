import React from "react"
import Input from "./Input"
import Output from "./Output"
import SelectLangFrom from "./SelectLangFrom"
import SelectLangTo from "./SelectLangTo"
import mymemory from "../apis/mymemory"

class App extends React.Component {
    state = { result: ""}



    onTermSubmit = (term) => {
        mymemory.get("/get?", {
            params:
            {
                q: term,
                langpair: "pl" + "|" + "en",
                of: "JSON",
            }
        })
            .then(response => {
                this.setState
                    ({
                        result: JSON.stringify(response.data.responseData.translatedText),
                    })
            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div className="ui container">
                <h1 className="ui header">
                    <center>Easy Translator</center>
                </h1>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eight wide column">
                            <SelectLangFrom langFromChange={this.onTermSubmit}/>
                            <Input onFormSubmit={this.onTermSubmit} />
                        </div>
                        <div className="eight wide column">
                            <SelectLangTo />
                            <Output result={this.state.result} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default App