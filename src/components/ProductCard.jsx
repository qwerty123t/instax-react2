import styled from 'styled-components';

export default function ProductCard({ series, format, model, price, index }) {
    return (
        <Card>
            <p>{series}</p>
            <img src="Arrow2.svg" alt="" />

            <button>
                <span>Add to Wishlist</span>
                <div>
                    <img src="white_circle.svg" alt="" />
                    <div />
                </div>
            </button>
            <h3>{format} <span>{model}</span></h3>

            {/* <Picture {link} {index} alt="{format} {model}" /> */}

            <p>RRP {price}</p>

            {(index === 0 || index === 5) && (
                <p>Now___enter____even more ways to give.</p>

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
    }

`;

