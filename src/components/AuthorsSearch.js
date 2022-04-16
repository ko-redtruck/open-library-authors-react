import React from "react";

import SearchBar from "./SearchBar";
import Author from "./Author";
import ErrorMessage from "./indicators/ErrorMessage";

export default class AuthorsSearch extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            authorName : 'J. R. R. Tolkien',
            authors : [],
            isLoading : false,
            error : null
        };
    }

    setAuthorName = (name) => {
        this.setState({authorName : name});
    }

    searchForAuthors = async () => {
        this.setState({isLoading : true});

        try{
            const response = await fetch(`https://openlibrary.org/search/authors.json?q=${this.state.authorName}`);
            const authors = await response.json();

            if(authors.numFound === 0){
                throw new Error("No authors found");
            }

            this.setState({
                authors : authors.docs,
                error : null
            });
        }
        catch(e){
            this.setState({authors : [], error : e});
        }
        this.setState({isLoading : false});
    }

    render(){
        return (
            <>
                <SearchBar value={this.state.authorName} onSearch={this.searchForAuthors} setSearchTerm={this.setAuthorName} isLoading={this.state.isLoading}/>
                
                <ErrorMessage error={this.state.error}/>
                {this.state.authors.map((author)=>{
                    return <Author id={author.key} key={author.key} {...author}/>
                })}
            </>
        );
    }
}