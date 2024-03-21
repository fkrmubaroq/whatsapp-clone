import Archieve from "@/components/features/main/Archieve";
import ContactList from "@/components/features/main/ContactList";
import ConversationChat from "@/components/features/main/ConversationChat";
import Header from "@/components/features/main/Header";
import HeaderChat from "@/components/features/main/HeaderChat";
import SearchContact from "@/components/features/main/SearchContact";

export default function Home() {
  return (
    <main id="main">
      <div id="sidebar">
        <Header />
        <SearchContact />
        <Archieve />
        <ContactList />
      </div>
      <div id="header-chat">
        <HeaderChat />
      </div>
      <div id="chat">
        <ConversationChat />
      </div>
    </main>
  );
}
