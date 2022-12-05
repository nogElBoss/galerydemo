import { Box, Flex } from "@chakra-ui/react";
import Title from "../components/atoms/title";
import Headers from "../components/organisms/header";
import Galleries from "../components/organisms/gallery";

function Gallery() {
    return (
        <Box minHeight="100%" minWidth="100%" bgColor="blackAlpha.900">
            <Headers active="gallery" pt="2" />
            <Flex width="100vw" alignItems="center" flexDirection="column" >
                <Box width="96vw" height="2px" backgroundColor='#e41541' mt="10px">
                </Box>
                <Title text="GALLERY" />
                <Box width="96vw" height="2px" backgroundColor='#e41541'>
                </Box>
                <Galleries />
            </Flex>
        </Box>
    )
}

export default Gallery