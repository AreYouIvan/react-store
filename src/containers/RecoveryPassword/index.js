import React from "react";
import styles from "./RecoveryPassword.scss";
import Image from "next/image";
import Link from "next/link";
const RecoveryPassword = () => {
  return (
    <>
      <div className={styles.login}>
        <div className={styles["form-container"]}>
          <Image
            src="./logos/logo_yard_sale.svg"
            alt="logo"
            className={styles.logo}
          />
          <h1 className={styles.title}>Email has been sent!</h1>
          <p className={styles.subtitle}>
            Please check your inbox for instructions on how to reset the
            password
          </p>
          <div className={styles["email-image"]}>
            <Image src="./icons/email.svg" alt="email" />
          </div>
          <button
            className={`${styles["primary-button"]} ${styles["login-button"]}`}
          >
            Login
          </button>
          <p className="resend">
            <span>Didn&apos;t receive the email?</span>
            <Link href="/">Resend</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export { RecoveryPassword };
