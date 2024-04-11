import { AttendeeList } from "./components/attendee-list";
import { Header } from "./components/header";

export function App({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
      <Header />
      {children}
    </div>
  )
}
