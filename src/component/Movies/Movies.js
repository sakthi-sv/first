import React, { Component } from "react";
import axios from "axios";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      moviesList: [],
      limit: 10,
      page: 1,
      isLoading: true,
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.setState({ moviesList: [] });
    const url = `https://yts.mx/api/v2/list_movies.json?limit=${this.state.limit}&&page=${this.state.page}`;
    axios
      .get(url)
      .then((item) => {
        this.setState({
          isLoading: false,
          moviesList: item.data.data.movies,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  }
  render() {
    const { moviesList } = this.state;
    return (
      <div>
        <div>Movies</div>
        <div>
          <table>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Genre</th>
              <th>year</th>
              <th>Rating</th>
              <th>Language</th>
            </tr>
            {moviesList.map((element, index) => (
              <tr>
                <td>{index + 1 + (this.state.page - 1) * 10}</td>
                <td>{element.title}</td>
                <td>
                  {element.genres.map(
                    (element, index) => (index > 0 ? ", " : "") + element
                  )}
                </td>
                <td>{element.year}</td>
                <td>{element.rating}</td>
                <td>{element.language}</td>
              </tr>
            ))}
          </table>
          {this.state.moviesList.length > 0 && (
            <div>
              {this.state.page === 1 || (
                <button
                  className="btn"
                  onClick={() => {
                    this.setState({ page: this.state.page - 1 });
                    this.fetchData();
                  }}
                >
                  prev
                </button>
              )}
              <button
                disabled={this.state.isLoading}
                className="btn"
                onClick={() => {
                  this.setState({ page: this.state.page + 1 });
                  this.fetchData();
                }}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
