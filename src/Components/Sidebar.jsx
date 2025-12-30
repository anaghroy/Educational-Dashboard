
import {
  Home,
  Settings,
  MailPlus,
  BookMarked,
  BellDot,
  KeyboardMusic,
  MessageCircleCode,
  BellMinus,
  LogOut,
} from "lucide-react";
import profile from '../assets/images/profile.jpg'
const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Center icons */}
      <nav className="sidebar-menu">
        <div className="menu-item active">
          <Home size={20} />
        </div>
        <div className="menu-item">
          <MailPlus size={20} />
        </div>
        <div className="menu-item">
          <BookMarked size={20} />
        </div>
        <div className="menu-item">
          <BellDot size={20} />
        </div>
        <div className="menu-item">
          <KeyboardMusic size={20} />
        </div>
      </nav>
      <nav className="sidebar-menu-2">
        <div className="menu-item">
          <MessageCircleCode size={20} />
        </div>
        <div className="menu-item">
          <BellMinus size={20} />
        </div>
        <div className="menu-item">
          <Settings size={20} />
        </div>
      </nav>
      {/* Bottom icons */}
      <div className="sidebar-bottom">
        <div className="menu-item">
          <LogOut size={20} />
        </div>
        <div className="profile">
          <img src={profile} alt="user" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
