import Header from "./components/Header"
import Select from "./components/Select"
import Info from "./components/Info"
import LeftSidebar from "./components/LeftSidebar"
import Navigation from "./components/Navigation"
import Help from "./components/Help"
import Products from "./components/Products"
import Product from "./components/Product"
import Description from "./components/Description"
import Penultimate from "./components/Penultimate"
import RightSidebar from "./components/RightSidebar"
import styled from 'styled-components';

import { mini11, mini40, mini90, miniLiPlay, squareSQ1, squareSQ20, wide300 } from './database';

export const HomePage = () => {
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
};
export const Mini11Page = () => {
    return (
        <Container>
            <Header />
            <Info camera={mini11} />
            <LeftSidebar />
            <Navigation />
            <Help />
            <Product camera={mini11} />
            <Description camera={mini11} />
            <Penultimate />
            <RightSidebar />
        </Container>
    )
};

export const Mini40Page = () => {
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
};
export const Mini90Page = () => {
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
};
export const MiniLiPlay = () => {
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
};
export const SquareSQ1 = () => {
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
};
export const SquareSQ20 = () => {
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
};
export const Wide300 = () => {
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
};







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