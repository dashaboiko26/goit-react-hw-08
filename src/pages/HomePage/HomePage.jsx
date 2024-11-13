import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.wrapper}>
        <div className={css.content}>
          <h1 className={css.title}>PhoneBook</h1>
        </div>
      </div>
    </>
  );
}
