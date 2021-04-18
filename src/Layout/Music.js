import React, { useState, useEffect, useRef } from 'react';
import Async from 'react-async';

const Music = (props) => {
    const player = useRef(null);
    const [ state, setState ] = useState({
        currentTrack: null,
        duration: null
    });
	const loadTracks = () =>
		fetch('https://sww.tf/tracks/')
	    .then(res => (res.ok ? res : Promise.reject(res)))
	    .then(res => res.json());

    useEffect(() => {
        if (state.currentTrack) {
            player.current.src = state.currentTrack;
            player.current.play();
        }
    }, [state.currentTrack]);

	return (
		<ul>
			<Async promiseFn={loadTracks}>
				<Async.Loading>Loading...</Async.Loading>
				<Async.Fulfilled>
					{data => {
						let album = data[props.project + '/all'];
						return (
							Object.keys(album.tracks).map(trackKey => {
								let track = album.tracks[trackKey];
						console.log(track)
								return(
									<li key={track.filename}>
										<button 
											data-permalink={track.title}
											onClick={() => setState({currentTrack: track.filename})}>
											{track.title}
										</button>
									</li>
								)
							})
						)
					}}
				</Async.Fulfilled>
				<Async.Rejected>
					{error => `Something went wrong: ${error.message}`}
				</Async.Rejected>
			</Async>
			<audio ref={player} />
		</ul>
	);
}

export default Music;