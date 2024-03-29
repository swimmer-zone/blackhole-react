import React from 'react';
import { Hole, Music, Stars } from '../Components';
import '../assets/app.scss';

const App = () => {
	return (
		<>
			<Stars />
			<Hole />

			<h1>Black Hole</h1>
			<article>
				<p>Welcome to a new experience, book us now!</p>
				<p>Listen to our latest track below:</p>
				<Music />

				<p>Our SoundCloud:</p>
				<a href="https://soundcloud.com/black-hole-space" title="SoundCloud">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
						<path d="M55.748 32.138c-1.13 0-2.209 0.22-3.191 0.616-0.657-7.147-6.893-12.754-14.5-12.754-1.862 0-3.668 0.352-5.27 0.948-0.623 0.231-0.786 0.47-0.786 0.932v25.17c0 0.485 0.39 0.89 0.883 0.937 0.021 0.002 22.721 0.013 22.868 0.013 4.556 0 8.249-3.551 8.249-7.931s-3.696-7.931-8.252-7.931zM25 48h2l1-14.014-1-13.986h-2l-1 13.986zM19 48h-2l-1-10.172 1-9.828h2l1 10zM9 48h2l1-8-1-8h-2l-1 8zM1 44h2l1-4-1-4h-2l-1 4z"></path>
					</svg>
				</a>

				<h2>Leave a note</h2>
				<p>Feed the black hole! Send a message to <a href="mailto:info@blackhole.voyage">info@blackhole.voyage</a> to contact us.</p>
			</article>
		</>
	);
}

export default App;
