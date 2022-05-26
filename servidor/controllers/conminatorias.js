import {
  obtenerConminatoriasDb,
  obtenerConminatoriasIdDb,
  insertarConminatoriaDb,
  actualizarConminatoriaDb,
  ocultarConminatoriaDb,
} from "../models/conminatoriaModel.js";

export const listarConminatorias = (req, res) => {
  obtenerConminatoriasDb((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const listarConminatoriaId = (req, res) => {
  obtenerConminatoriasIdDb(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const crearConminatoria = (req, res) => {
  const data = req.body;
  insertarConminatoriaDb(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const actualizarConminatoria = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  actualizarConminatoriaDb(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const ocultarConminatoria = (req, res) => {
  const id = req.params.id;
  ocultarConminatoriaDb(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
