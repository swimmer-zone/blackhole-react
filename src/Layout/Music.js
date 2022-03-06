import React, { useState, useEffect, useRef } from 'react';
import Async from 'react-async';
import tracks from '../json/tracks.json';

const Music = (props) => {
    const player = useRef(null);
    const [ state, setState ] = useState({
        currentTrack: null,
        duration: null
    });

    useEffect(() => {
        if (state.currentTrack) {
            player.current.src = state.currentTrack;
            player.current.play();
        }
    }, [state.currentTrack]);

	return (
		<ul>
            {Object.keys(tracks).map(key => {
				let track = tracks[key];
				let scName = '/data/tracks/' + track.filename + '.mp3';
				return(
					<li key={key}>
						<button 
							data-permalink={track.title}
							onClick={() => setState({currentTrack: scName})}>
							{track.title}
						</button>
					</li>
				)
            })}
						
			<audio ref={player} />
		</ul>
	);
}

export default Music;