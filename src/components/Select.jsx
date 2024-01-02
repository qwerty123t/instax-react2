import styled from 'styled-components';

export default function Select() {
    return (
        <Navigation>
            <H3>Select</H3>
            <Links>
                <a href="/">Home</a>
                <span> - </span>
                <CurrentPage href="/">
                    Cameras
                </CurrentPage>
            </Links>
            <SelectWrapper>
                <select id="select">
                    <option value="All films">All films</option>
                    <option value="mini series">Mini film</option>
                    <option value="Square series">Square film</option>
                    <option value="WIDE series">Wide film</option>
                </select>
            </SelectWrapper>
            <search role="search">
                <input
                    bind:value="{searchText}"
                    placeholder="Search your favorite camera"
                    name="search"
                    autoComplete="off"
                />
                <button>
                    <img src="magnifier.svg" alt="Submit" />
                </button>
            </search>
            <CompareButton>Compare</CompareButton>
        </Navigation>
    );
}

const Navigation = styled.nav`
	@media (width < 700px) {
		padding-top: 5%;
		padding-bottom: 5%;

		search {
			display: none;
		}
	}

	@media (width >= 700px) {
		grid-column: 4/-1;
		grid-row: 2/3;
		border-bottom: 2px solid var(--black);
		display: grid;
		grid-template-columns: 38.461538461% 10.256410256% 38.461538461% 12.82051284%;
		grid-template-rows: 50% 50%;

		search { // styled-components не поддерживает новый html тег <search>
			display: flex;
			font-family: inherit;
			width: 100%;
			height: max(40px, 2.08vw);
			background-color: transparent;
			border: none;
			border-bottom: 1px solid var(--border);
			color: var(--black);
			font-size: max(12px, 0.625vw);
			letter-spacing: 0em;
			grid-column: 3/4;
			grid-row: 1/2;
			margin-top: auto;

			input {
				width: 100%;
				height: 100%;

				&::placeholder {
					color: var(--grey);
					font-size: max(12px, 0.625vw);
					font-weight: 300;
					letter-spacing: 0.01em;
				}
			}
			button {
				background-color: transparent;
				border: none;
				height: max(40px, 2.08vw);
				padding: 10px;
				margin: auto 0;
				grid-column: 3/4;
				grid-row: 1/2;
				cursor: pointer;

				img {
					max-width: 100%;
					max-height: 100%;
				}
			}
		}
	}
`;

const H3 = styled.h3`
	@media (width < 700px) {
		font-family: 'DIN Pro', system-ui, sans-serif;
		font-weight: 300;
		font-size: 14.285714285vw;
		line-height: 100%;
		letter-spacing: -0.1em;
		color: var(--black);
		margin: 0 0 0 -1.6vw;
	}
	@media (width >= 700px) {
		font-size: max(18px, 1.5625vw);
		font-weight: 400;
		letter-spacing: -0.1em;
		margin-top: 0.6vw;
		margin-left: max(14px, 1vw);
		grid-column: 1/2;
		grid-row: 1/2;
	}
`;

const Links = styled.div`
	@media (width >= 700px) {
		display: inline-block;
		margin: 0.3vw 0 0 6.2vw;
		grid-column: 1/2;
		grid-row: 2/3;
		color: var(--grey);
		font-size: max(12px, 0.625vw);
		font-weight: 400;
		text-decoration: none;
		line-height: 1.15;
	}
`;
const CurrentPage = styled.a`
	color: var(--black);
	font-weight: 500;
`;
const SelectWrapper = styled.div`
	@media (width < 700px) {
        display: none;
	}

	grid-column: 1/2;
	grid-row: 1/2;
	margin: auto 0 0 auto;
	width: max(130px, 6.77083333333vw);
	height: max(40px, 2.08333333333vw);
	position: relative;
	display: flex;
	align-items: center;

	&::after {
		position: absolute;
		content: '';
		width: max(10px, 0.52083333333vw);
		height: max(10px, 0.52083333333vw);
		right: 1.04166666667vw;
		margin: auto 0;
		z-index: 5;
		background-size: max(10px, 0.52083333333vw) max(7px, 0.36458333333vw);
		background-image: url(/arrowmini.svg?url);
		background-repeat: no-repeat;
		pointer-events: none;
		transform: rotate(180deg);
	}

	select {
		width: 100%;
		height: 100%;
		border: 1px solid var(--border);
		color: var(--black);
		font-family: inherit;
		font-size: max(15px, 0.83333333333vw);
		line-height: 100%;
		letter-spacing: -0.03em;
		font-weight: 500;
		text-align: left;
		padding: 0 0.78125vw;
		background-color: transparent;
		align-items: center;
		cursor: pointer;
	}
`;

const CompareButton = styled.button`
    @media (width < 700px) {
        display: none;
    }

	grid-column: 4/5;
	grid-row: 1/2;
	margin: auto 1vw 0 auto;
	width: max(80px, 6.77vw);
	height: max(40px, 2.08vw);
	max-width: 100%;
	padding-bottom: 2px;
	border: 1px solid var(--border);
	font-family: inherit;
	font-size: max(15px, 0.83333333333vw);
	line-height: 100%;
	letter-spacing: -0.03em;
	font-weight: 500;
	background-color: transparent;
	color: var(--black);
	text-align: center;
	cursor: pointer;
`;
