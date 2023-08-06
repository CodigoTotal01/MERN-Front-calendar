import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";

//Router principal del programa 
export const AppRouter = () => {

    const authStatus = 'not-authenticated';

    return (
        // No te olvidesdel contexto del broweser - en un hoc
        <Routes>
            {
                (authStatus === 'not-authenticaed')
                ?
                <Route path="/auth/*" element={<LoginPage />}/>
                :
                <Route path="/*" element={<CalendarPage />}/>
            }
            <Route path="/*" element={<Navigate to="/auth/login"/>}/>

        </Routes>
    )
}
