import Link from "next/link";
import { useRouter } from "next/router";
const Layout = () => {
  const router = useRouter();
  return (
    <>
      <div className="navHeader" onClick={() => router.push("/")}>
        <img
          className="navImage"
          src="https://cdn-icons.flaticon.com/png/512/2708/premium/2708780.png?token=exp=1650354471~hmac=7d6a3f7f8a1e9ff7c5e6dabc4684012e"
          alt="logo"
        />
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
