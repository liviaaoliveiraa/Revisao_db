import { Router } from 'express';
import * as comidasControllers from './../controllers/comidasControllers.js';

const router = Router();

router.get('/', comidasControllers.listarTodos);
router.get('/:id', comidasControllers.listarUm);
router.post('/', comidasControllers.criar);
router.delete('/:id',comidasControllers.deletar);
router.put('/:id', comidasControllers.atualizar)

export default router;