import styled from 'styled-components';

export default function RightSidebar() {
    return (
        <Aside>
            <Top>
                <MenuButton>
                    <img src="3_dots.svg" alt="menu" />
                </MenuButton>
                <BackButton>
                    <img src="Arrow2.svg" alt="back" />
                </BackButton>
            </Top>

            <Address>
                <a href="https://www.facebook.com/instaxHQ/" target="_blank" rel="noreferrer">
                    <img src="bb.svg" alt="bacebook" />
                </a>
                <a href="https://www.instagram.com/instaxhq/" target="_blank" rel="noreferrer">
                    <img src="inst.svg" alt="instagram" />
                </a>
                <a href="https://twitter.com/instaxHQ" target="_blank" rel="noreferrer">
                    <img src="twt.svg" alt="twitter" />
                </a>
            </Address>
        </Aside>
    )
}


const Aside = styled.aside`
	@media (width < 700px) {
        display: none;
	}
    @media (width >= 700px) {
        background: var(--full-white);
        border-left: 1px solid var(--border);
        grid-column: 6/-1;
        grid-row: 3/-1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`;




const Top = styled.div`
    margin-top: 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;




const MenuButton = styled.button`
    width: 2.27272727273vw; /*45px*/
    border: 1px solid var(--full-black);
    border-radius: 50%;
    background-color: var(--full-black);
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        width: 2.27272727273vw; /*45px*/
        height: 2.27272727273vw; /*45px*/
        aspect-ratio: 1/1;
    }
`;


const BackButton = styled.button`
    display: grid;
    place-items: center;
    margin-top: 7vh;
    width: 2.27272727273vw; /*45px*/
    height: 2.27272727273vw; /*45px*/

    & img {
        width: max(1.7vh, 1.2vw);
        height: 100%;
    }
`;



const Address = styled.address`
    margin-bottom: 3.9vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    & a {
        display: block;
        width: 2.27272727273vw; /*45px*/
        height: 2.27272727273vw; /*45px*/
        margin-top: 1vh;
        border: 1px solid var(--grey);
        border-radius: 50%;

        & img {
            width: 2.27272727273vw; /*45px*/
            transition: filter 0.2s;
        }
    }

    & a:hover img {
        filter: grayscale(100%) brightness(0%);
    }
`;