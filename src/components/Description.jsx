import styled from 'styled-components';
import Picture from './ui/Picture';

export default function Description({ camera }) {
    return (
        <Section>
            <Top>
                <h3>Beware of fraudulent websites.</h3>

                <div className="video">
                    <Picture isVideo={true} link={camera.link} />
                    <img className="triangle" src="triangle.svg" alt="video play button" />
                </div>
            </Top>

            <Bottom>
                <a className="previous" href="/squareSQ1">PREVIOUS</a>
                <div className="number-first">
                    <a href="/squareESQ1">07</a>
                    <div className="line"></div>
                </div>

                <a className="next" href="/wide300">NEXT</a>
                <a className="number-second" href="/wide300">06</a>
            </Bottom>
        </Section>
    );
}


const Section = styled.section`
    @media (width < 700px) {
        display: none;
    }

    grid-column: 5/6;
    grid-row: 3/5;
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
`;


const Top = styled.div`
    width: 100%;
    padding: 1vw;
    padding-top: 0.95vw;

    h3 {
        font-size: max(14px, 1.04vw); /*20px 1.8vh*/
        line-height: 100%;
        letter-spacing: -0.03em;
        font-weight: 400;
        text-decoration: underline;
        text-underline-offset: 1px;
        text-decoration-thickness: 0.104vw; /*2px*/
        width: 11.45vw; /*220px*/
    }

    .video {
        margin-top: min(3.23vw, 5.7vh); /*62px*/
        width: 100%;
        height: 8.5vw; /*160px*/
        background-color: #eaeaea;
        position: relative;
        cursor: pointer;
    }
    
    .triangle {
        position: absolute;
        z-index: 2;
        top: 4%;
        left: 64%;
        width: 20.35%; /*57px*/
        height: 40.63%; /*65px*/  
        pointer-events: none;
    }
`;



const Bottom = styled.div`
    display: flex;
    flex-wrap: wrap;
    bottom: 0;
    position: relative;

    .previous  {
        width: 100%;
        margin-left: 2.1vw;
        font-size: max(14px, 0.78vw); /*15px*/
        line-height: 100%;
        letter-spacing: -0.06em;
        font-weight: 400;
        margin-bottom: 0.5vh;
        color: var(--grey);
        text-decoration: none;
    }

    .number-first {
        width: 100%;
        margin-left: 0.7vw;
        margin-bottom: 0.6vh;
        font-size: clamp(10px, 5.2vw, 9.26vh); /*100px 9.25vh*/
        line-height: 7vh;
        letter-spacing: -0.1em;
        font-weight: 300;
        color: var(--black);
        position: relative;
        text-decoration: none;

        .line {
            position: absolute;
            width: 1vw;
            height: 0.11vw;
            background-color: var(--grey);
            bottom: -1vw;
            left: 5.5vw;
            transform: rotate(30deg);
        }
    }

    .next {
        align-self: flex-end;
        color: var(--full-white);
        font-size: max(14px, 0.78125vw); /*15px*/
        line-height: 100%;
        letter-spacing: -0.06em;
        font-weight: 400;
        margin-bottom: 2.5vh;
        margin-right: -0.4vw;
        margin-left: auto;
        text-decoration: none;
    }

    .next01 {
        margin-right: 0.9vw;
    }

    .number-second {
        display: flex;
        right: 0;
        margin-right: 1.3vw;
        margin-bottom: 2.5vh;
        font-size: clamp(10px, 10.42vw, 18.5vh); /*200px 18.5vh*/
        line-height: clamp(5px, 7.8vw, 15vh);
        letter-spacing: -0.1em;
        font-weight: 300;
        color: var(--full-white);
        text-decoration: none;
    }

    .bottom--01 {
        margin-right: 0px;
    }
`;


