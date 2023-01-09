import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function useNotification() {
  return useContext(NotificationContext);
}

export default function NotificationContextProvider({ children }) {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationItem, setNotificationItem] = useState(null);

  return (
    <NotificationContext.Provider value={{ showNotification, setShowNotification, notificationItem, setNotificationItem }}>
      {children}
    </NotificationContext.Provider>
  );
}
