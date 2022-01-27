import OverViewContent from "../../components/organisms/OverViewContent";
import SideBar from "../../components/organisms/SideBar";

export default function Overview() {
  return (
    <section className="overview overflow-auto">
      <SideBar />
      <OverViewContent />
    </section>
  );
}
