import style from './Container.scss';

export default function Container({ children }) {
  return <div className={style.container}>{children}</div>;
}
