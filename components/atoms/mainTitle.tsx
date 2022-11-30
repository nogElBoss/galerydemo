

type ButtonType = {
    text: string
}

function MainTitle({ text }: ButtonType) {
    return (
        <>
            <h1 className="maintitle">
                {text}
            </h1>
        </>

    )
}

export default MainTitle