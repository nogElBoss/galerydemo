import { Box } from "@chakra-ui/react";
import Button from "../components/atoms/button";
import MainTitle from "../components/atoms/mainTitle";

function Home() {
    return (
        <Box backgroundColor="blackAlpha.900">
            <Button label="Button" width="full" />
            <MainTitle text="WELCOME" />
        </Box>
    )


}

export default Home