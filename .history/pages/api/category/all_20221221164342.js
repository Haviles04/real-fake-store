import  categories  from '../../../data/products/all.json'

export default function handler(req, res){
    try{
    res.status(200).json(categories);}
    catch(err){
        console.log(err);
        res.status(500).send({message: 'Internal Server Error'})
    }
}