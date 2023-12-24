import styled from 'styled-components';

export default function LeftSidebar() {
    return (
        <Aside>
            <a href="/">
                <InstaxLogo src="instaxlogo.svg" alt="Instax logo" />
            </a>
            <Center>
                <MenuButton>
                    <svg
                        width={48}
                        height={48}
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 37H41H7ZM7 11H41H7ZM7 24H41H7Z"
                            stroke="var(--black)"
                            strokeWidth={5}
                        />
                    </svg>
                </MenuButton>
                <SearchButton>
                    <svg
                        width={48}
                        height={48}
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M22 40a18 18 0 1 0 0-36 18 18 0 0 0 0 36Z"
                            stroke="var(--black)"
                            strokeWidth={3}
                        />
                        <path d="m35 35 9 9" stroke="var(--black)" strokeWidth={3} />
                    </svg>
                </SearchButton>
                <CopyButton>
                    <svg
                        width={48}
                        height={48}
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="m27.3 37-7 7A11.5 11.5 0 0 1 4 27.7l9.4-9.4a11.5 11.5 0 0 1 18.4 3l-3.1 3a7.3 7.3 0 0 0-7.1-5.3c-2 0-3.9.8-5.3 2.2l-9.5 9.4a7.5 7.5 0 0 0 10.6 10.5l4.7-4.7c2 .6 3.5.7 5.1.6Zm.3-32.8-7 7c1.8-.2 3.5 0 5.2.5L30.4 7A7.5 7.5 0 0 1 41 17.6l-9.4 9.3a7.5 7.5 0 0 1-12.4-3.1h-.1l-3 3a11.4 11.4 0 0 0 18.3 3l9.4-9.3A11.5 11.5 0 0 0 27.6 4.2Z"
                            fill="var(--black)"
                        />
                    </svg>
                </CopyButton>
            </Center>
            <FujifilmLogo src="logo.svg" alt="Fujifilm logo" />
        </Aside>
    );
}


const Aside = styled.aside`
@media (width < 700px) {
    width: 100%;
    position: relative;
    order: -1;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid var(--border);
    margin-top: 14vw;
    padding-bottom: 2vw;
}

@media (width >= 700px) {
    display: flex;
    grid-column: 1/2;
    grid-row: 1/-1;
    border-right: 1px solid var(--border);
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 3.5vh 0;
}

`;

const InstaxLogo = styled.img`
@media (width < 700px) {
    position: absolute;
    top: -10%;
    left: -0.8%;
    width: 7.5%;
    transform: rotate(90deg) translateX(-80%) translateY(-35%);
}

@media(width >= 700px) {
    width: 2.1vw;
}
`;

const Center = styled.div`
@media (width < 700px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    width: 50%;
    max-width: 50%;
}

@media(width >= 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -2.3vh;
}
`;

const MenuButton = styled.button`
@media (width < 700px) {
    width: 19.7%;
    display: flex;
    align-items: center;
    justify-content: center;
    order: 1;
    background-color: transparent;
    border: none;
    aspect-ratio: 1;
    margin-right: -1.02040816327vw; /* 5px from 490px */

    svg {
        width: 100%;
        height: 100%;
    }
}

@media(width >= 700px) {
    width: 2.27272727273vw; /*45px*/
    height: 2.27272727273vw; /*45px*/
    border: 1px solid var(--full-white);
    border-radius: 50%;
    background-color: var(--full-white);
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25%;
    object-fit: cover;

    svg {
        width: 2.27272727273vw; /*45px*/
        height: 2.27272727273vw; /*45px*/
        aspect-ratio: 1;
    }

    // :hover path {
    // 	stroke: var(--black);
    // }
}
`;

const SearchButton = styled.button`
@media (width < 700px) {
    width: 14%;
    display: flex;
    order: -1;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    margin-top: 1px;
    margin-right: 13%;
    aspect-ratio: 1;

    svg {
        width: 100%;
        height: 100%;

        path {
            stroke-width: 5;
        }
    }
}

@media(width >= 700px) {
    margin-top: 1vh;
    width: 2.27272727273vw; /*45px*/
    height: 2.27272727273vw; /*45px*/
    border: 1px solid var(--border);
    border-radius: 50%;
    background-color: transparent;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25%;

    svg {
        width: 2.27272727273vw; /*45px*/
        height: 2.27272727273vw; /*45px*/
    }

    // :hover path {
    // 	stroke: var(--black);
    // }
}
`;


const CopyButton = styled.button`
@media (width < 700px) {
    display: none;
}

@media(width >= 700px) {
    margin-top: 1vh;
    width: 2.27272727273vw; /*45px*/
    height: 2.27272727273vw; /*45px*/
    border: 1px solid var(--border);
    border-radius: 50%;
    background-color: transparent;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25%;

    svg {
        width: 2.27272727273vw; /*45px*/
        height: 2.27272727273vw; /*45px*/
    }

    // :hover path {
    // 	fill: var(--black);
    // }
}
`;

const FujifilmLogo = styled.img`
@media (width < 700px) {
    display: none;
}

@media(width >= 700px) {
    width: 0.85vw;
}
`;

// Стили при клике на кнопку меню в левом сайдбаре или темная тема
// @media(width < 700px) {

// .sidebar-left--alternative {
//     background-color: var(--full-black);
//     box-shadow: 0 0 0 200px var(--full-black);
//     position: sticky;
//     top: 5vh;
//     z-index: 10;
// }

// .sidebar-left__instax-logo--alternative {
//     filter: invert(100%)}

// .sidebar-left__center--button-menu--svg-path__alternative{
//     d: path('M39 12.0214L35.9786 9L24 20.9786L12.0214 9L9 12.0214L20.9786 24L9 35.9786L12.0214 39L24 27.0214L35.9786 39L39 35.9786L27.0214 24L39 12.0214Z');
//     stroke: var(--full-white);
// }
// }

// @media(width >= 700px) {
//     .fujifilm - logo {
//         width: 0.85vw;
//     }

// .sidebar-left__fujifilm-logo--alternative {
// 	filter: invert(100%);
// }

// .sidebar-left__center--button-menu--svg-path__alternative {
// 	d: path('M39 12.0214L35.9786 9L24 20.9786L12.0214 9L9 12.0214L20.9786 24L9 35.9786L12.0214 39L24 27.0214L35.9786 39L39 35.9786L27.0214 24L39 12.0214Z');
// 	stroke: var(--black);
// }
// .sidebar-left--alternative {
// 	background-color: var(--full-black);
// 	border-right: 1px solid var(--border-alternative);
// }

// .sidebar-left__instax-logo--alternative {
// 	filter: invert(100%);
// }
// }