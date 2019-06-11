import React, { Component } from "react";
import googleBooksAPI from "../utils/googleBooksAPI";
// Components
import DeleteBtn from "../components/DeleteBtn";
import AddBtn from "../components/AddBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import BookInfo from "../components/BookInfo";
export class Books extends Component {
    state = {
        result: [],
        search: ""
    };

    searchBook = query => {
        googleBooksAPI
            .search(query)
            .then(res => this.setState({ result: res.data.items }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Search and save your favorite books</h1>
                        </Jumbotron>
                    </Col>
                    <Col size="md-6">
                        <form>
                            <Input
                                name="search"
                                placeholder="search for book..."
                                handleInputChange={this.handleInputChange}
                            />
                            <FormBtn handleFormSubmit={this.handleFormSubmit}>
                                Search
                            </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6">
                        {this.state.result.map(book => (
                            <BookInfo title={book.volumeInfo.title} author={book.volumeInfo.authors} src={book.volumeInfo.imageLinks.thumbnail} />
                        ))}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Books;
