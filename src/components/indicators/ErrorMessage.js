export default function ErrorMessage({error}){
    if(!error){
        return null;
    }
    return (
        <p className="text-danger">{error.message}</p>
    );

}