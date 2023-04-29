import { useState } from 'react'
import './App.css'

const images = [
    "src\\assets\\india-gate.jpg",
    "src\\assets\\qutub.jpg",
    "src\\assets\\taj.jpg"
]

function App() {
    const [current, setCurrent] = useState(0)

    function leftSlide() {
        setCurrent(current === images.length-1 ? 0 : current+1)
    }
    
    function rightSlide() {
        setCurrent(current === 0 ? images.length-1 : current-1)
    }
    
    return (
        <div>
            <h2>Image Carousel</h2>
            <div className="slider">
                <div className="nav-button left-arrow" onClick={leftSlide}>
                    ⬅️
                </div>
                <div className="nav-button right-arrow" onClick={rightSlide}>
                    ➡️
                </div>
                {images.map(
                    (image, index) => current === index && (
                        <div key={index} className="slide">
                            <img src={image} alt="Image"/>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}
    
export default App
