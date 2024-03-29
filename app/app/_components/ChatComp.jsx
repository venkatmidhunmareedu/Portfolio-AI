const ChatComp = (props) => {
    function formatTimeToCustomFormat(time) {
        // Convert the time to a Date object
        var date = new Date(time);

        // Get the hour part of the time
        var hours = date.getHours();

        // Get the minute part of the time
        var minutes = date.getMinutes();

        // Convert hours to 12-hour format
        var formattedHours = hours % 12 || 12;

        // Determine whether it's AM or PM
        var period = hours < 12 ? 'am' : 'pm';

        // Format minutes to always have two digits
        var formattedMinutes = ('0' + minutes).slice(-2);

        // Return the formatted time
        return formattedHours + '.' + formattedMinutes + ' ' + period;
    }
    return (
        <div class={"flex" + (props.sender ? " justify-end" : " justify-start")}>
            <div class={"flex max-w-[75%] flex-col rounded px-3 py-1 md:max-w-[50%]" + (props.sender ? " bg-slate-100" : " bg-blue-100 ")}>
                <p class="text-left text-slate-900 text-sm">{props.text}</p>
                <div class="flex justify-end text-xs text-slate-500 mt-1">{props.time}</div>
            </div>
        </div>
    )
}

export default ChatComp