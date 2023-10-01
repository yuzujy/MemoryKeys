import { Request, Response } from "express";
import Deck from "../models/Deck";


export async function deleteDeckController (req: Request, res: Response) {
    const deckId = req.params.deckId; //get deck id from url
    const deck = await Deck.findByIdAndDelete(deckId); //del deck from mongo
    res.json(deck);
}