import { Flex, Box, Spacer, Image } from '@chakra-ui/react'
import Nav from '../molecules/nav'

type HeaderType = {
    pt: string
}

function Headers({ pt }: HeaderType) {
    return (
        <Flex pt={pt}>
            <Box pl="10">
                <Image src='/images/logo.png' w={200} />
            </Box>
            <Spacer />
            <Nav pr='10' />
        </Flex>
    )


}

export default Headers