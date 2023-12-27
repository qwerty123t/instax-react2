import styled from 'styled-components';
import { camerasData } from '../database';
import ProductCard from './ProductCard';

export default function Products() {
    return (
        <Main>
            {camerasData.map((props, index) => (
                <ProductCard {...props} key={index} />
            ))}
        </Main>

    )
}


const Main = styled.main`
    width: 100%;
    height: 100%;
    display: grid;
    overflow-y: scroll;
    scrollbar-width: none;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-auto-rows: max(35.2vh, 19.8vw);
    grid-auto-flow: dense;
    gap: 0px 0px;
    position: relative;
    grid-column: 4/6;
    grid-row: 3/-1;


    @media (width < 1700px) {
        grid-template-columns: 25% 25% 25% 25%;
    }  
    
    @media (width < 1200px) {
        grid-template-columns: 33.333% 33.333% 33.334%;
    }   
    
    @media (width < 1000px) {
        grid-template-columns: 50% 50%;
    }
    
    @media (width < 700px) {
        display: none;
    }
`;

