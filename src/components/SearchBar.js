import React from "react";
import { Form , Button} from "react-bootstrap";
import LoadingIndicator from "./indicators/LoadingIndicator";

/*
    this.props.onSearch gets called onSubmit of the form
*/
export default class SearchBar extends React.Component{
    handleChange = (event) => {
        this.props.setSearchTerm(event.target.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch();
    }
    render(){
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group >
                    <Form.Label>Author name</Form.Label>
                    <Form.Control onChange={this.handleChange} type="search" value={this.props.value} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Search
                    <LoadingIndicator isLoading={this.props.isLoading} />
                </Button>
            </Form>
        );
    }
}