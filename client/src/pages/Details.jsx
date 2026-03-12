import { useState } from "react";
import { useEffect } from "react"
import { useParams } from "react-router"
import DetailCard from "../components/DetailCard";

export default function Details() {

    const { id } = useParams()
    const [event, setEvent] = useState({});

    useEffect(() => {
        const fetchEventById = async () => {
            const response = await fetch(`/events/${id}`)
            const data = await response.json()
            setEvent(data[0])
        }

        fetchEventById()

    }, [id])

    return(
        <div>
            {event && (
                <DetailCard props={event}/>
            )}
        </div>
    )
}