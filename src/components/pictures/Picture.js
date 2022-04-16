export default function Picture({pictures, size="M"}){
    if(!pictures || pictures.length === 0){
        return null;
    }

    return (<img alt="Book" src={`https://covers.openlibrary.org/a/id/${pictures[0]}-${size}.jpg`} />
    );
}