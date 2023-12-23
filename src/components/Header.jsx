import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
import styled from 'styled-components';

export default function Header() {
	const { width } = useWindowDimensions();
	return (
		<>
			<Header1>
				<Paragraph>Warning! Top-notch instant cameras known to boost happiness</Paragraph>
			</Header1>

			<Header2>
				<PersonalButton>Personal</PersonalButton>

				{width > 1000 ? (
					<CartButton>My shopping cart <span>(0)</span></CartButton>
				) : (
					<CartButton>Cart <span>(0)</span></CartButton>
				)}
			</Header2>
		</>
	);
}


const Header1 = styled.header`
	grid-column: 4/5;
	grid-row: 1/2;
	border-bottom: 1px solid var(--border);
	display: flex;

	@media (max-width: 700px) {
		display: none;
	}
`;

const Paragraph = styled.p`
	margin: 3.5vh 0px 0px max(14px, 1vw);
	font-size: clamp(12px, 0.625vw, 2vh);
	line-height: clamp(12px, 0.625vw, 2vh);
	letter-spacing: -0.03em;
	color: var(--grey);
	font-weight: 400;
`;

const Header2 = styled.header`
	grid-column: 5/-1;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid var(--border);

	
	@media (max-width: 700px) {
		display: none;
	}
`;

const PersonalButton = styled.button`
	margin-top: -0.2vh;
	padding: 0 1vw;
	color: var(--black);
	border: none;
	background: none;
	font-family: 'DIN Pro', system-ui, sans-serif;
	font-size: clamp(14px, 0.729166666vw, 2vh);
	line-height: clamp(14px, 0.729166666vw, 2vh);
	font-weight: 500;
	letter-spacing: -0.03em;
	text-decoration: underline;
	text-underline-offset: 1px;
	cursor: pointer;
`;

const CartButton = styled.button`
	color: var(--black);
	background: none;
	border: none;
	margin-top: -0.2vh;
	padding: 0 1vw;
	font-family: 'DIN Pro', system-ui, sans-serif;
	font-size: clamp(14px, 0.729166666vw, 2vh);
	line-height: clamp(14px, 0.729166666vw, 2vh);
	font-weight: 400;
	letter-spacing: -0.03em;
	cursor: pointer;

	span {
		color: var(--grey);
		font-weight: 200;
	}
`;