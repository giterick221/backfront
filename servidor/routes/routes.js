import express from "express";
import {
  listarConminatorias,
  listarConminatoriaId,
  crearConminatoria,
  actualizarConminatoria,
  ocultarConminatoria,
} from "../controllers/conminatorias.js";

import {
  listarFiscales,
  listarFiscalesId,
  crearFiscal,
  actualizarFiscal,
  ocultarFiscal,
} from "../controllers/fiscales.js";

const router = express.Router();

router.get("/conminatorias", listarConminatorias);
router.get("/conminatorias/:id", listarConminatoriaId);
router.post("/conminatorias", crearConminatoria);
router.put("/conminatorias/:id", actualizarConminatoria);
router.delete("/conminatorias/:id", ocultarConminatoria);

router.get("/fiscales", listarFiscales);
router.get("/fiscales/:id", listarFiscalesId);
router.post("/fiscales", crearFiscal);
router.put("/fiscales/:id", actualizarFiscal);
router.delete("/fiscales/:id", ocultarFiscal);

export default router;
