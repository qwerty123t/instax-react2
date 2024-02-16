import styled from 'styled-components';

export default function Info({ camera }) {
    return (
        <>
            <Header3>
                <h1>{camera.format} <span>{camera.model}</span></h1>
                <div className="color">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="4.70711" y1="6.05022" x2="18.7071" y2="20.0502" stroke="#DFDFDF" strokeWidth="2" />
                        <line x1="7.60652" y1="3.29289" x2="21.6065" y2="17.2929" stroke="#DFDFDF" strokeWidth="2" />
                    </svg>
                    <p>{camera.color}</p>
                </div>
            </Header3>

            <Header4>
                <p className="price">RRP&ensp;{camera.price}</p>
                <a className="arrow" href="/">
                    <p>learn more</p>
                    <svg width="9.25vw" height="2.5vw" viewBox="0 0 178 48" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="white"
                            d="M156.18 6.18018L153.36 9.00018L166.34 22.0002L0 22.0002V26.0002H166.34L153.36 38.9801L156.18 41.8201L174 24.0002L156.18 6.18018Z"
                        />
                    </svg>
                </a>
            </Header4>
        </>

    );
}



const Header3 = styled.header`
    @media (width < 700px) {
        padding-top: 1%;
        padding-bottom: 5%;
        border-bottom: 1.5px solid var(--black);

        
		h1 {
			font-weight: 300;
			font-size: 14.285714285vw; /* 70px from 490px */
			line-height: 100%;
			letter-spacing: -0.1em;
			color: var(--black);
			margin: 0 0 0 -1.6vw;
			text-transform: capitalize;
		}

		span {
			font-weight: 700;
			font-size: 14.28vw; /* 70px from 490px */
			line-height: 50px;
			letter-spacing: -0.1em;
			color: var(--black);
			margin: 0;
			text-transform: initial;
		}

		.color {
			display: flex;
			font-size: 5.1vw; /*25px*/
			line-height: 100%;
			font-weight: 300;
			letter-spacing: -0.03em;
			color: var(--grey);
			position: relative;
			margin-top: -1vw;

			svg {
				width: 8%;
				height: 8%;
				margin-left: -2vw;
				margin-top: -1vw;
			}

			p {
				margin-left: 3vw;
			}
		}
    }

    @media (width >= 700px) {
        grid-column: 4/5;
        grid-row: 2/3;
        border-bottom: 3px solid var(--grey);
        display: flex;

        h1 {
			align-self: center;
			margin: 0vh 0px 1vw 0.6vw;
			font-weight: 300;
			font-size: clamp(20px, 7.4vh, 7vw); /*80px 7.4vh 4.16666666667vw*/
			line-height: clamp(20px, 7.4vh, 7vw); /*80px 7.4vh*/
			letter-spacing: -0.09em;
			color: var(--black);
			text-transform: capitalize;
		}

		span {
			font-weight: 700;
			font-size: clamp(20px, 7.4vh, 7vw);
			line-height: clamp(20px, 7.4vh, 7vw);
			letter-spacing: -0.1em;
			color: var(--black);
			text-transform: initial;
		}

		.color {
			display: flex;
			margin-top: 2vh;
			margin-left: 1vw;

			p {
				font-size: clamp(16px, 1.042vw, 2vh); /* 1.85vh 20px */
				line-height: clamp(16px, 1.042vw, 2vh);
				font-weight: 300;
				letter-spacing: -0.1em;
				color: var(--grey);
				margin-left: 0.5vw;
			}
		}
    }
`;



const Header4 = styled.header`
    @media (width < 700px) {
        border-bottom: 1.5px solid var(--border);
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .arrow {
			display: block;
			width: 63.3vw; /*310px*/
			position: relative;
			margin-top: 1vw;
			margin-right: -1vw;
			color: var(--grey);
			line-height: 100%;
			font-weight: 300;
			letter-spacing: -0.04em;
			font-size: 5.1vw; /*25px*/
			white-space: nowrap;
			text-decoration: none;
			position: relative;

			p {
				position: absolute;
				top: 2vw;
				left: -15vw;
			}
		}

		svg {
			width: 100%;
			height: 100%;
		}

		.price {
			order: 2;
			align-self: flex-start;
			font-size: 7.3vw; /*36px*/
			line-height: 100%;
			letter-spacing: -0.1em;
			margin-top: 3vw;
			margin-bottom: 2vw;
			margin-left: -0.7vw;
		}
    }

    @media (width >= 700px) {
        grid-column: 5/-1;
        grid-row: 2/3;
        border-bottom: 3px solid var(--grey);
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        
		.price {
			margin-left: 1vw;
			margin-top: 5.8vh;
			font-size: clamp(16px, 1.042vw, 2vh); /* 1.852vh; 20px */
			line-height: clamp(16px, 1.042vw, 2vh);
			white-space: nowrap;
			letter-spacing: -0.09em;
		}

		.arrow {
			display: block;
			margin-right: 1vw;
			margin-top: 3.2vh;
			width: 9.27vw;
			height: 2.5vw;
			position: relative;
			cursor: pointer;

			p {
				font-size: clamp(14px, 0.73vw, 2vh); /*14px = 1.3vh*/
				line-height: clamp(14px, 0.73vw, 2vh); /*14px = 1.3vh*/
				font-weight: 300;
				letter-spacing: -0.03em;
				white-space: nowrap;
				text-decoration: none;
				position: absolute;
				left: -2.29vw;
				bottom: 1.6vw;
				color: var(--grey);
			}
		}
    }
`;


