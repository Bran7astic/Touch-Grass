import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { Calendar, Link, MapPin } from 'lucide-react'

export default function DetailCard({props}) {

    const [dateString, setDateString] = useState('')
    const [daysRemaining, setDaysRemaining] = useState(null)

    useEffect(() => {
        const date = new Date(props.date)
        const formatted = date.toLocaleDateString("en-US")
        setDateString(formatted)
        
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        date.setHours(0, 0, 0, 0)
        const diffDays = Math.round((date - today) / (1000 * 60 * 60 * 24))
        setDaysRemaining(diffDays)
    }, [props])

    return(
        <div className="detailCard">
            <img 
                src={props.image} 
                className="detailCardImage"
            />

            <div className="detailCardContainer">
                
                <h2>{props.name}</h2>

                {daysRemaining !== null && (
                    daysRemaining >= 0
                        ? <p style={{color: "#ACE894", fontWeight: "bold"}}>
                            {daysRemaining === 0 ? "Today!" : `${daysRemaining} day${daysRemaining === 1 ? '' : 's'} left!`}
                          </p>
                        : <p style={{color: "#A23E48", fontWeight: "Bold"}}>
                            This event has passed :(
                          </p>
                )}

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