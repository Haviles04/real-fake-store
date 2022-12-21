import  watches  from '../../../data/products/watches.json'

export default function handler(req, res){
    try{
    res.status(200).json(watches);}
    catch(err){
        console.log(err);
        res.status(500).send({message: 'Internal Server Error'})
    }
}