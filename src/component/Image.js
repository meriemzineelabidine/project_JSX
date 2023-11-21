import Produit from "../Product";
import '../App.css';
function GetImage(){
    let urlImage=Produit.urlImage
    return(
        <div>
            <img  className="img-pr" src={urlImage}></img>
        </div>
    );
}
export default GetImage