import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Edit3, Eye, Calendar, User, FileText, ImagePlus, Trash2, Upload, X } from "lucide-react";
import PageEditor from "../../components/cms/PageEditor";
import { getAllPages } from "../../data/pageTemplates";
import { cmsApi } from "../../services/api";

const templateMap = getAllPages().reduce((acc, page) => {
  acc[page.id] = page;
  return acc;
}, {});

const mapApiPageToUi = (page) => {
  const template = templateMap[page.page_key] || {};
  const slug = template.slug || (page.slug ? `/${page.slug.replace(/^\/+/, "")}` : page.page_key === "home" ? "/" : `/${page.page_key}`);
  return {
    id: page.page_key,
    dbId: page.id,
    title: page.title || template.title || page.page_key,
    slug,
    author: page.updated_by || "Admin",
    lastEdited: page.updated_at ? page.updated_at.slice(0, 10) : new Date().toISOString().slice(0, 10),
    edits: page.edits || {},
  };
};

const PageManager = () => {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [showCreativeManager, setShowCreativeManager] = useState(false);
  const [creativeItems, setCreativeItems] = useState([]);
  const [creativeLoading, setCreativeLoading] = useState(false);
  const [creativeSaving, setCreativeSaving] = useState(false);
  const [creativeUploading, setCreativeUploading] = useState(false);
  const [creativeMessage, setCreativeMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [creativeForm, setCreativeForm] = useState({
    title: "",
    category: "",
    image_url: "",
    link_url: "",
    sort_order: 0,
    is_active: true,
  });

  useEffect(() => {
    const loadPages = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await cmsApi.listPages();
        setPages(data.map(mapApiPageToUi));
      } catch (err) {
        const message = err?.response?.data?.detail || "Failed to load pages from backend.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    loadPages();
  }, []);

  const handleEditPage = (page) => {
    setSelectedPage(page);
    setShowEditor(true);
  };

  const openCreativeManager = async () => {
    setShowCreativeManager(true);
    setCreativeMessage("");
    setError("");
    try {
      setCreativeLoading(true);
      const data = await cmsApi.listCreatives();
      setCreativeItems(data || []);
      setCreativeForm((prev) => ({ ...prev, sort_order: data?.length || 0 }));
    } catch (err) {
      const message = err?.response?.data?.detail || "Failed to load creatives.";
      setError(message);
    } finally {
      setCreativeLoading(false);
    }
  };

  const handleCreativeUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      setCreativeUploading(true);
      setCreativeMessage("");
      const data = await cmsApi.uploadCreativeImage(file);
      setCreativeForm((prev) => ({ ...prev, image_url: data.url || "" }));
      setCreativeMessage("Image uploaded. Click Save Creative.");
    } catch (err) {
      setError(err?.response?.data?.detail || "Image upload failed.");
    } finally {
      setCreativeUploading(false);
    }
  };

  const handleCreateCreative = async (event) => {
    event.preventDefault();
    if (!creativeForm.image_url.trim()) {
      setError("Image URL is required.");
      return;
    }

    try {
      setCreativeSaving(true);
      setCreativeMessage("");
      const created = await cmsApi.createCreative({
        ...creativeForm,
        sort_order: Number(creativeForm.sort_order) || 0,
      });
      const next = [...creativeItems, created].sort((a, b) => (a.sort_order - b.sort_order) || (a.id - b.id));
      setCreativeItems(next);
      setCreativeForm({
        title: "",
        category: "",
        image_url: "",
        link_url: "",
        sort_order: next.length,
        is_active: true,
      });
      setCreativeMessage("Creative saved as current.");
    } catch (err) {
      setError(err?.response?.data?.detail || "Failed to save creative.");
    } finally {
      setCreativeSaving(false);
    }
  };

  const handleDeleteCreative = async (creativeId) => {
    try {
      await cmsApi.deleteCreative(creativeId);
      setCreativeItems((prev) => prev.filter((item) => item.id !== creativeId));
      setCreativeMessage("Creative deleted.");
    } catch (err) {
      setError(err?.response?.data?.detail || "Failed to delete creative.");
    }
  };

  const handleSavePage = async ({ pageId, edits }) => {
    try {
      const updated = await cmsApi.updatePage(pageId, { edits });
      const updatedUi = mapApiPageToUi(updated);
      setPages((prev) => prev.map((p) => (p.id === pageId ? updatedUi : p)));
      setSelectedPage((prev) => (prev && prev.id === pageId ? updatedUi : prev));
      return updatedUi;
    } catch (err) {
      const message = err?.response?.data?.detail || "Failed to save page.";
      setError(message);
      throw err;
    }
  };

  return (
    <>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Page Manager</h1>
            <p className="text-gray-400 mt-2">{pages.length} pages available - Click edit to modify content</p>
          </div>
        </div>

        {loading && <div className="mb-4 text-sm text-gray-400">Loading pages from backend...</div>}
        {error && (
          <div className="mb-4 rounded-lg border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => (
            <motion.div
              key={page.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1e1e24] rounded-xl border border-white/[0.05] overflow-hidden hover:border-[#7c7adb]/30 transition-all"
            >
              <div className="h-32 bg-gradient-to-br from-[#7c7adb]/20 to-[#a3a1f7]/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-[#7c7adb]/30" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-1">{page.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{page.slug}</p>

                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {page.lastEdited}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {page.author}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditPage(page)}
                    className="flex-1 px-4 py-2 bg-[#7c7adb] text-white rounded-lg text-sm font-medium hover:bg-[#6a6ac9] transition flex items-center justify-center gap-2"
                  >
                    <Edit3 className="w-4 h-4" />
                    Edit Page
                  </button>
                  <button
                    onClick={() => window.open(page.slug, "_blank")}
                    className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition"
                    title="View Live"
                  >
                    <Eye className="w-4 h-4 text-gray-400" />
                  </button>
                </div>

                {page.id === "portfolio" && (
                  <button
                    onClick={openCreativeManager}
                    className="mt-2 w-full px-4 py-2 bg-white/5 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition flex items-center justify-center gap-2 border border-white/10"
                  >
                    <ImagePlus className="w-4 h-4" />
                    Add Creative
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
          <p className="text-sm text-emerald-300 text-center">
            <span className="font-bold">Connected Mode:</span> Page edits are saved via Django REST API.
          </p>
        </div>
      </div>

      {showEditor && selectedPage && (
        <PageEditor
          page={selectedPage}
          onSave={handleSavePage}
          initialEdits={selectedPage.edits || {}}
          onClose={() => {
            setShowEditor(false);
            setSelectedPage(null);
          }}
        />
      )}

      {showCreativeManager && (
        <div className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-sm p-4 lg:p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto bg-[#121214] border border-white/10 rounded-2xl overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Portfolio Creatives</h3>
                <p className="text-xs text-gray-400">Add extra creatives directly from Page Manager.</p>
              </div>
              <button onClick={() => setShowCreativeManager(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
              {creativeMessage && (
                <div className="mb-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
                  {creativeMessage}
                </div>
              )}

              <form onSubmit={handleCreateCreative} className="mb-5 rounded-xl border border-white/10 bg-black/20 p-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <input
                    value={creativeForm.title}
                    onChange={(e) => setCreativeForm((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="Title (optional)"
                    className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white"
                  />
                  <input
                    value={creativeForm.category}
                    onChange={(e) => setCreativeForm((prev) => ({ ...prev, category: e.target.value }))}
                    placeholder="Category (optional)"
                    className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white"
                  />
                  <input
                    type="number"
                    value={creativeForm.sort_order}
                    onChange={(e) => setCreativeForm((prev) => ({ ...prev, sort_order: e.target.value }))}
                    placeholder="Sort order"
                    className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white"
                  />
                  <input
                    value={creativeForm.image_url}
                    onChange={(e) => setCreativeForm((prev) => ({ ...prev, image_url: e.target.value }))}
                    placeholder="Image URL (required)"
                    className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white md:col-span-2"
                  />
                  <input
                    value={creativeForm.link_url}
                    onChange={(e) => setCreativeForm((prev) => ({ ...prev, link_url: e.target.value }))}
                    placeholder="Link URL (optional)"
                    className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white"
                  />
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <label className="inline-flex items-center gap-2 text-sm text-gray-300">
                    <input
                      type="checkbox"
                      checked={creativeForm.is_active}
                      onChange={(e) => setCreativeForm((prev) => ({ ...prev, is_active: e.target.checked }))}
                    />
                    Active
                  </label>

                  <label className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-white cursor-pointer hover:bg-white/10">
                    <Upload className="w-4 h-4" />
                    {creativeUploading ? "Uploading..." : "Upload Image"}
                    <input type="file" accept="image/*" className="hidden" onChange={handleCreativeUpload} />
                  </label>

                  <button
                    type="submit"
                    disabled={creativeSaving}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#7c7adb] text-white text-sm hover:bg-[#6a6ac9] disabled:opacity-60"
                  >
                    <ImagePlus className="w-4 h-4" />
                    {creativeSaving ? "Saving..." : "Save Creative"}
                  </button>
                </div>
              </form>

              {creativeLoading ? (
                <div className="text-sm text-gray-400">Loading creatives...</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {creativeItems.map((item) => (
                    <div key={item.id} className="rounded-xl border border-white/10 bg-[#0f0f11] overflow-hidden">
                      <div className="aspect-[4/3] bg-black/30">
                        <img src={item.image_url} alt={item.title || "Creative"} className="w-full h-full object-contain p-2" />
                      </div>
                      <div className="p-3 text-xs text-gray-300">
                        <div>Category: {item.category || "Uncategorized"}</div>
                        <div>Order: {item.sort_order}</div>
                      </div>
                      <div className="px-3 pb-3">
                        <button
                          onClick={() => handleDeleteCreative(item.id)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-red-500/30 text-red-300 text-xs hover:bg-red-500/10"
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
          </div>
        </div>
      )}
    </>
  );
};

export default PageManager;
