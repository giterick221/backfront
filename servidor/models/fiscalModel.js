import db from "../config/database.js";

export const obtenerFiscalesDb = (result) => {
  db.query("SELECT * FROM fiscales WHERE oculto = 0", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const obtenerFiscalesIdDb = (id, result) => {
  db.query(
    "SELECT * FROM fiscales WHERE ci_fiscal = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

export const insertarFiscalDb = (data, result) => {
  db.query("INSERT INTO fiscales SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const actualizarFiscalDb = (data, id, result) => {
  db.query(
    "UPDATE comminatorias SET\
        cud = ?,\
        nurej = ?,\
        fiscal = ?,\
        denunciado = ?,\
        denunciante = ?,\
        delito = ?,\
        fecha_notif_cd = ?,\
        fecha_notif_fiscal = ?,\
        realizado = ?,\
        tiempo_restante = ?\
        WHERE id_conminatoria = ?",
    [
      data.cud,
      data.nurej,
      data.fiscal,
      data.denunciado,
      data.denunciante,
      data.delito,
      data.fecha_notif_cd,
      data.fecha_notif_fiscal,
      data.realizado,
      data.tiempo_restante,
      id,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

export const ocultarFiscalDb = (id, result) => {
  db.query("DELETE FROM fiscales WHERE ci_fiscal = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
