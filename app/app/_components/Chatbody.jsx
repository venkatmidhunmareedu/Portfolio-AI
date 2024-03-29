import ChatComp from "./ChatComp"


const chats = [
    {
        id: 1,
        text: "Hello",
        time: "2:00pm",
        sender : true,
    },
    {
        id: 2,
        text: "Hi",
        time: "2:01pm",
        sender : false,
    },
    {
        id: 3,
        text: "How are you?",
        time: "2:02pm",
        sender : true,
    },
    {
        id: 4,
        text: "I'm fine. What about you?",
        time: "2:03pm",
        sender : false,
    },
    {
        id: 5,
        text: "Good. What about you?",
        time: "2:04pm",
        sender : true,
    },
    {
        id: 6,
        text: "Good. What about you?",
        time: "2:05pm",
        sender : false,
    },
    {
        id: 7,
        text: "Good. What about you?",
        time: "2:06pm",
        sender : true,
    },
    {
        id: 8,
        text: "Good. What about you?",
        time: "2:07pm",
        sender : false,
    },
    {
        id: 9,
        text: "Good. What about you?",
        time: "2:08pm",
        sender : true,
    },
    {
        id: 10,
        text: "Good. What about you?",
        time: "2:09pm",
        sender : false,
    }
]
const Chatbody = () => {
    const time = new Date().getTime().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    return (
        <div class="m-4 flex flex-col md:mx-auto md:max-w-4xl gap-2 w-screen">
            <ChatComp text="Hello! I am Midhun. Ask me anything about me. The more the merrier.😊" time={time} sender={false} />
            {
                chats.map((chat) => {
                    return <ChatComp key={chat.id} text={chat.text} time={chat.time} sender={chat.sender} />
                })
            }
        </div>
    )
}

export default Chatbody