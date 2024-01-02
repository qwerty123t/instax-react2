import styled from 'styled-components';

const cardColors = ['var(--full-white)', '#fdf8f5', 'var(--full-white)', '#eff1e6', '#f5f5f5', '#eeeeee', '#f9f9f9', '#f5f5f5', 'var(--full-white)', '#f2f0f1', 'var(--full-white)'];
const getBackgroundColor = index => cardColors[index % cardColors.length];


export default function ProductCard({ series, format, model, price, index }) {
	return (
		<Card index={index}>
			<Series>{series}</Series>
			<ArrowImage src="Arrow2.svg" alt="" />

			<AddToWishlistButton>
				<span>Add to Wishlist</span>
				<LineAndCircle>
					<img src="white_circle.svg" alt="" />
					<div />
				</LineAndCircle>
			</AddToWishlistButton>
			<ProductName>{format} <span>{model}</span></ProductName>

			{/* <Picture {link} {index} alt="{format} {model}" /> */}

			<Price>RRP {price}</Price>

			{(index === 0 || index === 5) && (
				<Tagline>Now___enter____even more ways to give.</Tagline>

			)}
		</Card>
	)
}


{/* <a href={link} class="camera{index + 1}">
<p class="series">{series}</p>
<img class="arrow" src="Arrow2.svg" alt="" />

<button>
    <span>Add to Wishlist</span>
    <div class="line-and-circle">
        <img src="white_circle.svg" alt="" />
        <div />
    </div>
</button>
<h3>{format} <span>{model}</span></h3>

{/* <Picture {link} {index} alt="{format} {model}" /> */}

const Card = styled.a`
    @media (width < 700px) {
        width: 100%;
        aspect-ratio: 1/1.5;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        outline: 1px solid var(--border);
        cursor: pointer;
    }

    @media (width >= 700px) {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        outline: 1px solid var(--border);
        cursor: pointer;

        background-color: ${props => getBackgroundColor(props.index)};

        ${props => props.index === 0 && `
            grid-column: span 2;

            // ВОТ ЭТО НЕ РАБОТАЕТ ВРОДЕ!!!!
			button {
				width: 100%;
				margin-right: max(10px, 0.52vw);
			}

			h3 {
				margin-right: max(12px, 0.625vw);
			}

			.price {
				margin-left: max(10px, 0.52vw);
			}
        `}
    
    }

`;


const Series = styled.p`
    @media (width < 700px) {
        grid-row: 1/2;
        grid-column: 1/2;
        margin-top: max(15px, 5vw);
        margin-left: max(8px, 3.5vw);
        border: 1px solid var(--border);
        width: 100%;
        aspect-ratio: 100/40;

        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--black);
        font-size: max(10px, 3vw);
        line-height: 70%;
        text-align: center;
    }

    @media (width >= 700px) {
        grid-row: 1/2;
        grid-column: 1/2;
        margin-top: max(20px, 1.1vw);
        margin-left: max(10px, 0.52vw);
        border: 1px solid var(--border);
        width: max(100px, 5.2vw);
        height: max(40px, 2vw);

        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--black);
        font-size: max(12px, 0.625vw);
        line-height: 70%;
        text-align: center;    
    }
`;


const ArrowImage = styled.img`
    @media (width < 700px) {
        grid-row: 1/2;
        grid-column: 1/2;
        margin-left: max(8px, 4vw);
        margin-top: max(40px, 20vw);
        width: max(13px, 5vw);
        transform: rotate(180deg);
    }

    @media (width >= 700px) {
        grid-row: 1/2;
        grid-column: 1/2;
        margin-left: max(10px, 0.52vw);
        margin-top: max(89px, 4.63vw);
        width: max(17px, 0.9vw);
        transform: rotate(180deg);   
    }
`;


const LineAndCircle = styled.div`
    @media (width < 700px) {
        display: flex;
        align-items: center;
        width: 100%;
        height: max(16px, 4vw);
        margin-top: 2.5vw;

        img {
            width: max(16px, 4vw);
            height: max(16px, 4vw);
            border: 1px solid var(--border);
            border-radius: 50%;
            transition: border 0.3s ease;
        }

        div {
            width: 100%;
            height: 1px;
            margin-left: max(5px, 0.26vw);
            background-color: var(--border);
            transition: background-color 0.3s ease;
        }
    }

    @media (width >= 700px) {
        display: flex;
        align-items: center;
        width: 100%;
        height: 20px;

        img {
            width: max(21px, 1.09vw);
            height: max(21px, 1.09vw);
            border: 1px solid var(--border);
            border-radius: 50%;
            transition: border 0.3s ease;
        }

        div {
            width: 100%;
            height: 1px;
            margin-left: max(5px, 0.26vw);
            background-color: var(--border);
            transition: background-color 0.3s ease;
        }
    }
`;


