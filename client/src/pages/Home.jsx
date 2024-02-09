import { useState } from "react"
import { useSocket } from "../provider/Socket"

function Home() {
    const { socket } = useSocket();
    const [email, setEmail] = useState("")
    const [roomId, setRoomId] = useState("")
    const handleJoinRoom = () => {
        socket.emit("join-room", { emailId: email, roomId })
    }
    return (
        <div className='h-screen bg-slate-100 flex justify-center items-center '>
            <div className="bg-slate-400 shadow-2xl border blur-[15px] rounded-lg w-1/3 h-1/2 justify-center items-center flex"></div>
            <div className="absolute justify-center items-center flex flex-col">
                <input
                    type="text"
                    value={email}
                    className='border-2 outline-none border-black p-2 m-2 rounded-lg'
                    placeholder='Enter Email Id...'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    value={roomId}
                    className='border-2 outline-none border-black p-2 m-2 rounded-lg' placeholder='Enter Room Id...'
                    onChange={(e) => setRoomId(e.target.value)}
                />
                <button
                    className='px-3 py-2 rounded-md text-white font-bold transition ease-in-out delay-150 bg-blue-500 hover:translate-y-1 hover:translate-x-1 hover:scale-110 hover:bg-indigo-500 duration-300'
                    onClick={() => handleJoinRoom}>
                    Join Room
                </button>
            </div>
        </div >
    )
}

export default Home