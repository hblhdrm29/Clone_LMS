"use strict";

import { StatSection } from "@/components/admin/stat-section";
import { VisitorStats } from "@/components/admin/visitor-stats";
import { DepartmentChart } from "@/components/admin/department-chart";
;
import { BookOpen, Users, School, Clock, Monitor, FileText } from "lucide-react";
;

export default function AdminDashboardPage() {
    // Mock Data
    const onboardingStats = [
        { label: "CLASS", value: "18/20", icon: School, color: "bg-blue-50 text-blue-600" },
        { label: "MENTEE", value: "245/300", icon: Users, color: "bg-blue-50 text-blue-600" },
        { label: "MENTOR", value: "24/30", icon: Users, color: "bg-blue-50 text-blue-600" },
        { label: "CO-MEN", value: "30/40", icon: Clock, color: "bg-blue-50 text-blue-600" },
    ];

    const trainingStats = [
        { label: "USER", value: "1520/2000", icon: Users, color: "bg-blue-50 text-blue-600" },
        { label: "NEW", value: "85/150", icon: Users, color: "bg-blue-50 text-blue-600" },
        { label: "COURSE", value: "62/80", icon: BookOpen, color: "bg-blue-50 text-blue-600" },
    ];

    // Expanded Stats (Removed TDP)

    const onboardingLeaderboard = [
        { name: "Dimas Arya Prasetya", role: "Magang Trainee Batch 2/2024", rank: 1, colorClass: "bg-green-100 text-green-600" },
        { name: "Rizky Ramadhan", role: "Magang Trainee Batch 2/2024", rank: 2, colorClass: "bg-blue-100 text-blue-600" },
        { name: "Nadia Fitria", role: "Magang Guide 09/2024", rank: 3, colorClass: "bg-blue-100 text-blue-600" },
        { name: "Farhan Maulana", role: "Magang IT Support", rank: 4, colorClass: "bg-orange-100 text-orange-600" },
        { name: "Siti Nurhaliza", role: "Magang Finance", rank: 5, colorClass: "bg-pink-100 text-pink-600" },
        { name: "Budi Santosa", role: "Magang HR", rank: 6, colorClass: "bg-teal-100 text-teal-600" },
        { name: "Dewi Lestari", role: "Magang Marketing", rank: 7, colorClass: "bg-indigo-100 text-indigo-600" },
        { name: "Andi Wijaya", role: "Magang Operations", rank: 8, colorClass: "bg-cyan-100 text-cyan-600" },
    ];

    const trainingLeaderboard = [
        { name: "Budi Santosa", role: "Staff Senior IT", rank: 1, colorClass: "bg-green-100 text-green-600" },
        { name: "Citra Kirana", role: "Junior Developer", rank: 2, colorClass: "bg-blue-100 text-blue-600" },
        { name: "Ahmad Fauzi", role: "System Analyst", rank: 3, colorClass: "bg-blue-100 text-blue-600" },
        { name: "Siti Aminah", role: "HR Specialist", rank: 4, colorClass: "bg-orange-100 text-orange-600" },
        { name: "Eko Prasetyo", role: "Project Manager", rank: 5, colorClass: "bg-red-100 text-red-600" },
        { name: "Rina Wati", role: "Business Analyst", rank: 6, colorClass: "bg-yellow-100 text-yellow-600" },
        { name: "Dedi Kurniawan", role: "DevOps Engineer", rank: 7, colorClass: "bg-lime-100 text-lime-600" },
        { name: "Maya Sari", role: "UI/UX Designer", rank: 8, colorClass: "bg-rose-100 text-rose-600" },
    ];


    return (
        <div className="p-6 space-y-8 select-none">
            <div>
                <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-xs text-gray-500">Admin PSP Overview</p>
            </div>

            {/* Top Row: Widgets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatSection
                    title="MT-Batch III"
                    stats={onboardingStats}
                    leaderboardTitle="LEADERBOARD MENTEE"
                    leaderboard={onboardingLeaderboard}
                />
                <StatSection
                    title="Training"
                    stats={trainingStats}
                    leaderboardTitle="LEADERBOARD EMPLOYEES"
                    leaderboard={trainingLeaderboard}
                />
                <VisitorStats />
            </div>


            <div className="space-y-4">
                <DepartmentChart />
            </div>
        </div>
    );
}
