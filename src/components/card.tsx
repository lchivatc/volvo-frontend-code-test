import React from "react";
import { View, Text, Link, useTheme, Flex, Spacer } from "vcc-ui";
import { Car } from "../shared/interfaces/CarInterfaces";
import Image from "next/image";
import { useRouter } from "next/router";

export const CarCard: React.FC<{car:Car}> = ({children, car}) => {
    const theme = useTheme();
    const router = useRouter();
    return (
        <View width="480px" extend={{paddingLeft:"32px", paddingRight:"32px"}}>
            <Text variant="amundsen" extend={{color: theme.color.foreground.secondary, textTransform:"uppercase"}}>{car.bodyType}</Text>
            <Text variant="hillary" subStyle="emphasis">{car.modelName} <Text variant="hillary" extend={{color: theme.color.foreground.secondary}}>{car.modelType}</Text></Text>
            <Image src={car.imageUrl} width={480} height={360} alt={car.modelName} />
            <Flex extend={{ flexDirection: "row", justifyContent: "center" }}>
                <Link arrow="right" className="CarCard-link" onClick={() => router.push(`/learn/${car.id}`)}>LEARN</Link>
                <Spacer />
                <Link arrow="right" className="CarCard-link" onClick={() => router.push(`/shop/${car.id}`)}>SHOP</Link>
            </Flex>
        </View>
    )
}