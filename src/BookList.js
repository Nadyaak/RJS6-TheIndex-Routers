import React, { Component } from "react";
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };
  filterbooks = query => {
    query = query.toLowerCase();
    let filteredbooks = this.props.books.filter(book =>
      `${book.title} ${book.color}`.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredbooks });
  };
  booksByColor = bookColor => {
    if (bookColor) {
      let filtredColor = this.props.books.filter(
        book => book.color === bookColor
      );
      this.setState({ filteredBooks: filtredColor });
    } else {
      this.setState({ filteredBooks: this.props.books });
    }
  };

  componentDidUpdate = prevState => {
    if (prevState.match.params.color !== this.props.match.params.color) {
      this.booksByColor(this.props.match.params.color);
    }
  };

  render() {
    console.log(this.state.filteredBooks);
    return (
      <div>
        <h3>Books</h3>
        <SearchBar onChange={this.filterbooks} />
        <BookTable books={this.state.filteredBooks} />
      </div>
    );
  }
}

export default BookList;
