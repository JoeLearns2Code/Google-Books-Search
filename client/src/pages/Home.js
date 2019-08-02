//Import React.js library; Component allows for the creation of a class
import React, { Component } from "react";
//Import various JSX components for page structure and styling.
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
//Import API component for routing
import API from "../utils/API";
//Import bootstrap elements
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

//Class allows for state, methods in the component--in addition to rendering JSX elements
//state begins with an empty books array, an empty string value for query "q" and a string for the beginning message
class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

  //handleInputChange method allows React.js to detect changes to state value via input in the form, where name refers to the key and value the value that can be affected by user input.
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //function to make an API call to get all books based on input query.  Then add the results to the Books array state.
  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      //If no new books are found based on the query, provide message string
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };
  
  //Event function when the submit button is clicked.  Calls the getBooks function.
  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  //Function to save querried book data in the saved books database & books array on /saved route.  
  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    //Makes a POST request to save the book data as an object to the saved books database
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  //render the querried information on index.html page
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
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              <Form
                //Associate inputChange with form field so it can be detected by the handleInputChange method.  Submit allows for the event to be triggered on enter key.  q is the state that contains the user's entered query.
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {/* Create a Book element for each book result returned */}
              {this.state.books.length ? (
                <List>
                  {/* .map function takes the data from the GET request and places it in an array to be displayed as Book elements */}
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

//export for App.js
export default Home;
