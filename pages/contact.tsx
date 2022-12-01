import { Box, Flex } from "@chakra-ui/react";
import Title from "../components/atoms/title";
import Headers from "../components/organisms/header";

function Contact() {
    return (
        <Box minHeight="100vh" minWidth="100vw" bgColor="blackAlpha.900">
            <Headers active="contact" pt="2" />
            <Flex height="80vh" width="100vw" alignItems="center" flexDirection="column" >
                <Box width="96vw" height="2px" backgroundColor='#e41541' mt="10px">
                </Box>
                <Title text="CONTACT" />
                <Box width="96vw" height="2px" backgroundColor='#e41541'>
                </Box>
            </Flex>
        </Box>
    )
}

export default Contact