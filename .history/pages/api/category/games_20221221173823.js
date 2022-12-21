import  games  from '../../../data/products/games.json'

export default function handler(req, res){
    try{
    res.status(200).json(games);}
    catch(err){
        console.log(err);
        res.status(500).send({message: 'Internal Server Error'})
    }
}