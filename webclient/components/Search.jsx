import React from "react";
import ReactDOM from "react-dom";
import Request from "superagent";
import { Container, Row, Col } from "react-grid-system";
import { ScreenClassRender } from "react-grid-system";
import Card from "./Card.jsx";
import { Link } from "react-router";

const input_style = { padding: "10px", width: "60%", marginLeft: "30px" };
const btn_style = { padding: "10px", width: "15%", marginLeft: "10px" };

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", status: "", flag: false, repos: [] };
  }

  handleChange = e => {
    console.log(e);
    this.setState({ query: e.target.value });
  };

  updateSearch = () => {
    if (this.state.query === "") {
      this.setState({
        status: "Your Query is empty, please enter something",
        flag: false
      });
    } else {
      this.setState({ status: "" });
      this.search();
    }
  };

  search = () => {
    let url = `http://api.github.com/search/repositories?q=${this.state.query}`;
    let that = this;
    Request.get(url).end(function(err, res) {
      if (err) {
        that.setState({
          status: "Something went wrong, please try again !!",
          flag: false
        });
      } else {
        if (res.body.total_count === 0) {
          that.setState({
            status: "Empty result, please change keywords and try again !",
            flag: false
          });
        } else {
          that.setState({
            status: "",
            flag: true,
            repos: res.body.items
          });
        }
      }
    });
  };

  getSortOrderUser = (prop, prop1) => {
    return function(a, b) {
      if (a[prop][prop1] > b[prop][prop1]) {
        return 1;
      } else if (a[prop][prop1] < b[prop][prop1]) {
        return -1;
      }
      return 0;
    };
  };

  getSortOrderName = prop => {
    return function(a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    };
  };

  getSortOrderValue = prop => {
    return function(a, b) {
      if (a[prop] > b[prop]) {
        return -1;
      } else if (a[prop] < b[prop]) {
        return 1;
      }
      return 0;
    };
  };
  gitSort = e => {
    const val = e.currentTarget.dataset.id;
    const items = this.state.repos;
    if (
      val === "forks_count" ||
      val === "watchers_count" ||
      val === "stargazers_count"
    ) {
      console.log("divyanhu check", typeof items[0]["forks_count"]);
      items.sort(this.getSortOrderValue(val));
      this.setState({ repos: items });
    } else if (val === "name") {
      items.sort(this.getSortOrderName(val));
      this.setState({ repos: items });
    } else {
      items.sort(this.getSortOrderUser("owner", "login"));
      this.setState({ repos: items });
    }
    console.log(items);
  };

  render() {
    var repos = [];
    if (this.state.repos.length > 0) {
      repos = this.state.repos.map((tile, i) => (
        <Link>
          <Card key={i} repoDetails={tile} />
        </Link>
      ));
    }

    const no_drop_down = [
      <ul className="navbar-nav">
        <a
          className="nav-link dropdown-toggle disabled"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sort
        </a>
      </ul>
    ];
    const drop_down = [];
    drop_down.push(
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sort
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a
              className="dropdown-item"
              href="#"
              key="stargazers_count"
              data-id="stargazers_count"
              onClick={this.gitSort.bind(this)}
            >
              Star
            </a>
            <a
              className="dropdown-item"
              href="#"
              key="watchers_count"
              data-id="watchers_count"
              onClick={this.gitSort.bind(this)}
            >
              Watch
            </a>
            <a
              className="dropdown-item"
              href="#"
              key="forks_count"
              data-id="forks_count"
              onClick={this.gitSort.bind(this)}
            >
              Fork
            </a>
            <a
              className="dropdown-item"
              href="#"
              key="name"
              data-id="name"
              onClick={this.gitSort.bind(this)}
            >
              Name
            </a>
            <a
              className="dropdown-item"
              href="#"
              key="user"
              data-id="user"
              onClick={this.gitSort.bind(this)}
            >
              User
            </a>
          </div>
        </li>
      </ul>
    );
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <a className="navbar-brand" href="#">
            <img
              src="./images/github.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            Github Repo Search
          </a>

          {this.state.flag ? drop_down : no_drop_down}

          <input
            className="form-control"
            type="text"
            placeholder="Search"
            style={input_style}
            onChange={this.handleChange.bind(this)}
          />
          <button
            className="btn btn-success"
            type="submit"
            style={btn_style}
            onClick={this.updateSearch.bind(this)}
          >
            Search
          </button>
        </nav>

        <div className="container">
          <div style={{ height: "40px" }}>
            <h3>{this.state.status}</h3>
          </div>
          <div className="row">{repos}</div>
        </div>
      </div>
    );
  }
}

export default Search;
