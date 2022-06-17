import React from "react";
import Song from "./Song";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getSongsAction } from "../redux/actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getSongs: (songs) => {
    dispatch(getSongsAction(songs));
  },
});

class Album extends React.Component {
  state = {
    album: {},
    songs: [],
  };

  componentDidMount = async (props) => {
    console.log(this.props.match, "match");
    console.log("Album", this.props.album);
    console.log("location", this.props.location);
    this.props.getSongs(this.props.match, this.props.location);

    /*    let albumId = this.props.match.params.id;

    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
    });

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId,
        {
          method: "GET",
          headers,
        }
      );

      if (response.ok) {
        let album = await response.json();
        this.setState({
          album,
          songs: album.tracks.data,
        });


      }
    } catch (exception) {
      console.log(exception);
    } */
  };

  render() {
    return (
      <div className="col-12 col-md-9 offset-md-3 mainPage">
        <Row className="mb-3">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <div>TRENDING</div>
            <div>PODCAST</div>
            <div>MOODS AND GENRES</div>
            <div>NEW RELEASES</div>
            <div>DISCOVER</div>
          </div>
        </Row>
        <Row>
          {this.state.album.cover && (
            <div className="col-md-3 pt-5 text-center" id="img-container">
              <img
                src={this.state.album.cover}
                className="card-img img-fluid"
                alt="Album"
              />
              <div className="mt-4 text-center">
                <p className="album-title">{this.state.album.title}</p>
              </div>
              <div className="text-center">
                <p className="artist-name">
                  {this.state.album.artist ? this.state.album.artist.name : ""}
                </p>
              </div>
              <div className="mt-4 text-center">
                <button id="btnPlay" className="btn btn-success" type="button">
                  Play
                </button>
              </div>
            </div>
          )}
          <div className="col-md-8 p-5">
            <Row>
              <div className="col-md-10 mb-5" id="trackList">
                {this.state.songs.map((song, index) => (
                  <Song track={song} key={song.id} index={index} />
                ))}
              </div>
            </Row>
          </div>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
