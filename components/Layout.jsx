import Logo from "../src/images/journal.png";
import { useRouter } from "next/router";
const Layout = () => {
  const router = useRouter();
  return (
    <>
      <div className="navHeader" onClick={() => router.push("/")}>
        Your Journal
      </div>
      <div className="navLink">
        <a className="hover-underline-animation" href="/">
          POSTS{" "}
        </a>
        <a className="hover-underline-animation" href="/addPage">
          ADD POST
        </a>
      </div>
    </>
  );
};
export default Layout;
