import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/googleBooksAPI";
import Jumbotron from "../components/Jumbotron";
import BookInfo from "../components/BookInfo";
import googleBooksAPI from "../utils/googleBooksAPI";
export class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    };

    handleClickDelete = id => {
        console.log(id);
        googleBooksAPI
            .deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>My books</Jumbotron>
                    </Col>
                    {this.state.books.map(book => {
                        const {
                            _id,
                            authors,
                            description,
                            image,
                            title
                        } = book;
                        return (
                            <Col size="sm-12 md-6">
                                <BookInfo
                                    authors={authors}
                                    description={description}
                                    image={image}
                                    title={title}
                                    id={_id}
                                    key={_id}
                                    buttonType="btn btn-md btn-danger button-style"
                                    buttonName="Delete"
                                    handleClick={() => {
                                        this.handleClickDelete(_id);
                                    }}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        );
    }
}

export default Saved;
