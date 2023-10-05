import { Router } from 'express';
import * as page from '../controllers/page';
import * as search from '../controllers/search';


const router = Router();
router.get('/',page.home);
router.get('/dogs',page.dogs);
router.get('/cats',page.cats);
router.get('/fishes',page.fishes);
router.get('/search',search.search);


export default router;