import React, { Component } from "react";
import Header from "../../common/Header/Header";
import moviesData from "../../common/MoviesData";
import SingleLineImageList from "./SingleLineImageList";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesData: moviesData,
    };
  }
  
  render() {
    return (
        
      <div>
        <Header />
        <div className="headerBar">
          <span className="headerText">Upcoming Movies</span>
        </div>
        <SingleLineImageList moviesData={this.state.moviesData} />

        <div className="flex-container">
          <div className="left">
            <ImageList cols={4} rowHeight={350}>
              {this.state.moviesData.map((item) => (
                <ImageListItem key={item.id} className="Image-List">
                  <img
                    src={item.poster_url}
                    alt={item.title}
                    className="MoviesPoster"
                  />

                  <ImageListItemBar
                    title={item.title}
                    subtitle={`Release Date : ${new Date(
                      item.release_date
                    ).toDateString()}`}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
          <div className="right">
           
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
