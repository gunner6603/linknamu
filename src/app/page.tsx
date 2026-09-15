import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import DarkModeToggle from "@/components/DarkModeToggle";
import { profile, links } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-sm flex-col items-center justify-center gap-10 px-6 py-16 sm:px-8">
      <div className="fixed right-5 top-5 sm:right-8 sm:top-8">
        <DarkModeToggle />
      </div>
      <Profile {...profile} />
      <LinkList links={links} />
    </main>
  );
}
