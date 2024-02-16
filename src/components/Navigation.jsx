import styled from 'styled-components';
import { Link } from "react-router-dom";
import { camerasData } from '../database';
// Нужно добавить стили для элемента меню, на странице которого находится посетитель

export default function Navigation() {    

    return (
        <Nav>
            <Menu1>
                <MenuItem $bold={true}><Link to="/">Cameras</Link></MenuItem>
                {camerasData.map((camera, index) => (
                    <MenuItem key={index}>
                        <Link to={camera.link}>{camera.series === "Square" ? "SQUARE" : camera.series} {camera.model}</Link>
                    </MenuItem>
                ))}
            </Menu1>

            <Menu2>
                <MenuItem><Link to="/">PRINTERS</Link></MenuItem>
                <MenuItem><Link to="/">FILM</Link></MenuItem>
                <MenuItem><Link to="/">LOWDOWN</Link></MenuItem>
                <MenuItem><Link to="/">JOIN US</Link></MenuItem>
                <MenuItem><Link to="/">ABOUT</Link></MenuItem>
                <MenuItem><Link to="/">SUPPORT</Link></MenuItem>
            </Menu2>
        </Nav>
    );
}

const Nav = styled.nav`
    @media (width < 700px) {
        display: none;
    }

    @media (width >= 700px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;
        grid-column: 2/3;
        grid-row: 1/4;
        border-bottom: 1px solid var(--border);
    }
`;


const Menu1 = styled.ul`
    margin: 3.2vh 1vw 0px 0px;
    list-style: none;
    text-align: right;
    font-size: max(14px, 0.72916666666vw); /*14px 1.296296296vh*/
    line-height: max(20px, 1.04166666667vw); /*20px 1.851851851vh*/
    letter-spacing: -0.03em;
    font-weight: 300;

    @media (640px > height <= 720px) {
        line-height: max(18px, 1.04166666667vw); /*16px 20px*/
    }

    @media (height <= 640px) {
        font-size: max(12px, 0.72916666666vw);
        line-height: max(16px, 1.04166666667vw); /*16px 20px*/
    }
`;

const Menu2 = styled.ul`
    list-style: none;
    margin: 0px 0px 3.1vh 1vw;
    font-size: max(12px, 0.625vw); /*12px 1.111111111vh*/
    line-height: max(21px, 1.04166666667vw); /*20px 1.851851851vh*/
    letter-spacing: -0.03em;
    font-weight: 300;
    color: var(--grey);

    @media (640px > height <= 720px) {
        line-height: max(18px, 1.04166666667vw); /*16px 20px*/
    }

    @media (570px > height <= 640px) {
        font-size: max(12px, 0.72916666666vw);
        line-height: max(16px, 1.04166666667vw); /*16px 20px*/
    }

    @media (height <= 570px) {
        margin-top: calc(3.2vh + max(18px, 1.04166666667vw) + 0.41666666666vw);
        margin-left: 0vw;
    }
`;

const MenuItem = styled.li`
    display: block;
    text-decoration: none;
    color: var(--grey);

    :hover {
        color: var(--black);
    }
    :active {
        color: var(--full-black);
    }

    a {
        display: block;
        cursor: pointer;
    }

    
    ${props => props.$bold && `
        color: var(--black);
        text-align: right;
        letter-spacing: -0.02em;
        text-decoration: underline;
        color: var(--black);
        margin-bottom: 0.41666666666vw; /*8px 0.8vh*/
        font-size: max(18px, 1.04166666667vw); /*20px 1.852vh*/
        line-height: max(18px, 1.04166666667vw); /*20px 1.852vh*/
        font-weight: 500;
        position: relative;

        ::after {
            position: absolute;
            content: '';
            width: max(15.75px, 1.09375vw); /*21px 1.944444444vh*/
            height: max(12px, 0.83333333333vw); /*16px 1.481481481vh*/
            top: max(4px, 0.1vw); /*4px = 0.37037037vh*/
            right: min(-25px, -1.45833333333vw); /*-25px, -28px = -1.45833333333vw*/
            background-size: max(15.75px, 1.09375vw) max(12px, 0.83333333333vw);
            background-image: url(/Arrow2.svg?url);
            background-repeat: no-repeat;
        }
    `}
`;

