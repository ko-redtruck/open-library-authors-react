import { Spinner } from "react-bootstrap";

export default function LoadingIndicator({isLoading}){
    if(!isLoading){
        return null;
    }
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
}