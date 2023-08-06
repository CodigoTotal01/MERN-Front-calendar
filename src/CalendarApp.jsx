import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./routes"

//Modulo principal - emplea un entrutador
export const CalendarApp = () => {
    return (
        <>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </>
    )
}
