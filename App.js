import React from "react";
import SearchBar from "./SearchBar";
import RandomArticleGenerator from "./RandomArticleGenerator";
import ResultsList from "./ResultsList";
import wikipedia from "../apis/wikipedia";

class App extends React.Component{
    state = {results:[]};
    
    getTermFromChild = async (query) =>   {
        const response = await wikipedia.get("", {
            params:{
                callback: "?",
                action: "query",
	            format: "json",
                titles: query,
                prop: "extracts"
            }
        });
        console.log(response);
        //this.setState({results: response});
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.getTermFromChild} getData={this.requestAPIData}/>
                <RandomArticleGenerator/>
                <ResultsList apiResponse={this.getTermFromChild.response}/>
            </div>
        );
    }
}

export default App;