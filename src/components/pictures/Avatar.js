export default function Avatar({olid, size="M"}){
    if(!olid){
        return null;
    }

    return (<img alt="Author" src={`https://covers.openlibrary.org/a/olid/${olid}-${size}.jpg`} />
    );
}