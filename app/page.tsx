import Welcome from "./components/Welcome/Welcome";
import classes from "./page.module.css";

export default function Home() {
  return (
    <main className={classes.container}>
      <Welcome />
    </main>
  );
}
