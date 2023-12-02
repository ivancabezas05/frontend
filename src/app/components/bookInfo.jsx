"use client";
import styles from "../../styles/details.module.css";
import { useState, useEffect } from "react";
export default function BookInfo({ book,isDisponible }) {
  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   let categoriasArr;
  //   book.categoria
  //     ? (categoriasArr = book.categoria.split(/\s{2,}/))
  //     : (categoriasArr = []);
  //   setCategories([...categoriasArr]);
  // }, []);

  return (
    <article className={styles.bookInfo}>
      <div className={styles.bookInfo_header}>
        {/* <h1>{book.titulo}</h1> */}
        <p className={styles.estado}>{isDisponible?"Disponible":"Reservado"}</p>
      </div>
      <div className={styles.bookInfo_details}>
        {/* <img
          src={book.imagen?book.imagen:"/media/mona.jpg"}
          alt="foto del libro"
          className={styles.imgBook}
        /> */}
        <p className={styles.descpBook}>
          Este libro sólo tiene un objetivo principal: provocar el inicio de un
          nuevo campo de estudio: la programación informática como actividad
          humana o, en pocas palabras, la psicología de la programación
          informática. Todos los demás objetivos están subordinados a éste. Por
          ejemplo, he intentado que el libro sea interesante y no técnico, en la
          medida de lo posible, para animar al mayor número posible de personas
          a leerlo: no sólo programadores, sino gestores de programación y otras
          personas relacionadas con la programación en las muchas formas en que
          estamos relacionados con la programación hoy en día. Lo que intento
          conseguir es que el lector diga, al terminar el libro: "Sí, la
          programación no es sólo una cuestión de hardware y software. A partir
          de ahora tendré que ver las cosas de otra manera".
        </p>
        <div className={styles.editorial}>
          <h2>Editorial</h2>
          {/* <p>{book.editorial?book.editorial:"No hay información"}</p> */}
        </div>
      </div>
      <div className={styles.bookInfo_topic}>
        <h2>Tópicos</h2>
        {categories.length > 0?(
        <div className={styles.categoryTagContainer}>
          {categories.map((category, index) => (
            <div key={index} className={styles.categoryTag}>
              {category}
            </div>
          ))}
        </div>):
        <p>No hay informacion sobre las categorias</p>}
      </div>
    </article>
  );
}
