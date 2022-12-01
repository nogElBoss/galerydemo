import { HStack, Box } from '@chakra-ui/react'
import Links from '../atoms/link'
import Texts from '../atoms/text'

type HeaderType = {
    pr: string
    active: string
}

function Nav({ pr, active }: HeaderType) {
    if (active == "home") {
        return (
            <HStack spacing='20px' pr={pr}>
                <Links color='#e41541' text="HOME" href='/' />
                <Texts color="white" text="|" />
                <Links color="white" text="GALLERY" href='/gallery' />
                <Texts color="white" text="|" />
                <Links color="white" text="CONTACT" href='/contact' />
            </HStack>
        )
    }
    if (active == "contact") {
        return (
            <HStack spacing='20px' pr={pr}>
                <Links color='white' text="HOME" href='/' />
                <Texts color="white" text="|" />
                <Links color="white" text="GALLERY" href='/gallery' />
                <Texts color="white" text="|" />
                <Links color='#e41541' text="CONTACT" href='/contact' />
            </HStack>
        )
    }
    else {
        return (
            <HStack spacing='20px' pr={pr}>
                <Links color='white' text="HOME" href='/' />
                <Texts color="white" text="|" />
                <Links color='#e41541' text="GALLERY" href='/gallery' />
                <Texts color="white" text="|" />
                <Links color="white" text="CONTACT" href='/contact' />
            </HStack>
        )
    }



}

export default Nav