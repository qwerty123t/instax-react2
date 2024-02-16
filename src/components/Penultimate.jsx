import styled from 'styled-components';

export default function Penultimate() {

    return (
        <Section>
            <h4>
                <a href="#">Now even more ways to give</a>
            </h4>
        </Section>
    );
}


const Section = styled.section`
    @media (width < 700px) {
        display: none;
    }

    @media (width >= 700px) {
        grid-column: 5/6;
        grid-row: 5/-1;
        border-right: 1px solid var(--border);
        display: flex;
        justify-content: flex-end;
        padding: 1vw;
        padding-top: 2.8vh;

        h4 {
            position: relative;
			font-size: max(14px, 0.72916666666vw);
			line-height: 140%;
			letter-spacing: -0.03em;
			font-weight: 400;
			text-decoration: none;
			margin-right: max(30px, 1.5625vw);
			color: var(--grey);
			text-align: right;

            &::after {
                position: absolute;
                content: '';
                top: 0px;
                right: min(-30px, -1.5625vw);
                width: max(21px, 1.09375vw);
                height: max(21px, 1.09375vw);
                background-size: cover;
                background-position: center center;
                background-image: url(small_circle.svg);
                border-radius: 50%;
            }

            a {
                color: var(--grey);
                text-decoration: none;
            }
        }
    }
`;




