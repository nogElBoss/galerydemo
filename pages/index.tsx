import { Box, Flex } from "@chakra-ui/react";
import MainTitle from "../components/atoms/mainTitle";
import Headers from "../components/organisms/header";

function Home() {
    return (
        <Box height="100vh" width="100vw" bgImage="url(/images/bg.png)" backgroundPosition="center" backgroundSize="cover" backgroundRepeat="no-repeat">
            <Headers pt="2" active="home" />
            <Flex height="80vh" width="100vw" alignItems="center" justifyContent="center">
                <MainTitle text="WELCOME" />
            </Flex>
        </Box>
    )
}

export default Home