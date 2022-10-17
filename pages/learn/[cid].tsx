import React from "react";
import { useRouter } from "next/router";
import { View, Text, Link, Spacer } from  "vcc-ui";

function Learn() {
    const router = useRouter();
    const { cid } = router.query;
    return (
        <View>
            <Text variant="cook">COMING SOON!</Text>
            <Spacer size={2} />
            <Text variant="columbus">TODO: Add exciting details for <Text variant="amundsen">{ cid }</Text></Text>
            <Link arrow="left" onClick={() => router.back()}>Go Back</Link>
        </View>
    );
}

export default Learn;
