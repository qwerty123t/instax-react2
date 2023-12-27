import styled from 'styled-components';


export default function ProductCard({series, format, model, price, index}) {
    return (
        <a>
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

            {index === 0 || index === 5 && (
                <p>Now___enter____even more ways to give.</p>

            )}
        </a>
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

