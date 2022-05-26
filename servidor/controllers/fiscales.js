import {
  obtenerFiscalesDb,
  obtenerFiscalesIdDb,
  insertarFiscalDb,
  actualizarFiscalDb,
  ocultarFiscalDb,
} from "../models/fiscalModel.js";

export const listarFiscales = (req, res) => {
  obtenerFiscalesDb((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const listarFiscalesId = (req, res) => {
  obtenerFiscalesIdDb(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const crearFiscal = (req, res) => {
  const data = req.body;
  insertarFiscalDb(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const actualizarFiscal = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  actualizarFiscalDb(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const ocultarFiscal = (req, res) => {
  const id = req.params.id;
  ocultarFiscalDb(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
