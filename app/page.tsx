import Navbar from './components/navbar/Navbar';
import Searchbar from './components/searchbar/Searchbar';
import Definition from './components/definition/Definition';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-12">
			<Navbar />
			<Searchbar />
			<Definition />
		</main>
	);
}
