import db from "../config/database.js";

export const obtenerConminatoriasDb = (result) => {
  db.query(
    "SELECT * FROM conminatorias WHERE oculto_conmi = 0",
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

export const obtenerConminatoriasIdDb = (id, result) => {
  db.query(
    "SELECT * FROM conminatorias WHERE id_conmi = ?",
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

export const insertarConminatoriaDb = (data, result) => {
  db.query("INSERT INTO conminatorias SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
      console.log("ERROR AL INSERTAR COMMINATORIA EN DB");
    } else {
      result(null, results);
      console.log(results);
      console.log("INSERTADA COMMINATORIA EN DB");
    }
  });
};

export const actualizarConminatoriaDb = (data, id, result) => {
  db.query(
    "UPDATE conminatorias SET\
        cud_conmi = ?,\
        nurej_conmi = ?,\
        fiscal_conmi = ?,\
        denunciado_conmi = ?,\
        denunciante_conmi = ?,\
        delito_conmi = ?,\
        fecha_notif_cd_conmi = ?,\
        fecha_notif_fiscal_conmi = ?,\
        tiempo_restante_conmi = ?,\
        realizado_conmi = ?\
        WHERE id_conmi = ?",
    [
      data.cud_conmi,
      data.nurej_conmi,
      data.fiscal_conmi,
      data.denunciado_conmi,
      data.denunciante_conmi,
      data.delito_conmi,
      data.fecha_notif_cd_conmi,
      data.fecha_notif_fiscal_conmi,
      data.tiempo_restante_conmi,
      data.realizado_conmi,
      id,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
        console.log("ERROR AL ACTUALIZAR COMMINATORIA EN DB");
      } else {
        result(null, results);
        console.log(results);
        console.log("COMMINATORIA ACTUALIZADA EN DB");
      }
    }
  );
};

export const ocultarConminatoriaDb = (id, result) => {
  db.query(
    "UPDATE conminatorias SET oculto_conmi = '1' WHERE id_conmi = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
        console.log("ERROR AL OCULTAR COMMINATORIA EN DB");
      } else {
        result(null, results);
        console.log(results);
        console.log("COMMINATORIA OCULTADA EN DB");
      }
    }
  );
};
