import style from '../Container/Container.module.scss';

export default function Container({ children }) {
  return <div className={style.container}>{children}</div>;
}
