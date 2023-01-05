import  {suggested}  from '../../../data/products/suggested.json'

export default function handler(req, res){
    try{
    res.status(200).json(suggested);}
    catch(err){
        console.log(err);
        res.status(500).send({message: 'Internal Server Error'})
    }
}