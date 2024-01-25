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

            <div className="bottom">
                <a className="previous" href="/squareSQ1">PREVIOUS</a>
                <div className="number-first">
                    <a href="/squareESQ1">07</a>
                    <div className="line"></div>
                </div>


                <a className="next" href="/wide300">NEXT</a>
                <a className="number-second" href="/wide300">06</a>
            </div>
        </Section>
    );
}


const Section = styled.section`
    @media (width < 700px) {
        display: none;
    }

    @media (width >= 700px) {
        grid-column: 5/6;
        grid-row: 3/5;
        border-bottom: 1px solid var(--border);
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
    }
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



