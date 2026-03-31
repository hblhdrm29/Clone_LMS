"use client"

import { Card, CardContent } from "@/components/ui/card"

export function CourseStats() {
    return (
        <Card className="border-none shadow-sm h-full overflow-hidden">
            <div className="bg-blue-50/50 p-3 border-b border-blue-100 flex items-center justify-between">
                <div>
                    <h3 className="font-semibold text-lg text-gray-900">Course Stats</h3>
                    <p className="text-xs text-muted-foreground">Completion Status</p>
                </div>
            </div>
            <CardContent className="flex-1 flex flex-col items-center justify-center p-6">
                <div className="relative h-44 w-44">
                    <svg viewBox="0 0 36 36" className="h-full w-full rotate-[-90deg]">
                        <circle
                            cx="18"
                            cy="18"
                            r="15.9155"
                            fill="none"
                            className="text-gray-100"
                            stroke="currentColor"
                            strokeWidth="3.5"
                        />
                        <circle
                            cx="18"
                            cy="18"
                            r="15.9155" 
                            fill="none"
                            className="text-blue-500"
                            stroke="currentColor"
                            strokeWidth="3.5"
                            strokeDasharray="75, 100"
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">Progress</span>
                        <span className="text-3xl font-bold text-gray-900 leading-none">75%</span>
                    </div>
                </div>

                <div className="flex items-center gap-6 mt-8 text-[11px] font-medium text-gray-500">
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm" />
                        <span>Completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                        <span>Remaining</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
