import { Router } from "express";

import {
  login
} from "../controllers/seguridad.controller";
import {
  listadoCombos
} from "../controllers/utils.controller";
import {
  listadoClientes,crea_edita_Clientes,elimina_Clientes
  , listadoProductos
  , listadoProveedores, crea_edita_Proveedores, elimina_Proveedores
} from "../controllers/dashboard.controller";

const router = Router();

/*                  LOGIN                  */
router.post("/login", login);

/*                  -----                  */
/*                DASHBOARD                */
router.post("/dashboard/listadoClientes", listadoClientes);
router.post("/dashboard/crea_edita_Clientes", crea_edita_Clientes);
router.put("/dashboard/elimina_Clientes", elimina_Clientes);

router.post("/dashboard/listadoProductos", listadoProductos);

router.post("/dashboard/listadoProveedores", listadoProveedores);
router.post("/dashboard/crea_edita_Proveedores", crea_edita_Proveedores);
router.put("/dashboard/elimina_Proveedores", elimina_Proveedores);

/*                  -----                  */


/*                 COMBOS                  */
router.post("/utils/listadoCombos", listadoCombos);

/*                  -----                  */
export default router;
