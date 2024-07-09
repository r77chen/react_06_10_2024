import React, { Component } from "react";

export default class PostFetcher extends Component {
  render() {
    return (
      <div>
        <h2>Post Fetcher</h2>
        <div>Current Post Id: {1}</div>
        <div>
          <div>Title: </div>
          <div>UserId: </div>
          <div>Body:</div>
        </div>
        {/* assume the minimum id is 1, max is 100, disable the buttons if needed */}
        <button>Prev</button>
        <button>Next</button>
      </div>
    );
  }
}

// bonus: use input bar to enter the id of the post. if id is out of range, display some error message
