"use client"

import { useState } from "react"
import { Users, Shield, Activity, Search } from "lucide-react"

function StatCard({ title, value, label, icon: Icon, color }: any) {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden group">
            <div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity ${color}`}>
                <Icon className="h-16 w-16" />
            </div>
            <div className="relative">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center mb-4 ${color.replace('text-', 'bg-').replace('500', '100')} ${color}`}>
                    <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
                <p className="text-xs text-gray-400">{label}</p>
            </div>
        </div>
    )
}

export default function SuperAdminDashboard() {
    const [activitySearch, setActivitySearch] = useState("")
    const [userSearch, setUserSearch] = useState("")

    const allLogs = [
        { id: 1, activity: "User Role Updated", details: "Admin PSP changed role for user \"User_1\"", user: "Admin PSP", time: "2 mins ago" },
        { id: 2, activity: "System Configuration Changed", details: "Super Admin updated security settings", user: "Super Admin", time: "15 mins ago" },
        { id: 3, activity: "Assignment Reviewed", details: "Mentor evaluated assignment \"Final Project\"", user: "Mentor", time: "30 mins ago" },
        { id: 4, activity: "Announcement Posted", details: "Co-Mentor shared weekly schedule", user: "Co-Mentor", time: "1 hour ago" },
        { id: 5, activity: "Audit Logs Exported", details: "Monthly audit report generated", user: "Super Admin", time: "2 hours ago" },
    ]

    const uniqueUsers = ["All Users", ...Array.from(new Set(allLogs.map(log => log.user)))]

    const filteredLogs = allLogs.filter(log =>
        log.activity.toLowerCase().includes(activitySearch.toLowerCase()) &&
        (userSearch === "" || userSearch === "All Users" || log.user === userSearch)
    )

    return (
        <div className="p-6 max-w-[1600px] mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">System Overview</h1>
                    <p className="text-sm text-gray-500">Monitor overall system health and user statistics.</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-100">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        System Operational
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <StatCard
                    title="Total Users"
                    value="1,248"
                    label="Active accounts in system"
                    icon={Users}
                    color="text-blue-500"
                />
                <StatCard
                    title="Active Roles"
                    value="6"
                    label="Distinct role types defined"
                    icon={Shield}
                    color="text-indigo-500"
                />
            </div>

            {/* Recent Audit Logs Section */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h3 className="text-lg font-bold text-gray-900">Recent Audit Logs</h3>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Filter activity..."
                                value={activitySearch}
                                onChange={(e) => setActivitySearch(e.target.value)}
                                className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all w-full sm:w-48"
                            />
                        </div>
                        <div className="relative">
                            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                            <select
                                value={userSearch}
                                onChange={(e) => setUserSearch(e.target.value)}
                                className="pl-9 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all w-full sm:w-48 appearance-none"
                            >
                                {uniqueUsers.map(user => (
                                    <option key={user} value={user}>{user}</option>
                                ))}
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    {filteredLogs.length > 0 ? (
                        filteredLogs.map((log) => (
                            <div key={log.id} className="flex items-center gap-4 text-sm pb-4 border-b border-gray-50 last:border-0 last:pb-0 group hover:bg-gray-50/50 transition-colors rounded-lg p-2 -mx-2">
                                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-500 group-hover:bg-blue-100 transition-colors">
                                    <Activity className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <p className="font-semibold text-gray-900">{log.activity}</p>
                                        <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] uppercase font-bold rounded tracking-tight">
                                            {log.user}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-xs">{log.details}</p>
                                </div>
                                <span className="text-gray-400 text-[11px] font-medium whitespace-nowrap">{log.time}</span>
                            </div>
                        ))
                    ) : (
                        <div className="py-12 text-center">
                            <p className="text-gray-400 text-sm italic">No activities found matching your filters.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
