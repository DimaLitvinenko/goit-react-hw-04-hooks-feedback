import style from '../Section/Section.module.scss';

export default function Section({ title, children }) {
  return (
    <section className={style.section}>
      <h2 className={style.title}>{title}</h2>
      {children}
    </section>
  );
}