const AddToWishlistButton = styled.button`
    @media (width < 700px) {
		grid-row: 1/2;
		grid-column: 2/-1;
		justify-self: end;
		width: 76%;
		height: max(40px, 10vw);
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		margin-top: max(11px, 3vw);
		margin-right: max(8px, 2vw);
		background-color: transparent;
		cursor: pointer;

        span {
            font-size: max(8px, 2.8vw);
            letter-spacing: -0.03em;
            color: var(--grey);
            line-height: 100%;
            transition: color 0.3s ease;
		}

        &:hover {
			span {
				color: var(--black);
			}

			& ${LineAndCircle} {
				img {
					border: 1px solid var(--border-alternative);
				}

				div {
					background-color: var(--border-alternative);
				}
			}
		}
    }

    @media (width >= 700px) {
        grid-row: 1/2;
        grid-column: 2/-1;
        justify-self: end;
        width: 76%;
        height: max(40px, 2vw);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-top: max(20px, 1.04vw);
        margin-right: max(16px, 0.8vw);
        background-color: transparent;
        cursor: pointer;

        span {
            font-size: max(10px, 0.52vw);
            letter-spacing: -0.03em;
            color: var(--grey);
            line-height: 100%;
            transition: color 0.3s ease;
		}

        &:hover {
			span {
				color: var(--black);
			}

			& ${LineAndCircle} {
				img {
					border: 1px solid var(--border-alternative);
				}

				div {
					background-color: var(--border-alternative);
				}
			}
		}


    }
`;


const ProductName = styled.h3`
    @media (width < 700px) {
        grid-row: 1/2;
        grid-column: 1/-1;
        justify-self: end;
        margin-top: max(41px, 15vw);
        margin-right: max(9px, 2.4vw);
        font-size: max(16px, 5vw);
        letter-spacing: -0.1em;
        color: var(--grey);
        font-weight: 300;
        text-align: end;

        span {
            font-size: max(18px, 5vw);
            letter-spacing: -0.1em;
            color: var(--black);
            font-weight: 500;
        }
    }

    @media (width >= 700px) {
        grid-row: 1/2;
        grid-column: 2/-1;
        justify-self: end;
        margin-top: max(55px, 2.86vw);
        margin-right: max(16px, 0.8vw);
        font-size: clamp(16px, 1.40625vw, 1.5vw);
        letter-spacing: -0.1em;
        color: var(--grey);
        font-weight: 300;
        text-align: end;

        span {
            font-size: max(27px, 1.40625vw);
            letter-spacing: -0.1em;
            color: var(--black);
            font-weight: 500;
        }
    }
`;


const Price = styled.p`
    @media (width < 700px) {
        grid-row: 3/-1;
        grid-column: 1/3;
        margin-bottom: max(15px, 1.1vw);
        margin-left: max(8px, 2.5vw);
        font-size: max(11px, 3.6vw);
        letter-spacing: -0.03em;
        color: var(--black);
        font-weight: 400;
        align-self: flex-end;
    }

    @media (width >= 700px) {
        grid-row: 3/-1;
        grid-column: 1/2;
        margin-bottom: max(20px, 1.1vw);
        margin-left: max(10px, 0.52vw);
        margin-left: max(14px, 0.73vw);
        font-size: max(14px, 0.73vw);
        letter-spacing: -0.03em;
        color: var(--black);
        font-weight: 400;
        align-self: flex-end;
    }
`;


const Tagline = styled.p`
    @media (width < 700px) {
        display: none;
    }

    @media (width >= 700px) {
        grid-row: 3/-1;
        grid-column: 2/-1;
        margin-right: max(10px, 0.52vw);
        margin-bottom: max(20px, 1.1vw);
        text-align: right;
        font-size: max(14px, 0.73vw);
        color: var(--grey);
        font-weight: 300;
        letter-spacing: -0.005em;
        align-self: flex-end;
        justify-self: end;
    }
`;


