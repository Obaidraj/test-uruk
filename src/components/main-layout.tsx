import AppSidebar from "./app-sidebar";
import NavApp from "./nav-app";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
 <div className="flex h-full w-full">
   <AppSidebar/>
    <div className="flex flex-1 flex-col px-10 py-1 bg-gray-100">
     <NavApp/>
        <div className="flex flex-1">{children}</div>
        
    </div>

 </div>
  )
}
