import styled from 'styled-components';


export default function Picture({src, link, alt}) {
    return (

        {!src ? (
            <picture class="picture{index + 1}">
                <source srcset="{link}/p.avif" type="image/avif" />
                <source srcset="{link}/p.webp" type="image/webp" />
                <img src="{link}/p.png" {alt} />
            </picture>
        :
            <picture>
                <source srcset="{src}@1.avif 1x, {src}@2.avif 2x" type="image/avif" />
                <source srcset="{src}@1.webp 1x, {src}@2.webp 2x" type="image/webp" />
                <img src="{src}@1.png" srcset="{src}@2.png 2x" {alt} />
            </picture>
        )
}
    )
}