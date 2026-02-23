import React, { useState, useEffect, useRef } from 'react';
import PageRenderer from './PageRenderer';
import { X, MousePointer2, Image as ImageIcon, Type, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

const PageEditor = ({ page, onSave, onClose, initialEdits = {} }) => {
  const [selectedElementId, setSelectedElementId] = useState(null);
  const [editedElement, setEditedElement] = useState(null);
  const [pageEdits, setPageEdits] = useState(initialEdits);
  const [dirtyEdits, setDirtyEdits] = useState({});
  const [saveState, setSaveState] = useState('idle');
  const [saveMessage, setSaveMessage] = useState('');
  const fileInputRef = useRef(null);
  const lastPageIdRef = useRef(page?.id);

  useEffect(() => {
    setPageEdits(initialEdits || {});
    setDirtyEdits({});

    // Only reset popup state when switching to a different page.
    if (lastPageIdRef.current !== page?.id) {
      setSaveState('idle');
      setSaveMessage('');
      lastPageIdRef.current = page?.id;
    }
  }, [page?.id, initialEdits]);

  const handleElementSelect = (id, type, props) => {
    console.log("Selected:", { id, type, props });
    const savedProps = pageEdits[id] || {};
    setSelectedElementId(id);
    setEditedElement({ 
      id,
      type, 
      props: { ...props, ...savedProps }
    });
  };

  const handlePropChange = (key, value) => {
    setEditedElement((prev) => {
      if (!prev) return prev;

      const updatedProps = { ...prev.props, [key]: value };
      const next = { ...prev, props: updatedProps };

      setPageEdits((prevEdits) => ({
        ...prevEdits,
        [prev.id]: {
          ...(prevEdits[prev.id] || {}),
          [key]: value
        }
      }));
      setDirtyEdits((prevDirty) => ({
        ...prevDirty,
        [prev.id]: {
          ...(prevDirty[prev.id] || {}),
          [key]: value,
        },
      }));

      return next;
    });
  };

  const handleSave = async () => {
    try {
      setSaveState('saving');
      setSaveMessage('');
      await onSave?.({
        pageId: page?.id,
        edits: dirtyEdits
      });
      setDirtyEdits({});
      setSaveState('saved');
      setSaveMessage('Saved successfully');
    } catch (error) {
      setSaveState('error');
      setSaveMessage(error?.response?.data?.detail || 'Failed to save changes');
    }
  };

  // Determine what type of editor to show
  const getEditorType = () => {
    if (!editedElement) return null;
    
    if (editedElement.props?.src || editedElement.type?.toLowerCase().includes('img')) {
      return 'image';
    }
    
    const type = editedElement.type?.toLowerCase() || '';
    if (type.startsWith('h') || type === 'p' || type === 'span' || type === 'button' || type === 'a') {
      return 'text';
    }
    
    if (type.includes('motion')) {
      return 'motion';
    }
    
    return 'unknown';
  };

  const editorType = getEditorType();
  const isLinkElement = editedElement?.type?.toLowerCase() === 'a' || editedElement?.props?.href !== undefined;

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        handlePropChange('src', reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const getEditableText = (children) => {
    if (typeof children === 'string' || typeof children === 'number') return String(children);
    if (Array.isArray(children)) {
      const firstText = children.find((child) => typeof child === 'string' || typeof child === 'number');
      return firstText !== undefined ? String(firstText) : '';
    }
    return '';
  };

  const setEditableText = (children, value) => {
    // Keep persisted edits JSON-safe and deterministic.
    // For complex child trees, replace with plain text content.
    return value;
  };

  return (
    <div className="fixed inset-0 bg-[#0f0f11] z-[100] flex overflow-hidden">
      {/* Sidebar Panel */}
      <div className="w-96 bg-[#121214] border-r border-white/10 flex flex-col">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <h2 className="text-white font-bold italic">Adverra <span className="text-[#7c7adb]">Studio</span></h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              disabled={saveState === 'saving'}
              className="px-3 py-1.5 text-xs font-semibold rounded bg-[#7c7adb] text-white hover:bg-[#6f6dcc] transition"
            >
              {saveState === 'saving' ? 'Saving...' : 'Save'}
            </button>
            <button onClick={onClose} className="text-gray-500 hover:text-white">
              <X size={20}/>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {!editedElement ? (
            <div className="text-center py-20 text-gray-600">
              <MousePointer2 className="mx-auto mb-4 opacity-20" size={40}/>
              <p className="text-sm">Click any text, heading, or image to edit</p>
              <p className="text-xs text-gray-700 mt-2">Try clicking on headings, paragraphs, or images</p>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
              {/* Element Info */}
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 bg-[#7c7adb]/20 rounded text-[#7c7adb]">
                  {editorType === 'image' ? <ImageIcon size={14}/> : <Type size={14}/>}
                </span>
                <p className="text-[10px] text-[#7c7adb] font-bold uppercase tracking-widest">
                  {editedElement.type}
                </p>
              </div>
              
              {/* IMAGE EDITING */}
              {editorType === 'image' && (
                <>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase">Image URL</label>
                    <input
                      type="text"
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-white focus:border-[#7c7adb] outline-none"
                      value={editedElement.props?.src || ''}
                      onChange={(e) => handlePropChange('src', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase">Upload Image</label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-sm text-white hover:border-[#7c7adb] transition"
                    >
                      Choose Image File
                    </button>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase">Alt Text</label>
                    <input
                      type="text"
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-white focus:border-[#7c7adb] outline-none"
                      value={editedElement.props?.alt || ''}
                      onChange={(e) => handlePropChange('alt', e.target.value)}
                    />
                  </div>
                </>
              )}

              {isLinkElement && (
                <>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase">Link URL</label>
                    <input
                      type="text"
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-white focus:border-[#7c7adb] outline-none"
                      value={editedElement.props?.href || ''}
                      onChange={(e) => handlePropChange('href', e.target.value)}
                      placeholder="https://example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase">Target</label>
                    <select
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-white"
                      value={editedElement.props?.target || '_self'}
                      onChange={(e) => handlePropChange('target', e.target.value)}
                    >
                      <option value="_self">Same tab</option>
                      <option value="_blank">New tab</option>
                    </select>
                  </div>
                </>
              )}

              {/* TEXT EDITING */}
              {(editorType === 'text' || editorType === 'motion') && (
                <>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase">Content</label>
                    <textarea
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-white focus:border-[#7c7adb] outline-none"
                      rows={6}
                      value={getEditableText(editedElement.props?.children)}
                      onChange={(e) => handlePropChange('children', setEditableText(editedElement.props?.children, e.target.value))}
                    />
                  </div>

                  {/* Text Formatting Tools */}
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase">Formatting</label>
                    <div className="flex gap-2">
                      <button className="p-2 bg-black/40 border border-white/10 rounded-lg hover:bg-[#7c7adb]/20">
                        <Bold size={16} className="text-white"/>
                      </button>
                      <button className="p-2 bg-black/40 border border-white/10 rounded-lg hover:bg-[#7c7adb]/20">
                        <Italic size={16} className="text-white"/>
                      </button>
                      <button className="p-2 bg-black/40 border border-white/10 rounded-lg hover:bg-[#7c7adb]/20">
                        <Underline size={16} className="text-white"/>
                      </button>
                    </div>
                  </div>

                  {/* Alignment */}
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase">Alignment</label>
                    <div className="flex gap-2">
                      <button className="p-2 bg-black/40 border border-white/10 rounded-lg hover:bg-[#7c7adb]/20">
                        <AlignLeft size={16} className="text-white"/>
                      </button>
                      <button className="p-2 bg-black/40 border border-white/10 rounded-lg hover:bg-[#7c7adb]/20">
                        <AlignCenter size={16} className="text-white"/>
                      </button>
                      <button className="p-2 bg-black/40 border border-white/10 rounded-lg hover:bg-[#7c7adb]/20">
                        <AlignRight size={16} className="text-white"/>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {(saveState === 'saved' || saveState === 'error') && (
        <div className="fixed top-6 right-6 z-[200]">
          <div
            className={`px-4 py-3 rounded-lg text-sm border shadow-xl ${
              saveState === 'saved'
                ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                : 'bg-red-500/15 text-red-300 border-red-500/30'
            }`}
          >
            <div className="flex items-center gap-3">
              <span>{saveMessage}</span>
              <button
                type="button"
                onClick={() => {
                  setSaveState('idle');
                  setSaveMessage('');
                }}
                className="text-xs px-2 py-1 rounded border border-white/20 hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Editor Canvas */}
      <div className="flex-1 bg-[#1a1a1c] p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto shadow-2xl rounded-lg overflow-hidden min-h-full bg-white">
          <PageRenderer
            pageId={page?.id}
            onElementSelect={handleElementSelect}
            selectedElement={selectedElementId}
            editedElement={editedElement}
            pageEdits={pageEdits}
          />
        </div>
      </div>
    </div>
  );
};

export default PageEditor;
