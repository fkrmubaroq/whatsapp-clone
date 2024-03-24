import Archive from "@/components/features/main/Archive";
import Chat from "@/components/features/main/Chat";
import ContactList from "@/components/features/main/ContactList";
import Header from "@/components/features/main/Header";
import HeaderChat from "@/components/features/main/HeaderChat";
import SearchContact from "@/components/features/main/SearchContact";

export default function Home() {
  return (
    <main id="main">
      <div id="sidebar">
        <Header />
        <SearchContact />
        <div
          className="overflow-auto h-[calc(100%-108px)]"
          id="wrapper-contacts"
        >
          <Archive />
          <ContactList />
        </div>
      </div>
      <div id="header-chat">
        <HeaderChat />
      </div>
      <div id="chat">
        <Chat />
      </div>
    </main>
  );
}
