"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";
import CustomCursor from "@/components/CustomCursor";
import {
  Check,
  ShieldCheck,
} from "lucide-react";
import { adminDashboardData } from "@/data/instituteData";

export default function AdminPage() {
  const [applications, setApplications] = useState(adminDashboardData.applications);
  const [notification, setNotification] = useState("");

  const handleStatus = (id, newStatus) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
    setNotification(`Application ${id} marked as ${newStatus}`);
    setTimeout(() => setNotification(""), 3500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090B] selection:bg-[#E50914] selection:text-white font-sans">
      <CustomCursor />
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Admin Header */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 text-gray-900 shadow-md mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E50914] animate-pulse"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E50914]">
                  ADMINISTRATIVE CONSOLE
                </span>
              </div>
              <h1 className="text-3xl font-black text-gray-950">Institute Operations Dashboard</h1>
              <p className="text-xs text-gray-500 font-mono">Academic Year 2026–2027 • Live Telemetry</p>
            </div>

            <div className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl flex items-center gap-2 text-xs font-mono text-gray-700">
              <ShieldCheck className="w-4 h-4 text-[#E50914]" />
              <span>Role: Super Administrator</span>
            </div>
          </div>

          {notification && (
            <div className="p-4 mb-8 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-2xl flex items-center gap-3 text-xs font-bold animate-in fade-in">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>{notification}</span>
            </div>
          )}

          {/* KPI Cards Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {adminDashboardData.kpis.map((kpi) => (
              <div key={kpi.label} className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-2">
                <p className="text-xs font-mono uppercase font-bold text-gray-500">{kpi.label}</p>
                <p className="text-3xl font-black font-mono text-gray-950">{kpi.value}</p>
                <p className="text-[11px] font-medium text-emerald-600">{kpi.change}</p>
              </div>
            ))}
          </div>

          {/* Pending Applications Review Table */}
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-md space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-black text-gray-950">Fall 2026 Admission Inquiries</h2>
                <p className="text-xs text-gray-500">Review, approve or request additional documentation from applicants.</p>
              </div>

              <span className="text-xs font-mono font-bold text-[#E50914] bg-[#E50914]/10 border border-[#E50914]/30 px-3 py-1.5 rounded-full">
                {applications.filter((a) => a.status === "Pending").length} Pending Decisions
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 text-gray-900 font-mono text-[10px] uppercase tracking-wider border-b border-gray-200">
                  <tr>
                    <th className="p-4">Applicant ID</th>
                    <th className="p-4">Candidate Name</th>
                    <th className="p-4">Target Track</th>
                    <th className="p-4">Submitted</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-mono font-bold text-gray-500">{app.id}</td>
                      <td className="p-4">
                        <p className="font-bold text-gray-950">{app.name}</p>
                        <p className="text-[11px] text-gray-500 font-mono">{app.email}</p>
                      </td>
                      <td className="p-4 font-medium text-gray-800">{app.program}</td>
                      <td className="p-4 text-gray-500 font-mono">{app.date}</td>
                      <td className="p-4">
                        <span
                          className={`px-2.5 py-1 rounded-full font-mono font-bold text-[9px] uppercase ${
                            app.status === "Approved"
                              ? "bg-emerald-100 border border-emerald-300 text-emerald-800"
                              : app.status === "Rejected"
                              ? "bg-red-100 border border-red-300 text-red-800"
                              : "bg-amber-100 border border-amber-300 text-amber-800"
                          }`}
                        >
                          {app.status}
                        </span>
                      </td>
                      <td className="p-4 text-right space-x-1.5">
                        <button
                          onClick={() => handleStatus(app.id, "Approved")}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold shadow-sm"
                          title="Approve application"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleStatus(app.id, "Rejected")}
                          className="px-3 py-1.5 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-700 rounded-lg font-bold transition-colors"
                          title="Reject application"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <EditorialFooter />
    </div>
  );
}
