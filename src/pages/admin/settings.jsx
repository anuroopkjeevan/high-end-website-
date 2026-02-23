import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Lock, RefreshCcw, Save, Shield, User, Users } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { authApi } from "../../services/api";

const roleOptions = ["admin", "manager", "editor"];

const Settings = () => {
  const { user, refreshUser } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [staffUsers, setStaffUsers] = useState([]);

  const [profileForm, setProfileForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    role: "admin",
    manager_id: "",
  });

  const [passwordForm, setPasswordForm] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [createUserForm, setCreateUserForm] = useState({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    role: "editor",
    manager_id: "",
  });

  useEffect(() => {
    if (!user) return;
    setProfileForm({
      first_name: user.first_name || "",
      last_name: user.last_name || "",
      email: user.email || "",
      role: user.role || "admin",
      manager_id: user.manager_id ?? "",
    });
  }, [user]);

  const loadUsers = async () => {
    try {
      const data = await authApi.listUsers();
      setStaffUsers(data.users || []);
    } catch (error) {
      setMessage({ type: "error", text: error?.response?.data?.detail || "Failed to load users." });
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const managerOptions = useMemo(() => {
    return staffUsers.filter((u) => u.id !== user?.id);
  }, [staffUsers, user?.id]);

  const tabs = [
    { id: "profile", label: "Admin Profile", icon: User },
    { id: "security", label: "Security", icon: Shield },
    { id: "users", label: "User Creation", icon: Users },
    { id: "system", label: "System Config", icon: Globe },
  ];

  const setSuccess = (text) => setMessage({ type: "success", text });
  const setError = (text) => setMessage({ type: "error", text });

  const handleSaveProfile = async () => {
    try {
      setIsSaving(true);
      await authApi.updateMe({
        ...profileForm,
        manager_id: profileForm.manager_id === "" ? null : Number(profileForm.manager_id),
      });
      await refreshUser();
      await loadUsers();
      setSuccess("Profile updated.");
    } catch (error) {
      setError(error?.response?.data?.detail || "Failed to update profile.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleChangePassword = async () => {
    try {
      setIsSaving(true);
      await authApi.changePassword(passwordForm);
      setPasswordForm({ old_password: "", new_password: "", confirm_password: "" });
      setSuccess("Password changed successfully.");
    } catch (error) {
      setError(error?.response?.data?.detail || "Failed to change password.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleCreateUser = async () => {
    try {
      setIsSaving(true);
      await authApi.createUser({
        ...createUserForm,
        manager_id: createUserForm.manager_id === "" ? null : Number(createUserForm.manager_id),
      });
      setCreateUserForm({
        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
        role: "editor",
        manager_id: "",
      });
      await loadUsers();
      setSuccess("New admin user created.");
    } catch (error) {
      setError(error?.response?.data?.detail || "Failed to create user.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-8 lg:p-12 max-w-6xl">
      <header className="mb-8">
        <h1 className="text-4xl font-black uppercase tracking-tighter">
          System <span className="text-[#7c7adb]">Settings</span>
        </h1>
        <p className="text-gray-500 text-sm mt-2">Manage current admin profile, password, and admin users with manager assignment.</p>
      </header>

      {message.text && (
        <div
          className={`mb-6 rounded-xl px-4 py-3 text-sm border ${
            message.type === "success"
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
              : "bg-red-500/10 border-red-500/30 text-red-300"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-64 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
                activeTab === tab.id ? "bg-[#7c7adb] text-white" : "text-gray-500 hover:bg-white/[0.03] hover:text-white"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex-1 bg-[#121214] border border-white/[0.05] rounded-[2.5rem] p-8 lg:p-10">
          {activeTab === "profile" && (
            <div className="space-y-4">
              <h3 className="text-xl font-black uppercase tracking-tight">Current Admin Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input value={profileForm.first_name} onChange={(e) => setProfileForm((p) => ({ ...p, first_name: e.target.value }))} placeholder="First Name" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm" />
                <input value={profileForm.last_name} onChange={(e) => setProfileForm((p) => ({ ...p, last_name: e.target.value }))} placeholder="Last Name" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm" />
                <input value={profileForm.email} onChange={(e) => setProfileForm((p) => ({ ...p, email: e.target.value }))} placeholder="Email" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm" />
                <select value={profileForm.role} onChange={(e) => setProfileForm((p) => ({ ...p, role: e.target.value }))} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm">
                  {roleOptions.map((role) => (
                    <option key={role} value={role}>{role.toUpperCase()}</option>
                  ))}
                </select>
                <select value={profileForm.manager_id} onChange={(e) => setProfileForm((p) => ({ ...p, manager_id: e.target.value }))} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm md:col-span-2">
                  <option value="">No Manager</option>
                  {managerOptions.map((m) => (
                    <option key={m.id} value={m.id}>{m.full_name || m.username}</option>
                  ))}
                </select>
              </div>
              <button onClick={handleSaveProfile} disabled={isSaving} className="mt-2 flex items-center gap-2 bg-white text-black px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest disabled:opacity-50">
                {isSaving ? <RefreshCcw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Save Profile
              </button>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-4">
              <h3 className="text-xl font-black uppercase tracking-tight">Change Password</h3>
              <input type="password" value={passwordForm.old_password} onChange={(e) => setPasswordForm((p) => ({ ...p, old_password: e.target.value }))} placeholder="Current Password" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm" />
              <input type="password" value={passwordForm.new_password} onChange={(e) => setPasswordForm((p) => ({ ...p, new_password: e.target.value }))} placeholder="New Password" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm" />
              <input type="password" value={passwordForm.confirm_password} onChange={(e) => setPasswordForm((p) => ({ ...p, confirm_password: e.target.value }))} placeholder="Confirm New Password" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm" />
              <button onClick={handleChangePassword} disabled={isSaving} className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest disabled:opacity-50">
                <Lock className="w-4 h-4" />
                Update Password
              </button>
            </div>
          )}

          {activeTab === "users" && (
            <div className="space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tight">User Creation & Assignment</h3>

              {user?.is_superuser ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input value={createUserForm.username} onChange={(e) => setCreateUserForm((p) => ({ ...p, username: e.target.value }))} placeholder="Username" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm" />
                  <input type="password" value={createUserForm.password} onChange={(e) => setCreateUserForm((p) => ({ ...p, password: e.target.value }))} placeholder="Temp Password" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm" />
                  <input value={createUserForm.first_name} onChange={(e) => setCreateUserForm((p) => ({ ...p, first_name: e.target.value }))} placeholder="First Name" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm" />
                  <input value={createUserForm.last_name} onChange={(e) => setCreateUserForm((p) => ({ ...p, last_name: e.target.value }))} placeholder="Last Name" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm" />
                  <input value={createUserForm.email} onChange={(e) => setCreateUserForm((p) => ({ ...p, email: e.target.value }))} placeholder="Email" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm" />
                  <select value={createUserForm.role} onChange={(e) => setCreateUserForm((p) => ({ ...p, role: e.target.value }))} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm">
                    {roleOptions.map((role) => (
                      <option key={role} value={role}>{role.toUpperCase()}</option>
                    ))}
                  </select>
                  <select value={createUserForm.manager_id} onChange={(e) => setCreateUserForm((p) => ({ ...p, manager_id: e.target.value }))} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm md:col-span-2">
                    <option value="">No Manager</option>
                    {staffUsers.map((m) => (
                      <option key={m.id} value={m.id}>{m.full_name || m.username}</option>
                    ))}
                  </select>
                  <button onClick={handleCreateUser} disabled={isSaving} className="md:col-span-2 bg-[#7c7adb] text-white px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest disabled:opacity-50">
                    {isSaving ? "Creating..." : "Create Admin User"}
                  </button>
                </div>
              ) : (
                <div className="text-sm text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-3">
                  Only superusers can create new admin users.
                </div>
              )}

              <div className="border-t border-white/10 pt-4">
                <h4 className="text-sm font-bold uppercase mb-3 text-gray-300">Current Admin Users</h4>
                <div className="space-y-2">
                  {staffUsers.map((u) => (
                    <div key={u.id} className="flex flex-wrap items-center justify-between gap-2 bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm">
                      <div>
                        <p className="font-semibold">{u.full_name || u.username}</p>
                        <p className="text-gray-500 text-xs">{u.email || "No email"} • {u.role?.toUpperCase()}</p>
                      </div>
                      <div className="text-xs text-gray-400">Manager: {u.manager_name || "None"}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "system" && (
            <div className="space-y-4">
              <h3 className="text-xl font-black uppercase tracking-tight">System</h3>
              <p className="text-sm text-gray-400">System configuration can be added here later.</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Settings;
