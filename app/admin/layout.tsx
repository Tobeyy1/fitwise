import NavBar from "../components/NavBar/NavBar";
import classes from "./admin.module.scss";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={classes.container}>
      {/* Include shared UI here e.g. a header or sidebar */}

      {children}
      <NavBar role="admin" />
    </section>
  );
}
