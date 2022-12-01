import { Box, Flex } from "@chakra-ui/react";
import Title from "../components/atoms/title";
import Headers from "../components/organisms/header";

function Gallery() {
    return (
        <Box minHeight="100vh" minWidth="100vw" bgColor="blackAlpha.900">
            <Headers pt="2" />
            <Flex height="80vh" width="100vw" alignItems="center" flexDirection="column" >
                <Box width="96vw" height="2px" backgroundColor='#e41541' mt="10px">
                </Box>
                <Title text="GALLERY" />
                <Box width="96vw" height="2px" backgroundColor='#e41541'>
                </Box>
            </Flex>
        </Box>
    )
}

export default Gallery