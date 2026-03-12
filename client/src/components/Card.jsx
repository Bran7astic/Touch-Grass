import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router"

export default function Card({props}) {

    const [dateString, setDateString] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const date = new Date(props.date)
        const formatted = date.toLocaleDateString("en-US")
        setDateString(formatted)
    }, [props])

    return(
        <div
            style={{
                width: "30%",
                border: "5px solid #586F6B",
                borderRadius: "20px",
                backgroundColor: "white",
                cursor: "pointer",
            }}
            onClick={() => {navigate(`/view/${props.id}`)}}
        >
            <img src={props.image} className="cardImage"/>
            <h3>{props.name}</h3>
            <p>{dateString}</p>
            <p>{props.location}</p>
            <p>{props.description}</p>
            <a>{props.link}</a>
        </div>
    )
}