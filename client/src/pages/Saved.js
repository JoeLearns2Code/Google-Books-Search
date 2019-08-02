//Import React.js library; Component allows for the creation of a class
import React, { Component } from "react";
//Import various JSX components for page structure and styling.
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
//Import API component for routing
import API from "../utils/API";
//Import bootstrap elements
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

//Class allows for state, methods in the component--in addition to rendering JSX elements
//state begins with an empty books array
class Saved extends Component {
  state = {
    books: []
  };

  //Set state immediately upon page load with componentDidMount, calls the getSaveBooks function.  This should allow any books from the saved books database to populate the array value in the books state
  componentDidMount() {
    this.getSavedBooks();
  }

  //Function makes an API call to the saved books database
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  //Function to delete a saved book by making a DELETE request to the saved books server.  Then perform a new GET request to display the new set of books
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  //render to the index.html page
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {/* .map function takes the data from the GET request and places it in an array to be displayed as Book elements */}
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

//export for use in App.js
export default Saved;
