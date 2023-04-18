import {gsap, Power3} from "gsap";
import {MIN_WIDTHS} from "./costants";

export function animate(){
    let mm = gsap.matchMedia()
    mm.add(`(min-width:${MIN_WIDTHS.XL}px)`, () => {
        let tlHero = gsap.timeline()
        tlHero
            .from('.hero > div:nth-child(1)', {
                x: -500,
                duration: 0.5,
                ease: Power3.easeOut,
                clearProps: 'all',
            })
            .from(
                '.hero > div:nth-child(2)',
                {
                    x: 500,
                    duration: 0.5,
                    ease: Power3.easeOut,
                    clearProps: 'all',
                },
                '-=.3',
            )
    })
}


