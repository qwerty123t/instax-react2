import styled from 'styled-components';

export default function Picture({ src, link, alt, index }) {
    return (
        <PictureContainer className={`picture${index + 1}`}>
            {!src ? (
                <>
                    <source srcSet={`${link}/p.avif`} type="image/avif" />
                    <source srcSet={`${link}/p.webp`} type="image/webp" />
                    <img src={`${link}/p.png`} alt={alt} />
                </>
            ) : (
                <>
                    <source srcSet={`${src}@1.avif 1x, ${src}@2.avif 2x`} type="image/avif" />
                    <source srcSet={`${src}@1.webp 1x, ${src}@2.webp 2x`} type="image/webp" />
                    <img src={`${src}@1.png`} srcSet={`${src}@2.png 2x`} alt={alt} />
                </>
            )}
        </PictureContainer>
    );
}

const PictureContainer = styled.picture`
    @media (width < 700px) {
		display: flex;
		max-width: 60%;
		max-height: 100%;
		pointer-events: none;
		grid-area: a;
		place-self: center;
		grid-row: 1/-1;
		grid-column: 1/-1;

		img {
			max-width: 100%;
			max-height: 100%;
			object-fit: contain;
		}

        ${props => props.index === 0 && `
            align-self: flex-end;
			justify-content: center;
        `}
        ${props => props.index === 1 && `
            margin-top: 16vw;
        `}
        ${props => props.index === 2 && `
            margin-top: 1vw;
			align-self: center;
			justify-content: center;
        `}
        ${props => props.index === 3 && `
            margin-top: 1vw;
			max-width: 70%;
			align-self: center;
			justify-content: center;
        `}
        ${props => props.index === 4 && `
            margin-top: 3vw;
			max-width: 75%;
			align-self: center;
			justify-content: center;
        `}
        ${props => props.index === 5 && `
            margin-top: 20vw;
			max-width: 75%;
			margin-right: 4vw;
			align-self: center;
			justify-content: center;
		
        `}
        ${props => props.index === 6 && `
            max-width: 70%;
        `}
        ${props => props.index === 7 && `
            margin-top: 4vw;
			align-self: center;
			justify-content: center;
        `}
    }

    @media (width >= 700px) {
        display: flex;
		max-width: 100%;
		max-height: 100%;
		pointer-events: none;
		grid-area: a;
		place-self: center;
		grid-row: 1/-1;
		grid-column: 1/-1;

		img {
			max-width: 100%;
			max-height: 100%;
			object-fit: contain;
		}

        ${props => props.index === 0 && `
            max-height: 74%;
			align-self: end;
			justify-content: center;
			margin-left: -0.8vw;
        `}
        ${props => props.index === 1 && `
            max-height: 45%;
			justify-content: center;
			margin-top: 4vw;
        `}
        ${props => props.index === 2 && `
            max-height: 50%;
			justify-content: center;
			margin-top: 1.8vw;
        `}
        ${props => props.index === 3 && `
            max-height: 50%;
			justify-content: center;
			margin-top: 1vw;
        `}
        ${props => props.index === 4 && `
            max-height: 50%;
			justify-content: center;
			margin-top: 3vw;
        `}
        ${props => props.index === 5 && `
            max-height: 47%;
			justify-content: center;
			margin-top: 5vw;
			margin-right: 1vw;
        `}
        ${props => props.index === 6 && `
            max-width: 80%;
			max-height: 67%;
			justify-content: center;
        `}
        ${props => props.index === 7 && `
            margin-top: 4vw;
			max-height: 40%;
			justify-content: center;
        `}
        ${props => props.index === 8 && `
            margin-top: 5.5vw;
			max-height: 47%;
        `}
        ${props => props.index === 9 && `
            margin-top: 4vw;
			max-height: 60%;
        `}
        ${props => props.index === 10 && `
            margin-top: 5vw;
			max-height: 55%;
        `}
    }
`;