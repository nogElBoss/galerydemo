import { Flex, Box, Spacer, Image } from '@chakra-ui/react'
import Nav from '../molecules/nav'

type GalleryType = {
    pt: string
}

function Gallery({ pt }: GalleryType) {
    return (
        <Flex pt={pt}>
            <Box pl="10">
                <Image src='/images/logo.png' w={200} />
            </Box>
            <Spacer />
            <Nav active="gallery" pr='10' />
        </Flex>
    )


}

export default Gallery