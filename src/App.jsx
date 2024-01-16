import { Routes, Route } from 'react-router-dom';
import { HomePage, Mini11Page, Mini40Page, Mini90Page, MiniLiPlay, SquareSQ1, SquareSQ20, Wide300 } from './pages';

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage key="HomePage" />} />
			<Route path="/mini11" element={<Mini11Page key="Mini11Page" />} />
			<Route path="/mini40" element={<Mini40Page key="Mini40Page" />} />
			<Route path="/mini90" element={<Mini90Page key="Mini90Page" />} />
			<Route path="/miniLiPlay" element={<MiniLiPlay key="MiniLiPlay" />} />
			<Route path="/squareSQ1" element={<SquareSQ1 key="SquareSQ1" />} />
			<Route path="/squareSQ20" element={<SquareSQ20 key="SquareSQ20" />} />
			<Route path="/wide300" element={<Wide300 key="Wide300" />} />
		</Routes>
	)
}
