import  clothes  from '../../../data/products/clothes.json'

export default function handler(req, res){
    try{
    res.status(200).json(clothes);}
    catch(err){
        console.log(err);
        res.status(500).send({message: 'Internal Server Error'})
    }
}