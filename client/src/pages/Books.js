import React, { Component } from "react";
import googleBooksAPI from "../utils/googleBooksAPI";
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

    handleAddBook = props => {
        const { authors, description, image, link, title } = props;
        googleBooksAPI.saveBook({
            authors,
            description,
            image,
            link,
            title
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
                                const { id, selfLink } = book;
                                const {
                                    title,
                                    authors,
                                    imageLinks,
                                    description
                                } = book.volumeInfo;
                                return (
                                    <BookInfo
                                        authors={authors}
                                        description={description}
                                        image={imageLinks.thumbnail}
                                        link={selfLink}
                                        title={title}
                                        id={id}
                                        key={id}
                                        handleAddBook={e => {
                                            e.preventDefault();
                                            this.handleAddBook({
                                                title,
                                                authors: authors[0],
                                                image: imageLinks.thumbnail,
                                                description
                                            });
                                        }}
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
