import { useState } from 'react';
import styled from 'styled-components';

export default function VideoCard() {
    const [videoHidden, setVideoHidden] = useState(true);

    const handlePreviewClick = () => {
        setVideoHidden(!videoHidden);
    };

    return (
        <Card>
            <Preview onClick={handlePreviewClick}>
                <picture>
                    <source srcSet="mini11/e.avif" type="image/avif" />
                    <source srcSet="mini11/e.webp" type="image/webp" />
                    <img src="mini11/e.jpeg" alt="Video instax mini 11" />
                </picture>
            </Preview>

            <Svg viewBox="0 0 132 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m1 2 129 84L1 170V2Z" stroke="#fff" strokeWidth="2" />
            </Svg>

            <Video muted autoPlay hidden={videoHidden} onEnded={handlePreviewClick}>
                <source src="mini11/11.mp4" type="video/mp4" />
            </Video>
        </Card>
    );
}


const Card = styled.div`
    @media (width < 700px) {
        display: none;
    }

    @media (width >= 700px) {
        position: relative;
        grid-column: span 2;
        background-color: #f9f9f9;
        order: 6;
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        grid-template: 'a';
        outline: 1px solid var(--border);
    }
`;


const Preview = styled.button`
    grid-area: a;
    display: flex;
    align-items: center;
    max-width: 76%;
    max-height: 68%;
    cursor: pointer;
    z-index: 0;
    overflow: hidden;

    picture {
        display: flex;
        width: 100%;
        height: 100%;
        pointer-events: none;

        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }
    }
`;

const Svg = styled.svg`
    grid-area: a;
    position: absolute;
    bottom: 1.2vw;
    left: 50%;
    pointer-events: none;
    z-index: 1;
    width: 7vw;
`;

const Video = styled.video`
    grid-area: a;
    z-index: 2;
    max-width: 76%;
    max-height: 68%;
    object-fit: contain;
    opacity: 0;
    visibility: hidden;

    
    ${props => props.hidden === false && `
        opacity: 1;
        visibility: visible;
    `}
`;


