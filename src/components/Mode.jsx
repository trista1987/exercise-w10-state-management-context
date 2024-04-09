import { useAppData } from "../context/TogglerContext";
import "./mode.css";
export const Mode = () => {
    const {mode, appContent, handleModeChange} = useAppData()

    console.log(mode, appContent, handleModeChange )

    return(
        <main className={mode}>
            <div>
            <h1>{appContent.heading}</h1>
            <h2>{appContent.subheading}</h2>
            <button onClick={handleModeChange}>
                change {mode==='light' ? 'dark' : 'light'} mode
            </button>
        </div>
        </main>
        
    )
}