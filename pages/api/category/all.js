import  {products} from '../../../data/products/all.json'

export default function handler(req, res){
    try{
    res.status(200).json(products);}
    catch(err){
        console.log(err);
        res.status(500).send({message: 'Internal Server Error'})
    }
}