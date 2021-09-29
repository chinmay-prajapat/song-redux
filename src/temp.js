import React, { Component } from "react";
import { connect } from "react-redux";
import songSelect from "../action";
class SongList extends Component {
  renderedList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => {
                this.props.songSelect(song);
              }}
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
    return <div className="ui divided list">{this.renderedList()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    songs: state.songs,
    select: state.selectedSong,
  };
};
export default connect(mapStateToProps, { songSelect })(SongList);
