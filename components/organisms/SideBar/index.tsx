import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SideBarProps {
  activeMenu: "overview" | "transactions" | "settings";
}

export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="ic-menu-overview"
            active={activeMenu === "overview"}
            href="/member/overview"
          />
          <MenuItem
            title="Transaction"
            icon="ic-menu-transaction"
            active={activeMenu === "transactions"}
            href="/member/transactions"
          />
          <MenuItem title="Messages" icon="ic-menu-messages" href="/member" />
          <MenuItem title="Card" icon="ic-menu-card" href="/member" />
          <MenuItem title="Rewards" icon="ic-menu-rewards" href="/member" />
          <MenuItem
            title="Settings"
            icon="ic-menu-settings"
            active={activeMenu === "settings"}
            href="/member/edit-profile"
          />
          <MenuItem title="Logout" icon="ic-menu-logout" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
