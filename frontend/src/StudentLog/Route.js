import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./StudentLog/Skills";

export default function Router()
{
    return(
        <div>
          <BrowserRouter>

            <Routes>
                <Route path="/Skills" element={<Skills/>}/>
                <Route path="/ExtraActivities" element={<ExtraActivities/>}/>
            </Routes>

          </BrowserRouter>
            
        </div>
    )
}

