import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { Calendar, Link, MapPin } from 'lucide-react'

export default function DetailCard({props}) {

    const [dateString, setDateString] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const date = new Date(props.date)
        const formatted = date.toLocaleDateString("en-US")
        setDateString(formatted)
    }, [props])

    return(
        <div className="detailCard">
            <img 
                src={props.image} 
                className="detailCardImage"
            />

            <div className="detailCardContainer">
                
                <h2>{props.name}</h2>

                <div className="iconContainer">
                    <Calendar/>
                    <p>{dateString}</p>
                </div>

                <div className="iconContainer">
                    <MapPin/>
                    <p>{props.location}</p>
                </div>

                <div 
                    style={{
                        width: "60%", 
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                >
                    <p>{props.description}</p>

                    <div className="iconContainer">
                        <Link/>
                        <a href={props.link}>{props.link}</a>
                    </div>
                </div>

            </div>

        </div>
    )
}