import React, { useEffect, useState } from "react";
import { ImagePlus, Loader2, RefreshCcw, Trash2 } from "lucide-react";
import { cmsApi } from "../../services/api";

const emptyForm = {
  title: "",
  category: "",
  image_url: "",
  link_url: "",
  sort_order: 0,
  is_active: true,
};

const Creatives = () => {
  const [creatives, setCreatives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState(emptyForm);

  const loadCreatives = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await cmsApi.listCreatives();
      setCreatives(data || []);
    } catch (err) {
      setError(err?.response?.data?.detail || "Failed to load creatives.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCreatives();
  }, []);

  const handleCreate = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    if (!form.image_url.trim()) {
      setError("Image URL is required.");
      return;
    }

    try {
      setSubmitting(true);
      const payload = {
        ...form,
        sort_order: Number(form.sort_order) || 0,
      };
      const created = await cmsApi.createCreative(payload);
      setCreatives((prev) => [...prev, created].sort((a, b) => (a.sort_order - b.sort_order) || (a.id - b.id)));
      setForm(emptyForm);
      setMessage("Creative added.");
    } catch (err) {
      setError(err?.response?.data?.detail || "Failed to add creative.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggleActive = async (creative) => {
    try {
      const updated = await cmsApi.updateCreative(creative.id, { is_active: !creative.is_active });
      setCreatives((prev) => prev.map((item) => (item.id === creative.id ? updated : item)));
    } catch (err) {
      setError(err?.response?.data?.detail || "Failed to update creative.");
    }
  };

  const handleDelete = async (creative) => {
    try {
      await cmsApi.deleteCreative(creative.id);
      setCreatives((prev) => prev.filter((item) => item.id !== creative.id));
      setMessage("Creative deleted.");
    } catch (err) {
      setError(err?.response?.data?.detail || "Failed to delete creative.");
    }
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white">Creatives</h1>
          <p className="text-gray-400 mt-1">Add and manage portfolio creative images.</p>
        </div>
        <button
          onClick={loadCreatives}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 hover:bg-white/10"
        >
          <RefreshCcw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      {error && <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</div>}
      {message && <div className="mb-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">{message}</div>}

      <form onSubmit={handleCreate} className="mb-8 rounded-2xl border border-white/10 bg-[#121214] p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <input
            value={form.title}
            onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
            placeholder="Title (optional)"
            className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white"
          />
          <input
            value={form.category}
            onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
            placeholder="Category (optional)"
            className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white"
          />
          <input
            value={form.sort_order}
            onChange={(e) => setForm((prev) => ({ ...prev, sort_order: e.target.value }))}
            type="number"
            placeholder="Sort order"
            className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white"
          />
          <input
            value={form.image_url}
            onChange={(e) => setForm((prev) => ({ ...prev, image_url: e.target.value }))}
            placeholder="Image URL (required)"
            className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white md:col-span-2"
          />
          <input
            value={form.link_url}
            onChange={(e) => setForm((prev) => ({ ...prev, link_url: e.target.value }))}
            placeholder="Link URL (optional)"
            className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white"
          />
        </div>
        <label className="mt-3 inline-flex items-center gap-2 text-sm text-gray-300">
          <input
            type="checkbox"
            checked={form.is_active}
            onChange={(e) => setForm((prev) => ({ ...prev, is_active: e.target.checked }))}
          />
          Active
        </label>
        <div className="mt-4">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-lg bg-[#7c7adb] px-4 py-2 text-sm font-medium text-white hover:bg-[#6e6cce] disabled:opacity-60"
          >
            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImagePlus className="w-4 h-4" />}
            Add New Creative
          </button>
        </div>
      </form>

      {loading ? (
        <div className="text-sm text-gray-400">Loading creatives...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {creatives.map((creative) => (
            <div key={creative.id} className="rounded-xl border border-white/10 bg-[#121214] overflow-hidden">
              <div className="aspect-[4/3] bg-black/30">
                <img src={creative.image_url} alt={creative.title || "Creative"} className="w-full h-full object-contain p-2" />
              </div>
              <div className="p-3 text-xs text-gray-300 space-y-1">
                <div>ID: {creative.id}</div>
                <div>Category: {creative.category || "Uncategorized"}</div>
                <div>Order: {creative.sort_order}</div>
                <div>Status: {creative.is_active ? "Active" : "Hidden"}</div>
              </div>
              <div className="px-3 pb-3 flex items-center gap-2">
                <button
                  onClick={() => handleToggleActive(creative)}
                  className="rounded-md border border-white/15 px-3 py-1.5 text-xs text-white hover:bg-white/10"
                >
                  {creative.is_active ? "Hide" : "Show"}
                </button>
                <button
                  onClick={() => handleDelete(creative)}
                  className="inline-flex items-center gap-1 rounded-md border border-red-400/30 px-3 py-1.5 text-xs text-red-300 hover:bg-red-500/10"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Creatives;
