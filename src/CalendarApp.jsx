import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./routes"
import { Provider } from "react-redux"
import { store } from "./store"

//Modulo principal - emplea un entrutador
export const CalendarApp = () => {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </Provider>
        </>
    )
}
