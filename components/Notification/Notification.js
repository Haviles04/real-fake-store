import React from "react";
import Image from "next/image";
import styles from "@/styles/notification.module.css";
import { useNotification } from "@/hooks/notificationsHook/NotificationContextProvider";
import { GrClose } from "react-icons/gr";
import Link from "next/link";

function Notification() {
  const { showNotification, setShowNotification, notificationItem } =
    useNotification();

  return (
    <>
      {showNotification && (
        <div
          className={styles.screenOverlay}
          onClick={() => setShowNotification(false)}
        >
          <div
            className={styles.notificationContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <h1>Added to cart!</h1>
            <h2>{notificationItem.title}</h2>
            <Image
              width={250}
              height={250}
              alt={notificationItem.title}
              src={notificationItem.images[0]}
            ></Image>
            <button onClick={() => setShowNotification(false)}>
              Continue Shopping!
            </button>
            <Link href="/cart" passHref>
              <button onClick={() => setShowNotification(false)}>
                Go to cart!
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Notification;
