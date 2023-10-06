import { Request, Response } from 'express';
import { Pet } from '../models/pet';
import { menu } from '../helpers/menuobjects';

export const search = (request:Request,response:Response) => {
    let query:string = request.query.q as string;
    if(!query) {
        response.redirect('/');
        return;
    }
    let list = Pet.filterPetsFromName(query);
    response.render('pages/page',{
        menu: menu(''),
        list,
        query
    });
}