import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useAppStore } from "../stores/useAppStore";
import { useEffect } from "react";
import Notification from "../components/Notification";


export default function Layout() {

  const loadFromStorage = useAppStore((state) => state.loadFromStorage)

  useEffect(() => {
    loadFromStorage()
  }, []);

  return (
    <>
        <Header />
        <main className=" container mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6">
          <Outlet />
        </main>
        <Modal />
        <Notification />
    </>
  )
}
