"use client"

import { useRef } from "react"
import { Input } from "@/components/ui/input"
import { Search, CheckCircle, Clock, FileText, XCircle, ChevronRight } from "lucide-react"
import { CourseCard } from "@/components/dashboard/course-card"
import Link from "next/link"


export default function MyClassesPage() {
    const passedRef = useRef<HTMLDivElement>(null)
    const progressRef = useRef<HTMLDivElement>(null)
    const unpassedRef = useRef<HTMLDivElement>(null)

    const scroll = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.scrollBy({ left: 340, behavior: "smooth" })
        }
    }

    const passedCourses = [
        { title: "PKWT-Batch V", score: "89/100", rank: "7", participants: "57" },
        { title: "PKWT-Batch IV", score: "92/100", rank: "3", participants: "50" },
        { title: "PROHIRE-Batch I", score: "95/100", rank: "1", participants: "40" },
        { title: "PROHIRE-Batch II", score: "88/100", rank: "12", participants: "45" },
        { title: "MT-Batch II", score: "91/100", rank: "5", participants: "35" },
    ]

    const onProgressCourses = [
        { title: "MT-Batch III", progress: 0, participants: "57", footerLabel: "Modules", footerValue: "Locked", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" },
        { title: "MT-Batch II", progress: 45, participants: "57", footerLabel: "Score Post Test", footerValue: "Pending", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600" },
        { title: "MT-Batch I", progress: 75, participants: "50", footerLabel: "Modules Completed", footerValue: "9/12", image: "https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?auto=format&fit=crop&q=80&w=600" },
        { title: "PROHIRE-Batch III", progress: 30, participants: "45", footerLabel: "Modules Completed", footerValue: "4/12", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" },
        { title: "PROHIRE-Batch IV", progress: 60, participants: "40", footerLabel: "Modules Completed", footerValue: "6/10", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
    ]

    const unpassedCourses = [
        { title: "Corporate Finance Basics", score: "55/100", rank: "-", participants: "40" },
        { title: "Advanced Excel", score: "40/100", rank: "-", participants: "35" },
        { title: "Risk Management", score: "50/100", rank: "-", participants: "25" },
    ]
    return (
        <div className="p-6 space-y-8 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">My Classes</h1>
                    <p className="text-sm text-gray-500">Track your progress and view your training history.</p>
                </div>
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search classes..."
                        className="pl-9 bg-white border-gray-200"
                    />
                </div>
            </div>

            {/* Passed Section */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500" />
                        <h2 className="font-bold text-lg text-gray-800">Passed</h2>
                        <span className="bg-emerald-100 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full">{passedCourses.length} Classes</span>
                    </div>
                    <button 
                        onClick={() => scroll(passedRef)}
                        className="h-8 w-8 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-100 hover:bg-blue-50 transition-all"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>

                <div 
                    ref={passedRef}
                    className="flex overflow-x-auto gap-6 pb-4 scroll-smooth no-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {passedCourses.map((course, idx) => (
                        <div key={idx} className="min-w-[320px] max-w-[320px]">
                            <CourseCard
                                title={course.title}
                                type="Pelatihan Wajib"
                                date="Aug 2023 - Dec 2023"
                                rank={course.rank}
                                participants={course.participants}
                                score={course.score}
                                status="Passed"
                                progress={100}
                                icon={FileText}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* On Progress Section */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-orange-100 p-1 rounded-md">
                            <Clock className="h-4 w-4 text-orange-600" />
                        </div>
                        <h2 className="font-bold text-lg text-gray-800">On Progress</h2>
                        <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded-full">{onProgressCourses.length} Classes</span>
                    </div>
                    <button 
                        onClick={() => scroll(progressRef)}
                        className="h-8 w-8 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-100 hover:bg-blue-50 transition-all"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>

                <div 
                    ref={progressRef}
                    className="flex overflow-x-auto gap-6 pb-4 scroll-smooth no-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {onProgressCourses.map((course, idx) => (
                        <div key={idx} className="min-w-[320px] max-w-[320px]">
                            <Link href="/dashboard-onboarding/my-classes/pelatihan" className="block h-full">
                                <CourseCard
                                    image={course.image}
                                    title={course.title}
                                    type="Pelatihan Wajib"
                                    date="Aug 2024 - Mar 2025"
                                    rank="-/57"
                                    participants={course.participants}
                                    status="OnProgress"
                                    progress={course.progress}
                                    icon={FileText}
                                    footerLabel={course.footerLabel}
                                    footerValue={course.footerValue}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            {/* Unpassed Section */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-red-100 p-1 rounded-md">
                            <XCircle className="h-4 w-4 text-red-600" />
                        </div>
                        <h2 className="font-bold text-lg text-gray-800">Unpassed</h2>
                        <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full">{unpassedCourses.length} Classes</span>
                    </div>
                    <button 
                        onClick={() => scroll(unpassedRef)}
                        className="h-8 w-8 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-100 hover:bg-blue-50 transition-all"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>

                <div 
                    ref={unpassedRef}
                    className="flex overflow-x-auto gap-6 pb-4 scroll-smooth no-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {unpassedCourses.map((course, idx) => (
                        <div key={idx} className="min-w-[320px] max-w-[320px]">
                            <CourseCard
                                image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600"
                                title={course.title}
                                type="Technical Skill"
                                date="Jan 2023 - Jun 2023"
                                rank={course.rank}
                                participants={course.participants}
                                score={course.score}
                                status="Unpassed"
                                progress={100}
                                icon={FileText}
                                footerLabel="Final Score"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
