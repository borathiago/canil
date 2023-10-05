import { Request, Response } from 'express';
import { Pet } from '../models/pet';
import { menu } from '../helpers/menuobjects';

export const home = (request:Request,response:Response) => {
    let list = Pet.getPets();
    response.render('pages/page',{
        menu: menu('all'),
        banner: {
            title: 'Todos os animais',
            backgroundimage: 'allanimals.jpg'
        },
        list
    });
}

export const dogs = (request:Request,response:Response) => {
    let list = Pet.filterPets('dog');
    response.render('pages/page',{
        menu: menu('dog'),
        banner: {
            title: 'Cachorros',
            backgroundimage: 'banner_dog.jpg'
        },
        list
    });
}

export const cats = (request:Request,response:Response) => {
    let list = Pet.filterPets('cat');
    response.render('pages/page',{
        menu: menu('cat'),
        banner: {
            title: 'Gatos',
            backgroundimage: 'banner_cat.jpg'
        },
        list
    });
}

export const fishes = (request:Request,response:Response) => {
    let list = Pet.filterPets('fish')
    response.render('pages/page',{
        menu: menu('fish'),
        banner: {
            title: 'Peixes',
            backgroundimage: 'banner_fish.jpg'
        },
        list
    });
}