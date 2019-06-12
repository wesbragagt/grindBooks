import React, { Component } from "react";
import googleBooksAPI from "../utils/googleBooksAPI";
// Components
// import DeleteBtn from "../components/DeleteBtn";
// import AddBtn from "../components/AddBtn";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import BookInfo from "../components/BookInfo";

import "./style.css";
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

    handleAddBook = event => {
        event.preventDefault();
        const { id, title, authors, description } = event.target;
        console.log(event.target);
        googleBooksAPI.saveBook({
            id,
            title,
            authors,
            description
        });
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
                    <Col size="md-12">
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

                    <Container>
                        <Row>
                            {this.state.result.map(book => {
                                const { id } = book;
                                const {
                                    title,
                                    authors,
                                    imageLinks,
                                    description
                                } = book.volumeInfo;
                                return (
                                    <BookInfo
                                        id={id}
                                        key={id}
                                        title={title}
                                        author={authors}
                                        src={imageLinks.thumbnail}
                                        description={description}
                                        onClick={this.handleAddBook}
                                        bookInfo={book}
                                    />
                                );
                            })}
                        </Row>
                    </Container>
                </Row>
            </Container>
        );
    }
}

export default Books;
