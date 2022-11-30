type ButtonType = {
    lable: string
}

function Button({ lable }: ButtonType) {
    return (
        <button className="button">
            {lable}
        </button>
    )
}

export default Button