import { StatsCards } from "@/components/dashboard/stats-cards"
import { CourseStats } from "@/components/dashboard/course-stats"
import { TopPerformers } from "@/components/dashboard/top-performers"
import { Notifications } from "@/components/dashboard/notifications"

import { SystemAlert } from "@/components/dashboard/system-alert"

export default function DashboardPage() {
    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Onboarding Dashboard</h1>
                    <p className="text-sm text-gray-500">Welcome back, here is your progress overview.</p>
                </div>
                <div className="w-full md:w-auto min-w-[320px]">
                    <SystemAlert />
                </div>
            </div>

            {/* Stats Row */}
            <StatsCards />

            {/* Main Content Rows */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Left Column (Course Stats) */}
                <div>
                    <CourseStats />
                </div>

                {/* Center Column (Top Performers) */}
                <div>
                    <TopPerformers />
                </div>

                {/* Right Column (Notifications) */}
                <div>
                    <Notifications />
                </div>
            </div>
        </div>
    )
}
