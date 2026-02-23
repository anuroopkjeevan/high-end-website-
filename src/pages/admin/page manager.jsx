import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Edit3, Eye, Calendar, User, FileText } from "lucide-react";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
    </>
  );
};

export default PageManager;
