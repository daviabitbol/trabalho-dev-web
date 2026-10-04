import { useParams } from "react-router-dom";

export function MovieDetails() {
    const { id } = useParams()

    return (
        <h1>Esse é o id: {id}</h1>
    )
}