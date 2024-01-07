import { useSelector } from 'react-redux';
import levenshtein from 'fast-levenshtein';
import styled from 'styled-components';
import { camerasData } from '../database';
import ProductCard from './ProductCard';
import VideoCard from './VideoCard';


export default function Products() {

    // Компонент со всеми товарами и фильтром.
    // Фильтрация работает через поисковую строку в компоненте Select.
    // Текст в инпуте из Select приходит через Redux ToolKit.



    const inputText = useSelector((state) => state.data.value);
    const searchText = inputText.toLowerCase();



    // Обычный поиск

    const filteredProducts = camerasData.filter((camera) => {
        const { format, model, series } = camera;
        const words = searchText.split(' ');

        return words.every((word) =>
            format.toLowerCase().includes(word) ||
            model.toLowerCase().includes(word) ||
            series.toLowerCase().includes(word)
        )
    })



    // Умный поиск
    // Используется если обычный поиск ничего не находит.
    // Умный поиск не используется по умолчанию из-за того при вводе 
    // малого кол-ва символов, выдаёт результаты хуже чем обычный поиск

    const smartFilteredProducts = searchText ? camerasData
        .map((camera) => ({
            camera,
            distanceModel: levenshtein.get(searchText.toLowerCase(), camera.model.toLowerCase()),
            distanceFormat: levenshtein.get(searchText.toLowerCase(), camera.format.toLowerCase()),
            distanceSeries: levenshtein.get(searchText.toLowerCase(), camera.series.toLowerCase())
        }))
        .filter(({ distanceModel, distanceFormat }) => distanceModel <= 5 || distanceFormat <= 5 || distanceSeries <= 5)
        .sort((a, b) => a.distanceModel - b.distanceModel)
        .map(({ camera }) => camera)
        : camerasData



    return (
        <Main>
            {inputText === '' && <VideoCard />}
            {filteredProducts.length > 0 ?
                filteredProducts.map((props, index) => (
                    <ProductCard {...props} key={props.model} index={index} />
                )) : smartFilteredProducts.map((props, index) => (
                    <ProductCard {...props} key={props.model} index={index} />
                ))
            }
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

