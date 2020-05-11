import React from "react"
import Input from "./Input"
import Output from "./Output"
import SelectLangFrom from "./SelectLangFrom"
import SelectLangTo from "./SelectLangTo"
import mymemory from "../apis/mymemory"

class App extends React.Component {
<<<<<<< HEAD
    state = { result: "", lf:"", lt:""}
=======
    state = { result: ""}
>>>>>>> 84c25e1e364097d84c69a97a2d5b54bb638253ec

    onLangChangeFrom =  langFrom =>{
        this.setState({
            lf: langFrom
        })
    }

<<<<<<< HEAD
    onLangChangeTo =  langTo =>{
        this.setState({
            lt: langTo
        })
    }
=======
>>>>>>> 84c25e1e364097d84c69a97a2d5b54bb638253ec

    onTermSubmit = (term) => {
        mymemory.get("/get?", {
            params:
            {
                q: term,
<<<<<<< HEAD
                langpair: this.state.lf + "|" + this.state.lt,
=======
                langpair: "pl" + "|" + "en",
>>>>>>> 84c25e1e364097d84c69a97a2d5b54bb638253ec
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
<<<<<<< HEAD
                            <SelectLangFrom langFromChange={this.onLangChangeFrom}/>
                            <Input onFormSubmit={this.onTermSubmit} />
                        </div>
                        <div className="eight wide column">
                            <SelectLangTo langToChange={this.onLangChangeTo}/>
=======
                            <SelectLangFrom langFromChange={this.onTermSubmit}/>
                            <Input onFormSubmit={this.onTermSubmit} />
                        </div>
                        <div className="eight wide column">
                            <SelectLangTo />
>>>>>>> 84c25e1e364097d84c69a97a2d5b54bb638253ec
                            <Output result={this.state.result} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App