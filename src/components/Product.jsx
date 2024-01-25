import styled from 'styled-components';
import Picture from './ui/Picture';

export default function Product({ camera }) {
    console.log(camera)
    console.log(camera.src1)
    return (
        <Main>
            <LeftAngle>
                <img src="arrowdown.svg" alt="" />
                <p>{camera.text}</p>
            </LeftAngle>

            <LeftArrow>
                <img src="arrowmini.svg" alt="" />
            </LeftArrow>

            <Picture className="picture" >
                <Picture src={camera.src1} />
            </Picture>

            <RightAngle>
                <button className="exit">Close</button>
                <button className="buy">
                    <p>Buy now</p>
                    <img src="small_circle.svg" alt="" />
                </button>
                <button className="compare">Compare</button>
            </RightAngle>

            <RightArrow>
                <img src="arrowmini.svg" alt="arrow right" />
            </RightArrow>

            <Quiz>
                <p className="header">Which instax is right for you?</p>
                <p className="text">
                    Take our quiz and find your new favourite!<br />&apos;Opens in Facebook Messenger&apos;
                </p>
            </Quiz>

        </Main>
    );
}



const Main = styled.main`
    @media (width < 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (width >= 700px) {
        position: relative;
        grid-column: 4/5;
        grid-row: 3/-1;
        border-right: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;



const LeftAngle = styled.div`
    @media (width < 700px) {
        p {
            font-size: 16px;
            line-height: 130%;
            letter-spacing: -0.03em;
            font-weight: 300;
            color: var(--grey);
            z-index: 2;
            order: 4;
            margin-top: 40.82vw; /*200px*/
            max-width: 100%;
        }
    }

    @media (width >= 700px) {
        position: absolute;
        display: flex;
        flex-direction: column;
        z-index: 2;
        top: 1vw;
        left: 1vw;

        img {
            width: 1.48vh; /*16px*/
            height: 3.8vh; /*41px*/
        }

        p {
            width: 17.1875vw; /*330px*/
            font-size: max(15px, 0.78vw); /*15px = 1.38vh*/
            line-height: max(20px, 1.04vw); /*20px = 1.85vh*/
            letter-spacing: -0.03em;
            font-weight: 300;
            color: var(--grey);
            margin-top: 1vw;
            text-wrap: balance;
        }
    }
`;

const LeftArrow = styled.button`
    @media (width < 700px) {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;
        left: 0;
        height: 400px;
        width: 100px;

        img {
            display: none;
        }
    }

    @media (width >= 700px) {
        position: absolute;
        top: calc(33.5vh - 1vw);
        left: 0px;
        width: calc(1vw + max(10px, 0.52vw) + 1vw);
        height: calc(1vw + max(10px, 0.52vw) + 1vw);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: transparent;
        z-index: 5;

        img {
            transform: rotate(-90deg);
            width: max(10px, 0.52vw);
            user-select: none;
        }
    }
`;

const RightAngle = styled.div`
    @media (width < 700px) {
        margin-top: 50px;
        margin-bottom: 100px;
        order: 4;

        .exit {
            display: none;
        }

        .buy {
            display: none;
        }

        .compare {
            display: none;
        }
    }

    @media (width >= 700px) {
        position: absolute;
        top: 1.7vh;
        right: 1vw;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        z-index: 2;

        .exit {
            display: none;
            width: max(130px, 6.7vw); /*130px 12vh*/
            height: max(40px, 2.1vw); /*40px 3.7vh*/
            padding-bottom: 0.46vh; /*5px*/
            border: 1px solid var(--border);
            font-family: 'DIN Pro';
            font-size: max(16px, 0.83vw); /*16px*/
            line-height: 100%;
            letter-spacing: -0.03em;
            font-weight: 400;
            background-color: transparent;
        }

        .buy {
            border: none;
            position: relative;
            background-color: transparent;
            display: flex;

            p {
                font-size: max(14px, 0.73vw);
                line-height: 140%;
                letter-spacing: -0.03em;
                font-weight: 400;
                text-decoration: underline;
                text-underline-offset: 1px;
                color: var(--grey);
                margin-right: max(15px, 0.8vw);
            }

            img {
                width: max(21px, 1.1vw);
                height: max(21px, 1.1vw);
                border-radius: 50%;
            }
        }
    }
`;

const RightArrow = styled.button`
    @media (width < 700px) {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;
        right: 0;
        height: 400px;
        width: 100px;

        img {
            display: none;
        }
    }

    @media (width >= 700px) {
        position: absolute;
        top: calc(33.5vh - 1vw);
        right: 0px;
        width: calc(1vw + max(10px, 0.52vw) + 1vw);
        height: calc(1vw + max(10px, 0.52vw) + 1vw);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: transparent;
        z-index: 5;

        img {
            transform: rotate(90deg);
            width: max(10px, 0.52vw);
            user-select: none;
        }
    }
`;


const Quiz = styled.div`
    @media (width < 700px) {
        display: none;
    }

    @media (width >= 700px) {
        position: absolute;
        display: flex;
        flex-direction: column;
        bottom: 14.5vh;
        right: 1vw;
        z-index: 2;

        .header {
            font-size: max(14px, 0.73vw);
            line-height: 140%;
            letter-spacing: -0.03em;
            font-weight: 400;
            text-align: right;
        }

        .text {
            margin-top: 2.1vh;
            font-size: max(14px, 0.73vw);
            line-height: 145%;
            font-weight: 300;
            text-align: right;
            letter-spacing: -0.03em;
            color: var(--grey);
        }
    }
`;
