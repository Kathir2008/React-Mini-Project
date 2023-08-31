import { useState } from "react"
import "../components/style/ColorChange.css"
export const ColorChange = () => {

    const [color, setColor] = useState('')
    return (
        <>
            <h1 className="text-center bg-dark text-white">Color Change box</h1>
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div
                            style={{
                                width: '360px',
                                height: '250px',
                                border: "5px solid black",
                                borderRadius: "10px",
                                backgroundColor: color ,
                            }}
                        >
                            Color Changing Box
                        </div><br />
                        <input
                            type="text"
                            placeholder="Enter a color"
                            className="form-control"
                            onChange={(e) => setColor(e.target.value)}
                        />

                    </div>
                    <div className="col-4"></div>
                </div>
            </div></>
    )
}
