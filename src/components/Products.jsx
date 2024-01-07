import styled from 'styled-components';
import { camerasData } from '../database';
import ProductCard from './ProductCard';
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';


export default function Products() {
    // Фильтрация через поисковую строку в компоненте Select
    // Текст в инпуте из Select приходит через Redux ToolKit

    const inputText = useSelector((state) => state.data.value);
    console.log(inputText);

    const filteredProducts = camerasData.filter((camera) => {
        const { format, model, series } = camera;
        const searchText = inputText.toLowerCase();

        // если в инпуте несколько слов, то проверяется каждое слово
        const words = searchText.split(' ');
        return words.every((word) =>
            format.toLowerCase().includes(word) ||
            model.toLowerCase().includes(word) ||
            series.toLowerCase().includes(word)
        )


    })

    return (
        <Main>
            {inputText === '' && <VideoCard />}
            {filteredProducts.map((props, index) => (
                <ProductCard {...props} key={props.model} index={index} />
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
        display: flex;
        flex-direction: column;
        overflow-y: unset;
    }
`;

