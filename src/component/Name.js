import Produit from "../Product"
function Getname(){
    let nom=Produit.name
return(
    <div>
        {nom}
    </div>
);
}
export default Getname;