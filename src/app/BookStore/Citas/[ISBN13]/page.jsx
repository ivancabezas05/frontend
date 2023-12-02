import librosData from "../../../../../public/fakeData/library.json";
import styles from "../../../../styles/details.module.css";
import CitasPage from "@/app/components/citas";
export const dynamicParams = true;

export async function generateStaticParams() {
  return librosData;
}

function getBook(params) {
  const libro = librosData.find((libro) => libro.ISBN13 === params.ISBN13);
  return libro;
}

export default async function LibroDetalle({ params }) {
  const book = getBook(params);
  return (
    <section className={styles.detailContainer}>
    <div className={styles.title}>
      <span>Citas</span>
    </div>
    <CitasPage book={book}/>
    </section>
  )
}
