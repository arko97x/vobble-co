export default function VButton(props) {
    var buttonBgColor = props.buttonBgColor
    var buttonTextColor = props.buttonTextColor
    var buttonBorderColor = props.buttonBorderColor
    var buttonText = props.buttonText

    return (
        <button className={`px-4 py-3 w-auto bg-[${buttonBgColor}] hover:bg-[${buttonBgColor}]/40 text-${buttonTextColor} rounded-xl border-${buttonBorderColor} border-l-[2px] border-r-[2px] border-t-[2px] border-b-[5px] hover:border-b-2 font-medium`}>
            {buttonText}
        </button>
    )
}