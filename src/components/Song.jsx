import React from 'react'
import { connect } from 'react-redux'
import {
  addSongToSelectedAction,
  addToLikedSongsAction,
  removeFromLikedSongsAction
} from '../redux/actions'

const mapStateToProps = (state) => ({
  likesList: state.like.heart
})

const mapDispatchToProps = (dispatch) => ({
  addSongToSelected: (songSelected) => {
    dispatch(addSongToSelectedAction(songSelected))
  },
  addToLikedSongs: (song) => {
    dispatch(addToLikedSongsAction(song))
  },
  removeFromLikesSongs: (song) => {
    dispatch(removeFromLikedSongsAction(song))
  }
})

const Song = ({
  track,
  addSongToSelected,
  addToLikedSongs,
  likesList,
  removeFromLikesSongs,
  index
}) => {
  // const foundLike = likesList.find((song, index) => song.id === track.id)
  return (
    <div className="py-3 trackHover">
      <span
        className="card-title trackHover px-3"
        style={{ color: 'white' }}
        onClick={() => {
          addSongToSelected(track)
        }}
      >
        {track.title}
        <span className="d-flex justify-content-end">
          {likesList.find((song, index) => song.id === track.id) ? (
            <span>
              {console.log('remove like')}
              <i
                onClick={() => removeFromLikesSongs(index)}
                className="bi bi-heart-fill"
              ></i>
            </span>
          ) : (
            <span>
              {console.log('add like')}
              <i onClick={() => addToLikedSongs(track)} className="bi bi-heart"></i>
            </span>
          )}
        </span>
      </span>
      <small className="duration" style={{ color: 'white' }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? '0' + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
      </small>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Song)
