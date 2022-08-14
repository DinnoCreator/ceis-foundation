import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <p>
        <a href="mailto:theceisfoundation@gmail.com">
          <span className={classes.footerIcon}>
            <i className="fa-brands fa-twitter"></i>
          </span>
        </a>
        <a href="mailto:theceisfoundation@gmail.com">
          <span className={classes.footerIcon}>
            <i className="fa-brands fa-facebook-f"></i>
          </span>
        </a>
        <a href="mailto:theceisfoundation@gmail.com">
          <span className={classes.footerIcon}>
            <i className="fa-brands fa-instagram"></i>
          </span>
        </a>
        <a href="mailto:theceisfoundation@gmail.com">
          <span className={classes.footerIcon}>
            <i className="fa-solid fa-envelope"></i>
          </span>
        </a>
      </p>
      <p>
        ©2022 Copyright CEIS-Foundation <br />
        All rights reserved by <strong>Edify I.T</strong>
      </p>
    </footer>
  );
}
