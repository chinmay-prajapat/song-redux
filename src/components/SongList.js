import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../action";
class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              {!this.props.select.title
                ? "Select"
                : song.title === this.props.select.title
                ? "Selected"
                : "Select"}
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()} </div>;
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs,
    select: state.selectedSong,
  };
};
export default connect(mapStateToProps, {
  selectSong,
})(SongList);
