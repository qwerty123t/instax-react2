
import Header from "./components/Header"
import Select from "./components/Select"
import LeftSidebar from "./components/LeftSidebar"
import Navigation from "./components/Navigation"
import Help from "./components/Help"
import Products from "./components/Products"
import RightSidebar from "./components/RightSidebar"

import styled from 'styled-components';

export default function App() {


	return (
		<Container>
			<Header />
			<Select />
			<LeftSidebar />
			<Navigation />
			<Help />
			<Products />
			<RightSidebar />
		</Container>
	)
}

const Container = styled.div`
	@media (width < 700px) {
		::-webkit-scrollbar {
			width: 0px;
		}
			max-width: 77.55%;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			min-height: 100vh;
			min-height: 100svh;
	}

	@media (width >= 700px) {
			display: grid;
			gap: 0px;
			grid-template-columns: 4.16% 13.45% 1.09% 60.42% 16.66% 4.22%;
			grid-template-rows: 7.407407407vh 11.111111111vh 31.481481481vh 27.777777777vh 22.222222224vh;
	}
`;