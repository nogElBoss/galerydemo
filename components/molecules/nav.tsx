import { HStack, Box } from '@chakra-ui/react'
import Links from '../atoms/link'
import Texts from '../atoms/text'

type HeaderType = {
    pr: string
}

function Nav({ pr }: HeaderType) {
    return (
        <HStack spacing='20px' pr={10}>
            <Links color="white" text="HOME" href='/' />
            <Texts color="white" text="|" />
            <Links color="white" text="GALLERY" href='/gallery' />
            <Texts color="white" text="|" />
            <Links color="white" text="CONTACT" href='/contact' />
        </HStack>
    )


}

export default Nav