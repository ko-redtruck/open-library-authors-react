import { Row,Col } from "react-bootstrap";

import Picture from "./pictures/Picture";

export default function Book(props){
    //the api sometime returns the description as an object with an value, sometimes as a string
    let description;
    if(props.description){
        if(typeof(props.description) == "object"){
            if(typeof(props.description.value) == "string"){
                description = props.description.value;
    
            }
        }
        else if(typeof(props.description) == "string"){
            description = props.description;
        }
    }
    

    return (
        <Row>
            <Col>                
            
                <Picture pictures={props.covers}/>

            </Col>
            <Col>
                <h3>{props.title}</h3>
                <small>{props.first_publish_date}</small>
                <p>{description}</p>

                {props.links && 
                    <ul>
                        {props.links.map((link)=>
                            <li key={link.url} ><a href={link.url}>{link.title}</a></li>
                        )}   
                    </ul>
                }
            </Col>
        </Row>
    );
}