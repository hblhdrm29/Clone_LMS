"use strict";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function DepartmentChart() {
    const data = [
        { name: "SDM", values: [30, 20, 0], total: 50 },
        { name: "IT", values: [40, 30, 0], total: 70 },
        { name: "DISA", values: [40, 25, 0], total: 65 },
        { name: "DICO", values: [15, 10, 0], total: 25 },
        { name: "SBU CS", values: [30, 40, 0], total: 70 },
        { name: "SBU HSS", values: [15, 30, 0], total: 45 },
        { name: "Risbang", values: [50, 40, 0], total: 90 },
    ];

    // Legend
    const legends = [
        { label: "SDM", color: "bg-[#67e8f9]" }, // Cyan
        { label: "IT", color: "bg-[#3b82f6]" }, // Blue
        { label: "DISA", color: "bg-[#6366f1]" }, // Indigo
        { label: "DICO", color: "bg-[#3b82f6]" }, // Blue (was Purple)
        { label: "SBU CS", color: "bg-[#ec4899]" }, // Pink
        { label: "SBU HSS", color: "bg-[#f43f5e]" }, // Rose/Salmon
        { label: "Risbang", color: "bg-[#f59e0b]" }, // Amber/Yellow
    ];

    return (
        <Card className="bg-white border-none shadow-sm h-full">
            <CardHeader className="flex flex-col gap-4 pb-0">
                <div className="flex flex-row items-center justify-between w-full">
                    <CardTitle className="text-base font-bold text-gray-800">Grafik Akses Perdivisi</CardTitle>

                    {/* Date Filters Relocated from Page Bottom */}
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                            <label className="text-[9px] font-bold text-gray-400 uppercase leading-none mb-1">Tanggal Pelatihan</label>
                            <div className="border rounded px-2 py-1 text-[10px] w-32 bg-white text-gray-600 h-7 flex items-center">31/10/24</div>
                        </div>
                        <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-7 text-[10px] px-3 self-end">Apply</Button>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-between">
                    {/* Legend Row */}
                    <div className="flex flex-wrap gap-4">
                        {legends.map((l, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                                <div className={`h-2 w-2 rounded-full ${l.color}`}></div>
                                <span className="text-[9px] uppercase font-bold text-gray-400 tracking-wider whitespace-nowrap">{l.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Quick Filters */}
                    <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-[9px] bg-blue-50 text-blue-600 font-bold">2 OKT</Button>
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-[9px] text-gray-400 font-bold">3 OKT</Button>
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-[9px] text-gray-400 font-bold">4 OKT</Button>
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <div className="h-[200px] flex items-end gap-4 mt-4">
                    {/* Y Axis Labels (Simple) */}
                    <div className="flex flex-col justify-between h-full text-[10px] text-gray-400 py-2">
                        <span>50</span>
                        <span>40</span>
                        <span>30</span>
                        <span>20</span>
                        <span>10</span>
                        <span>0</span>
                    </div>

                    {/* Bars */}
                    <div className="flex-1 flex items-end justify-between pl-2">
                        {data.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2 group w-full">
                                <div className="w-full max-w-[60px] flex flex-col-reverse gap-1 transition-all hover:opacity-80 cursor-pointer">
                                    <div
                                        className={`w-full rounded-t-sm ${idx === 0 ? "bg-[#67e8f9]" :
                                            idx === 1 ? "bg-[#3b82f6]" :
                                                idx === 2 ? "bg-[#6366f1]" :
                                                    idx === 3 ? "bg-[#3b82f6]" : // Blue (was Purple)
                                                        idx === 4 ? "bg-[#ec4899]" : // SBU CS
                                                            idx === 5 ? "bg-[#f43f5e]" : // SBU HSS
                                                                "bg-[#f59e0b]" // Risbang
                                            }`}
                                        style={{ height: `${item.values[0] * 2}px` }}
                                    />
                                    {item.values[1] > 0 && (
                                        <div
                                            className={`w-full rounded-b-sm opacity-60 ${idx === 0 ? "bg-[#67e8f9]" :
                                                idx === 1 ? "bg-[#3b82f6]" :
                                                    idx === 2 ? "bg-[#6366f1]" :
                                                        idx === 3 ? "bg-[#3b82f6]" :
                                                            idx === 4 ? "bg-[#ec4899]" :
                                                                idx === 5 ? "bg-[#f43f5e]" :
                                                                    "bg-[#f59e0b]"
                                                }`}
                                            style={{ height: `${item.values[1] * 2}px` }}
                                        />
                                    )}
                                </div>
                                <span className="text-[10px] font-bold text-gray-500 uppercase">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-4 flex justify-end">
                    <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-7 text-[10px] px-3">
                        Export
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
