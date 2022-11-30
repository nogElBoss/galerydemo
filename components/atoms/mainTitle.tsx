import { Button, ButtonGroup } from '@chakra-ui/react'

type ButtonType = {
    text: string
}

function MainTitle({ text }: ButtonType) {
    return (
        <h1 color='red'>
            {text}
        </h1>
    )
}

export default MainTitle