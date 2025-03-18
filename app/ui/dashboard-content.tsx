import ComingSoonBanner from "./coming-soon-banner";
import LogFilter from "./log/log-filter";
import LogView from "./log/log-view";

export default function DashboardContent() {
  return (
    <div className="flex flex-col h-full">
      <div>
        <ComingSoonBanner></ComingSoonBanner>
      </div>
      <div>
        <LogFilter></LogFilter>
      </div>
      <div className="h-full overflow-auto p-2 border border-emerald-500/25 rounded-lg shadow-md">
        <LogView></LogView>
      </div>
    </div>

  );
}
