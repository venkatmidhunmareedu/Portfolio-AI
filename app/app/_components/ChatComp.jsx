const ChatComp = (props) => {
    return (
        <div class={"flex" + (props.sender ? " justify-end" : " justify-start")}>
            <div class={"flex max-w-[50%] flex-col rounded px-3 py-1 md:max-w-[50%]" + (props.sender ? " bg-slate-100" : " bg-blue-100 ")}>
                <p class="text-left text-slate-900 text-sm">{props.text}</p>
                <div class="flex justify-end text-xs text-slate-500 mt-1">{props.time}</div>
            </div>
        </div>
    )
}

export default ChatComp