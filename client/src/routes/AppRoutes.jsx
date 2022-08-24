import { Routes, Route } from "react-router-dom"
import Join from "../components/Join/Join"
import Chat from "../components/Chat/Chat"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={< Join />} />
            <Route path="/chat" element={< Chat />} />

        </Routes>
    )
}

export default AppRoutes