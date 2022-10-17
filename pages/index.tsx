import React from "react";
import { View, Text, SelectInput, Spacer, Block, LoadingBar, Flex } from "vcc-ui";
import useSWR from "swr";
import { Carousel } from "../src/components/carousel";
import { Car } from "../src/shared/interfaces/CarInterfaces";

function Home() {
    const fetcher = (url:URL) => fetch(url).then((res) => res.json());
    
    const { data, error } = useSWR('api/cars', fetcher);
    const initialCarData = data ? JSON.parse(data) : [];
    const [ carFilter, setCarFilter ] = React.useState("all");

    const bodyTypes = initialCarData.filter((value: Car, index: number, self: Car[]) => {
        return self.findIndex( c => c.bodyType === value.bodyType) === index;
    }).map((car: Car) => {
        return car.bodyType;
    });

    const carData = initialCarData.filter((car:Car) => {
        return carFilter !== "all" ? car.bodyType === carFilter : true;
    });

    return( 
            <View>
                {error && 
                <Block>
                    <Text variant="cook">Failed to load car data</Text>
                </Block>
                }
                {!data &&
                <Block>
                    <LoadingBar />
                </Block>
                }
                { data &&
                <View>
                    <Flex extend={{
                        flexDirection: "row",
                        fromM: {
                            width: "480px"
                        }
                    }}>
                        <Spacer size={4} />
                        <SelectInput
                            label={"Select a body type"}
                            value={carFilter}
                            onChange={(e) => setCarFilter(e.target.value)}
                        >
                            <option value="all">All body types</option>
                            { bodyTypes.map((bt: string, idx: number)=> {
                                return <option key={idx} value={bt}>{bt}</option>
                            })}
                        </SelectInput>
                    </Flex> 
                    <Spacer size={2} />
                    <Carousel cars={carData} />
                </View>
                }
            </View>
    )
}

export default Home;