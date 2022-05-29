import db from "../config/database.js";

export const obtenerFiscalesDb = (result) => {
  db.query(
    "SELECT * FROM usuarios u INNER JOIN tipo_usuario tu WHERE u.id_usuario = tu.id_usuario_tipo AND tu.tipo_usuario='fiscal' AND oculto_usuario='0'",
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

export const obtenerFiscalesIdDb = (id, result) => {
  db.query(
    "SELECT * FROM usuarios WHERE oculto_usuario='0' AND id_usuario = ? ",
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
  db.query("INSERT INTO usuarios SET ?", [data], (err, results) => {
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
    "UPDATE usuarios SET\
        ci_usuario = ?,\
        nombre_completo_usuario = ?,\
        telefono_usuario = ?\
        WHERE id_usuario = ?",
    [data.ci_usuario, data.nombre_completo_usuario, data.telefono_usuario, id],
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
  db.query(
    "UPDATE usuarios SET oculto_usuario = '1' WHERE id_usuario = ?",
    [id],
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
