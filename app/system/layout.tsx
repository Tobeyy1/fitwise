import NavBar from "./NavBar";
import classes from "./system.module.scss";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={classes.container}>
      {/* Include shared UI here e.g. a header or sidebar */}

      {children}
      <NavBar />
    </section>
  );
}
