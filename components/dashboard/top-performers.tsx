"use client"

import { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Medal } from "lucide-react"

export function TopPerformers() {
    const [isExpanded, setIsExpanded] = useState(false)

    const performers = [
        { name: "ABCDEF GHIJK", dept: "Sumber Daya Manusia", score: "98/100", rank: 1, avatarColor: "bg-emerald-500" },
        { name: "EFGHI JKLMN", dept: "Teknologi Informasi", score: "95/100", rank: 2, avatarColor: "bg-cyan-500" },
        { name: "JKLMN OP QRST", dept: "SBU Currency", score: "92/100", rank: 3, avatarColor: "bg-indigo-500" },
        { name: "MNO PQ RS", dept: "Human Resources", score: "90/100", rank: 4, avatarColor: "bg-orange-500" },
        { name: "PQR ST UV", dept: "Marketing", score: "88/100", rank: 5, avatarColor: "bg-pink-500" },
        { name: "STU VW XY", dept: "Finance", score: "86/100", rank: 6, avatarColor: "bg-blue-400" },
        { name: "Santika Tri Hapsari S", dept: "Onboarding User", score: "89/100", rank: 7, avatarColor: "bg-blue-600", isYou: true },
        { name: "YZA BC DE", dept: "Sales", score: "82/100", rank: 8, avatarColor: "bg-yellow-500" },
        { name: "BCD EF GH", dept: "Legal", score: "81/100", rank: 9, avatarColor: "bg-red-500" },
        { name: "DE FGH IJ", dept: "Audit Internal", score: "80/100", rank: 10, avatarColor: "bg-gray-500" },
    ]

    const displayedPerformers = isExpanded ? performers : performers.slice(0, 3)

    return (
        <Card className="border-none shadow-sm h-full overflow-hidden">
            <div className="bg-blue-50/50 p-3 border-b border-blue-100 flex items-center justify-between">
                <div>
                    <h3 className="font-semibold text-lg text-gray-900">Top Performers</h3>
                    <p className="text-xs text-muted-foreground">Top Employees Ranking</p>
                </div>
            </div>
            <CardContent className="p-4">

                <div className="space-y-4">
                    {displayedPerformers.map((p, i) => (
                        <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                {/* Avatar with Rank Badge */}
                                <div className="relative">
                                    <div className={cn("h-8 w-8 rounded-full flex items-center justify-center text-white font-bold text-[10px] shadow-sm ring-1 ring-white overflow-hidden", p.avatarColor)}>
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${p.name}`}
                                            alt={p.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className={cn(
                                        "absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full flex items-center justify-center text-[8px] font-bold text-white ring-2 ring-white shadow-sm",
                                        p.rank === 1 ? "bg-yellow-400" :
                                            p.rank === 2 ? "bg-gray-400" :
                                                p.rank === 3 ? "bg-amber-700" :
                                                    "bg-blue-600"
                                    )}>
                                        {p.rank}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-900 leading-tight">
                                        {p.name}
                                        {p.isYou && <span className="text-gray-400 font-normal text-[10px] ml-1">(You)</span>}
                                    </p>
                                    <p className="text-[9px] text-gray-500 mt-0.5">{p.dept}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={cn(
                                    "text-xs font-bold px-2 py-1 rounded-md",
                                    p.rank <= 3 ? "text-blue-600 bg-blue-50" : "text-gray-600 bg-gray-50"
                                )}>Score: {p.score}</span>
                                {p.rank === 1 && <Medal className="h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-md" />}
                                {p.rank === 2 && <Medal className="h-5 w-5 text-gray-400 fill-gray-400 drop-shadow-md" />}
                                {p.rank === 3 && <Medal className="h-5 w-5 text-amber-700 fill-amber-700 drop-shadow-md" />}
                            </div>
                        </div>
                    ))}

                    {/* User Rank Card - Blue Style */}
                    <div className="mt-4 relative overflow-hidden rounded-xl bg-blue-50 border border-blue-100 p-0">
                        {/* Blue Left Border Accent */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>

                        <div className="flex items-center justify-between p-3 pl-5">
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <div className="h-8 w-8 rounded-full bg-[#7C3AED] flex items-center justify-center text-white font-bold text-[10px] ring-1 ring-white shadow-sm">
                                        ST
                                    </div>
                                    <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-blue-600 flex items-center justify-center text-[8px] font-bold text-white ring-1 ring-white shadow-sm">
                                        7
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-900">Santika Tri Hapsari S <span className="text-gray-400 font-normal text-[10px]">(You)</span></p>
                                    <p className="text-[9px] text-gray-500">Onboarding User</p>
                                </div>
                            </div>
                            <span className="text-xs font-bold text-blue-600">Score: 89/100</span>
                        </div>
                    </div>

                    <div className="flex justify-center pt-2">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-xs text-blue-600 font-bold hover:underline transition-all flex items-center gap-1 group active:scale-95"
                        >
                            {isExpanded ? "View All" : "View All"}
                            <svg
                                className={cn("h-3 w-3 transition-transform", isExpanded ? "rotate-180" : "")}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                </div>
            </CardContent>
        </Card>
    )
}
