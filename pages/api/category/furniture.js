import  furniture  from '../../../data/products/furniture.json'

export default function handler(req, res){
    try{
    res.status(200).json(furniture);}
    catch(err){
        console.log(err);
        res.status(500).send({message: 'Internal Server Error'})
    }
}