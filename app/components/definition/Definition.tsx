"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Definition = ({}) => {
	const [definition, setDefinition] = useState({
		word: "",
		phonetic: "",
		partOfSpeech: "",
	});

	useEffect(() => {
		axios
			.get("https://api.dictionaryapi.dev/api/v2/entries/en/computer")
			.then((response) => {
				response.data.map((item) => {
					setDefinition(item);
				});
			})
			.catch((error) => {
				console.log("error: ", error);
			});
	}, []);

	console.log("definition: ", definition);

	return (
		<div>
			<div className="flex justify-center">
				<div>
					<h1>{definition.word}</h1>
					<h3>{definition.phonetic}/</h3>
				</div>

				<button>Play</button>
			</div>

			<div>
				<h2>{}</h2>
			</div>

			<div>
				<h4>Meaning</h4>
				<p>(etc.) A set of keys used to operate a typewriter, computer etc. </p>
				<p>
					A component of many instruments including the piano, organ, and
					harpsichord consisting of usually black and white keys that cause
					different tones to be produced when struck.{" "}
				</p>
				<p>
					A device with keys of a musical keyboard, used to control electronic
					sound-producing devices which may be built into or separate from the
					keyboard device.{" "}
				</p>
			</div>
		</div>
	);
};
export default Definition;

// word: String,
// 		phonetic: String,
// 		phonetics: [
// 			{
// 				text: String,
// 				audio: String,
// 			},
// 			{
// 				text: String,
// 			},
// 		],
// 		origin: String,
// 		meanings: [
// 			{
// 				partOfSpeech: String,
// 				defintions: [
// 					{
// 						definition: String,
// 						example: String,
// 						synonyms: [String],
// 						antonyms: [String],
// 					},
// 				],
// 			},
// 			{
// 				partOfSpeech: String,
// 				defintions: [
// 					{
// 						definition: String,
// 						example: String,
// 						synonyms: [String],
// 						antonyms: [String],
// 					},
// 				],
// 			},
// 			{
// 				partOfSpeech: String,
// 				defintions: [
// 					{
// 						definition: String,
// 						example: String,
// 						synonyms: [String],
// 						antonyms: [String],
// 					},
// 				],
// 			},
// 		],
