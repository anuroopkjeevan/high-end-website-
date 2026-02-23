import React, { useEffect, useMemo, useState } from "react";
import { Activity, Eye, MousePointerClick, Users } from "lucide-react";
import StatCard from "../../components/cms/StatCard";
import { cmsApi } from "../../services/api";

const formatDate = (d) => d.toISOString().slice(0, 10);

const Dashboard = () => {
  const defaultRange = useMemo(() => {
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() - 6);
    return { from: formatDate(start), to: formatDate(today) };
  }, []);

  const [fromDate, setFromDate] = useState(defaultRange.from);
  const [toDate, setToDate] = useState(defaultRange.to);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadStats = async (from, to) => {
    try {
      setLoading(true);
      setError("");
      const data = await cmsApi.getDashboardStats({ from, to });
      setStats(data);
    } catch (err) {
      setError(err?.response?.data?.detail || "Failed to load dashboard stats.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStats(fromDate, toDate);
  }, [fromDate, toDate]);

  const summary = stats?.summary || {
    live_users: 0,
    unique_users: 0,
    total_interactions: 0,
    page_views: 0,
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Live Dashboard</h1>
          <p className="text-sm text-gray-400">Live users + interactions with custom date filters.</p>
        </div>
        <div className="flex flex-wrap items-end gap-3">
          <div className="flex flex-col">
            <label className="text-xs text-gray-400 mb-1">From</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="bg-[#121214] border border-white/10 rounded-lg px-3 py-2 text-sm text-white"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-400 mb-1">To</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="bg-[#121214] border border-white/10 rounded-lg px-3 py-2 text-sm text-white"
            />
          </div>
          <button
            onClick={() => loadStats(fromDate, toDate)}
            className="px-4 py-2 rounded-lg bg-[#7c7adb] text-white text-sm font-semibold hover:bg-[#6a6ac9]"
          >
            Refresh
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 rounded-lg border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard label="Live Users (5m)" value={loading ? "..." : String(summary.live_users)} icon={Activity} color="#34d399" />
        <StatCard label="Unique Users" value={loading ? "..." : String(summary.unique_users)} icon={Users} color="#7c7adb" />
        <StatCard label="Interactions" value={loading ? "..." : String(summary.total_interactions)} icon={MousePointerClick} color="#a3a1f7" />
        <StatCard label="Page Views" value={loading ? "..." : String(summary.page_views)} icon={Eye} color="#f59e0b" />
      </div>

      <div className="mt-8 bg-[#121214] border border-white/[0.05] rounded-2xl p-5">
        <h2 className="text-lg font-semibold mb-4">Top Pages</h2>
        {loading ? (
          <p className="text-sm text-gray-400">Loading...</p>
        ) : (stats?.top_pages || []).length === 0 ? (
          <p className="text-sm text-gray-400">No interaction data in selected range.</p>
        ) : (
          <div className="space-y-3">
            {stats.top_pages.map((item) => (
              <div key={item.page_path} className="flex items-center justify-between text-sm">
                <span className="text-gray-200">{item.page_path}</span>
                <span className="text-gray-400">
                  {item.interactions} interactions • {item.users} users
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
