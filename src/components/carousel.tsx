import React from "react";
import { Icon, Block, Spacer } from "vcc-ui";
import { CarCard } from "./card";
import { useResizeObserver } from "@volvo-cars/react-layout-utils";
import { Car } from "../shared/interfaces/CarInterfaces";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export const Carousel: React.FC<{cars: Car[]}> = ({ cars }) => {
    const { ref, width } = useResizeObserver<HTMLDivElement>();
    return(
        <Block ref={ ref }>
            <CarouselProvider
                naturalSlideHeight={410}
                naturalSlideWidth={480}
                totalSlides={cars.length}
                visibleSlides={width ? (width / 480) : 1}
                isIntrinsicHeight={true}
            >
                <Slider>
                {cars.map((car:Car, indx:number) => {
                    return (
                    <Slide index={indx} key={car.id}>
                        <CarCard car={car}></CarCard>
                    </Slide>);
                })}
                </Slider>
                { width && width < 1008 && 
                <Block extend={{textAlign:"center"}}>
                    <Spacer size={2} />
                    <DotGroup className="CarCarousel-NavDots"/>
                </Block>
                }
                { width && width > 1007 &&
                <Block extend={{textAlign:"right"}}>
                    <ButtonBack
                    className="CarCarousel-NavButton"
                    >
                    <Icon
                        aria-label="previous slide"
                        type="mediacircled-previous-48"
                    />
                    </ButtonBack>
                    <ButtonNext
                    className="CarCarousel-NavButton"
                    >
                    <Icon
                        aria-label="next slide"
                        type="mediacircled-next-48"
                        />
                    </ButtonNext>
                </Block>
                }
            </CarouselProvider>
        </Block>
    )
}