import { useCallback } from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const onHOMEClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='n1Image']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onABOUTClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aBOUTText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTOKENOMICSClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='tOKENOMICSText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCOMMUNITYClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='cOMMUNITYText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <nav className={styles.navbar} id="Nav">
      <button className={styles.home} onClick={onHOMEClick}>
        HOME
      </button>
      <button className={styles.about} onClick={onABOUTClick}>
        ABOUT
      </button>
      <button className={styles.tokenomics} onClick={onTOKENOMICSClick}>
        TOKENOMICS
      </button>
      <button className={styles.community} onClick={onCOMMUNITYClick}>
        COMMUNITY
      </button>
    </nav>
  );
};

export default Navbar;
