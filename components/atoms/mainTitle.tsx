import { Button, ButtonGroup, Heading } from '@chakra-ui/react'

type MainTitleType = {
    text: string
}

function MainTitle({ text }: MainTitleType) {
    return (
        <Heading
            fontFamily="Bodoni MT"
            color='#e41541'
            fontSize={{ base: '3.5rem', md: '7rem', lg: '9rem' }}
            fontWeight="light"
        >
            {text}
        </Heading>
    )
}

export default MainTitle