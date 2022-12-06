import { Button, ButtonGroup, Heading } from '@chakra-ui/react'

type TitleType = {
    text: string
}

function Title({ text }: TitleType) {
    return (
        <Heading
            fontFamily="Bodoni MT"
            color='#e41541'
            fontSize={{ base: '20px', md: '45px', lg: '45px' }}
            fontWeight="light"
        >
            {text}
        </Heading>
    )
}

export default Title