import styled from 'styled-components';
import { useState } from 'react';

export default function Help() {
    const [isMenu3Open, setMenu3Open] = useState(true);
    const [isMenu4Open, setMenu4Open] = useState(true);

    return (
        <>
            <Nav>
                <Menu3>
                    <li>
                        <MenuHeader open={isMenu3Open}>Help
                            <img id="menu3-arrow" src="arrowmini.svg" alt="" />
                        </MenuHeader>
                    </li>

                    {isMenu3Open && (
                        <>
                            <li><MenuItem className="bold" href="/">Contact us</MenuItem></li>
                            <li><MenuItem href="/">Help with your instax</MenuItem></li>
                            <li><MenuItem href="/">Terms and conditions</MenuItem></li>
                            <li><MenuItem href="/">Fraudulent websites</MenuItem></li>
                        </>
                    )
                    }

                </Menu3>

                <Menu4>
                    <li>
                        <MenuHeader open={isMenu4Open}>
                            Other
                            <img id="menu4-arrow" src="arrowmini.svg" alt="" />
                        </MenuHeader>
                    </li>

                    {isMenu4Open && (
                        <>
                            <li><MenuItem href="/">Blog</MenuItem></li>
                            <li><MenuItem href="https://www.behance.net/Jc-ookie" target="_blank" rel="noreferrer">Designed by Jcookie</MenuItem></li>
                        </>

                    )}
                </Menu4>

                <Copyright>©2023 Fujifilm</Copyright>
            </Nav>

            <Line />
        </>
    );
}




const Nav = styled.nav`
    @media (width < 700px) {
        display: none;
    }

    @media (width >= 700px) {
        grid-column: 2/3;
        grid-row: 4/-1;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        background-color: var(--full-white);
    }
`;

const Menu3 = styled.ul`
    margin: 1.8vh 1vw 0px 1vw;
    list-style: none;
`;


const Line = styled.div`
    @media (width < 700px) {
        display: none;
    }

    @media (width >= 700px) {
        grid-column: 3/4;
        grid-row: 1/-1;
        border-left: 1px solid var(--border);
        border-right: 1px solid var(--border);
    }
`;

const MenuItem = styled.a`
    display: block;
    text-decoration: none;
    font-size: max(12px, 0.625vw); /*12px 1.111111111vh*/
    line-height: max(20px, 1.0416666667vw); /* 20px */
    font-weight: 300;
    letter-spacing: -0.03em;
    color: var(--grey);

    &:hover,
    :active {
        color: var(--black);
    }

    &.bold {
        margin-top: 0.462962962vh; /*5px*/
        text-decoration: underline;
        font-size: max(12px, 0.625vw); /*12px = 1.111111111vh*/
        line-height: max(20px, 1.04166666667vw); /*20px*/
        font-weight: 500;
        color: var(--black);
    }

    @media (640px > height <= 720px) {
        line-height: max(18px, 1.04166666667vw); /*16px 20px*/

        .bold {
            margin-top: 0.27777777777vh; /*3px*/
            line-height: max(18px, 1.04166666667vw);
        }
    }

    @media (height <= 640px) {
        line-height: max(16px, 1.04166666667vw); /*16px 20px*/

        .bold {
            margin-top: 0.18518518518vh; /*2px*/
            line-height: max(16px, 1.04166666667vw);
        }
    }
`;

const MenuHeader = styled.button`
    position: relative;
    width: 100%;
    display: block;
    font-size: max(15px, 0.78125vw); /*15px 1.388888888vh*/
    line-height: max(15px, 0.78125vw); /*15px 1.388888888vh*/
    font-weight: 300;
    letter-spacing: -0.03em;
    color: var(--grey);
    border-bottom: 1px solid var(--border);
    padding-bottom: 0.462962962vh; /*5px*/

    @media (height <= 640px) {
        font-size: max(14px, 0.72916666666vw);
        line-height: max(14px, 0.72916666666vw);
        padding-bottom: 1px;
        margin-bottom: 0.462962962vh;
    }

    ${props => props.open && `
        color: var(--black);
        font-weight: 500;
        img {
            opacity: 1;
            transform: rotate(0deg);
        }
    `}

    & img {
        position: absolute;
        width: max(10px, 0.52083333333vw); /*10px = 0.925925925vh*/
        height: max(7px, 0.36458333333vw); /*7px = 0.648148148vh*/
        top: max(4px, 0.37037037vh); /*4px = 0.37037037vh*/
        right: 0px;
        opacity: 0.3;
        transform: rotate(180deg);
        transition: transform 0.2s, opacity 0.2s;
    }
`;

const Menu4 = styled.ul`
    margin: 2.3vh 1vw 0px 1vw;
    list-style: none;

    @media (640px > width <= 720px) {
        margin-top: 1.5vh;
    }
    @media (width <= 640px) {
        margin-top: 1vh;
    }

`;

const Copyright = styled.p`
    color: var(--grey);
    writing-mode: vertical-lr;
    transform: scale(-1, -1);
    margin: 0px 0px calc(3.5vh - 0.462962962vh) 0.8vw;
    font-size: max(12px, 0.625vw); /*12px 1.111111111vh*/
    line-height: max(12px, 0.625vw); /*12px 1.111111111vh*/
    margin-top: auto;
    align-self: flex-start;
    font-weight: 300;

    @media (640px > height <= 720px) {
        font-size: max(10px, 0.52083333333vw);
        line-height: max(10px, 0.52083333333vw);
    }

    @media (height <= 640px) {
        font-size: max(8px, 0.41666666666vw);
        line-height: max(8px, 0.41666666666vw);
    }
`;



// @media (width >= 700px) {


//     .menu3 {

//         .isMenu3Visible {

//         }
//     }



//     .menu4 {

//         a {

//         }
//         a:hover,
//         a:active {
//             color: var(--black);
//         }

//         .menu4-header {
//             display: block;
//             width: 100%;
//             font-size: max(15px, 0.78125vw); /*15px*/
//             line-height: max(15px, 0.78125vw); /*15px*/
//             letter-spacing: -0.03em;
//             font-weight: 300;
//             color: var(--grey);
//             padding-bottom: 0.648148148vh; /*7px*/
//             border-bottom: 1px solid var(--border);
//             position: relative;
//             margin-bottom: 0.462962962vh;
//             transition: color 0.2s;

//             img {
//                 position: absolute;
//                 width: max(10px, 0.52083333333vw); /*10px = 0.925925925vh*/
//                 height: max(7px, 0.36458333333vw); /*7px = 0.648148148vh*/
//                 top: max(4px, 0.37037037vh); /*4px = 0.37037037vh*/
//                 right: 0px;
//                 opacity: 0.3;
//                 transition: transform 0.2s, opacity 0.2s;
//                 transform: rotate(180deg);
//             }
//         }

//         .isMenu4Visible {
//             color: var(--black);
//             font-weight: 500;

//             img {
//                 opacity: 1;
//                 transform: rotate(0deg);
//             }
//         }
//     }

//     // .menu4:hover .menu4-header img {
//     // 	transform: rotate(0deg);
//     // 	opacity: 1;
//     // }

//     // .menu4:hover .menu4-header {
//     // 	color: var(--black);
//     // 	font-weight: 500;
//     // }



//     @media screen and (max-height: 640px) {
//         .menu4 {

//             .menu4-header {
//                 font-size: max(14px, 0.72916666666vw);
//                 line-height: max(14px, 0.72916666666vw);
//                 padding-bottom: 1px;
//                 margin-bottom: 0.462962962vh;
//             }
//         }
//     }



// }