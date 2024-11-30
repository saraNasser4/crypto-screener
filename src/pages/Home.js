import Logo from '../components/Logo'
import NavBar from '../components/NavBar'
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <main className="w-full h-full flex items-center flex-col font-nunito text-white relative">
        <div className="w-screen h-screen bg-gray-300 fixed -z-10" />
        <Logo />
        <NavBar />
        <Outlet />
    </main>
  )
}
