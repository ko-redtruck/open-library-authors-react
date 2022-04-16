import React from "react";
import { Col, Row, Button, Container } from "react-bootstrap";

import Book from "./Book";
import ErrorMessage from "./indicators/ErrorMessage";
import LoadingIndicator from "./indicators/LoadingIndicator";
import Avatar from "./pictures/Avatar";

/*
Show basic author information and fetch their books on demand
*/
export default class Author extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isLoading : false,
            error : null,
            works : []
        }
    }

    loadWorks = async () => {
        this.setState({isLoading : true});
        try{
            const response = await fetch(`https://openlibrary.org/authors/${this.props.id}/works.json`);
            const works = await response.json();
            if(works.error){
                throw new Error(works.error);
            }
            if(works.entries.length === 0){
                throw new Error("No works found");
            }
            this.setState({works : works.entries, error : null});
        }
        catch(e){
            this.setState({error : e});
        }
        this.setState({isLoading : false});
    }

    render(){
        return (
            <>
                <Row>
                    <Col>
                        <Avatar olid={this.props.id}/>
                    </Col>
                    <Col>
                        <h2>{this.props.name}</h2>
                        <small>{this.props.birth_date}</small>
                        <p>{this.props.bio}</p>

                        {(this.state.works.length === 0) &&
                            <Button onClick={this.loadWorks}>
                                Show works
                                <LoadingIndicator isLoading={this.state.isLoading}/>
                            </Button>
                        }
                        <ErrorMessage error={this.state.error}/>
                        
                        
                    </Col>
                </Row>
                <Container>
                    {this.state.works.map((book)=>{
                            return (
                                <Book key={book.key} {...book} />
                            );
                        })}
                </Container>
            </>
        );
    }
}