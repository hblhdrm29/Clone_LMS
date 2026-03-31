"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data
// Mock Data
const userData = [
    // Onboarding (10)
    { id: 1, nomorPokok: "ONB01", nama: "ANDI PRATAMA", kodeSTO: "42D10", namaUnit: "Unit IT", jabatan: "Magang Trainee", status: "aktif", category: "onboarding" },
    { id: 2, nomorPokok: "ONB02", nama: "BUDI SANTOSO", kodeSTO: "33X10", namaUnit: "Unit SDM", jabatan: "Magang Trainee", status: "tidak_aktif", category: "onboarding" },
    { id: 21, nomorPokok: "ONB03", nama: "CHandra WIJAYA", kodeSTO: "42D10", namaUnit: "Unit IT", jabatan: "Magang Trainee", status: "aktif", category: "onboarding" },
    { id: 22, nomorPokok: "ONB04", nama: "DEDI KURNIAWAN", kodeSTO: "33X10", namaUnit: "Unit SDM", jabatan: "Magang Trainee", status: "aktif", category: "onboarding" },
    { id: 23, nomorPokok: "ONB05", nama: "EKO PRASETYO", kodeSTO: "42D10", namaUnit: "Unit IT", jabatan: "Magang Trainee", status: "aktif", category: "onboarding" },
    { id: 24, nomorPokok: "ONB06", nama: "FAJAR SHODIQ", kodeSTO: "33X10", namaUnit: "Unit SDM", jabatan: "Magang Trainee", status: "aktif", category: "onboarding" },
    { id: 25, nomorPokok: "ONB07", nama: "GILANG RAMADHAN", kodeSTO: "42D10", namaUnit: "Unit IT", jabatan: "Magang Trainee", status: "aktif", category: "onboarding" },
    { id: 26, nomorPokok: "ONB08", nama: "HANIFAH PUTRI", kodeSTO: "33X10", namaUnit: "Unit SDM", jabatan: "Magang Trainee", status: "aktif", category: "onboarding" },
    { id: 27, nomorPokok: "ONB09", nama: "INDRA KUSUMA", kodeSTO: "42D10", namaUnit: "Unit IT", jabatan: "Magang Trainee", status: "aktif", category: "onboarding" },
    { id: 28, nomorPokok: "ONB10", nama: "JOKO WIDODO", kodeSTO: "33X10", namaUnit: "Unit SDM", jabatan: "Magang Trainee", status: "aktif", category: "onboarding" },

    // User (10)
    { id: 3, nomorPokok: "USR01", nama: "CITRA LESTARI", kodeSTO: "49H00", namaUnit: "Unit Keuangan", jabatan: "Staff", status: "aktif", category: "user" },
    { id: 4, nomorPokok: "USR02", nama: "DEWI KARTIKA", kodeSTO: "12B30", namaUnit: "Unit Pemasaran", jabatan: "Staff", status: "aktif", category: "user" },
    { id: 31, nomorPokok: "USR03", nama: "ELISA FITRIANI", kodeSTO: "49H00", namaUnit: "Unit Keuangan", jabatan: "Staff", status: "aktif", category: "user" },
    { id: 32, nomorPokok: "USR04", nama: "FARHAN MAULANA", kodeSTO: "12B30", namaUnit: "Unit Pemasaran", jabatan: "Staff", status: "aktif", category: "user" },
    { id: 33, nomorPokok: "USR05", nama: "GITA GUTFARA", kodeSTO: "49H00", namaUnit: "Unit Keuangan", jabatan: "Staff", status: "aktif", category: "user" },
    { id: 34, nomorPokok: "USR06", nama: "HADI SANTOSO", kodeSTO: "12B30", namaUnit: "Unit Pemasaran", jabatan: "Staff", status: "aktif", category: "user" },
    { id: 35, nomorPokok: "USR07", nama: "INDAH PERMATA", kodeSTO: "49H00", namaUnit: "Unit Keuangan", jabatan: "Staff", status: "aktif", category: "user" },
    { id: 36, nomorPokok: "USR08", nama: "JERRY PRATAMA", kodeSTO: "12B30", namaUnit: "Unit Pemasaran", jabatan: "Staff", status: "aktif", category: "user" },
    { id: 37, nomorPokok: "USR09", nama: "KIKI AMALIA", kodeSTO: "49H00", namaUnit: "Unit Keuangan", jabatan: "Staff", status: "aktif", category: "user" },
    { id: 38, nomorPokok: "USR10", nama: "LUKMAN HAKIM", kodeSTO: "12B30", namaUnit: "Unit Pemasaran", jabatan: "Staff", status: "aktif", category: "user" },

    // Mentor (10)
    { id: 11, nomorPokok: "MTR01", nama: "AHMAD MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Mentor Senior", status: "aktif", category: "mentor" },
    { id: 15, nomorPokok: "MTR02", nama: "REZA MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Mentor Specialist", status: "aktif", category: "mentor" },
    { id: 41, nomorPokok: "MTR03", nama: "SANTI MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Mentor", status: "aktif", category: "mentor" },
    { id: 42, nomorPokok: "MTR04", nama: "TIO MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Mentor", status: "aktif", category: "mentor" },
    { id: 43, nomorPokok: "MTR05", nama: "UMAR MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Mentor", status: "aktif", category: "mentor" },
    { id: 44, nomorPokok: "MTR06", nama: "VINA MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Mentor", status: "aktif", category: "mentor" },
    { id: 45, nomorPokok: "MTR07", nama: "Wawan MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Mentor", status: "aktif", category: "mentor" },
    { id: 46, nomorPokok: "MTR08", nama: "XENA MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Mentor", status: "aktif", category: "mentor" },
    { id: 47, nomorPokok: "MTR09", nama: "YUDI MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Mentor", status: "aktif", category: "mentor" },
    { id: 48, nomorPokok: "MTR10", nama: "ZASKIA MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Mentor", status: "aktif", category: "mentor" },

    // Co-Mentor (10)
    { id: 12, nomorPokok: "COM01", nama: "SITI CO-MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Co-Mentor Junior", status: "aktif", category: "co-mentor" },
    { id: 16, nomorPokok: "COM02", nama: "DIAN CO-MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Co-Mentor Assistant", status: "aktif", category: "co-mentor" },
    { id: 51, nomorPokok: "COM03", nama: "ERIK CO-MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Co-Mentor", status: "aktif", category: "co-mentor" },
    { id: 52, nomorPokok: "COM04", nama: "FEBY CO-MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Co-Mentor", status: "aktif", category: "co-mentor" },
    { id: 53, nomorPokok: "COM05", nama: "GANI CO-MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Co-Mentor", status: "aktif", category: "co-mentor" },
    { id: 54, nomorPokok: "COM06", nama: "HESTI CO-MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Co-Mentor", status: "aktif", category: "co-mentor" },
    { id: 55, nomorPokok: "COM07", nama: "IVAN CO-MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Co-Mentor", status: "aktif", category: "co-mentor" },
    { id: 56, nomorPokok: "COM08", nama: "JULIA CO-MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Co-Mentor", status: "aktif", category: "co-mentor" },
    { id: 57, nomorPokok: "COM09", nama: "KURNIA CO-MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Co-Mentor", status: "aktif", category: "co-mentor" },
    { id: 58, nomorPokok: "COM10", nama: "LENI CO-MENTOR", kodeSTO: "42D10", namaUnit: "Unit Training", jabatan: "Co-Mentor", status: "aktif", category: "co-mentor" },

    // Admin PSP (10)
    { id: 13, nomorPokok: "ADM01", nama: "ADIT ADMIN PSP", kodeSTO: "10A00", namaUnit: "Unit Administrasi", jabatan: "Admin PSP Utama", status: "aktif", category: "admin-psp" },
    { id: 17, nomorPokok: "ADM02", nama: "LALA ADMIN PSP", kodeSTO: "10A00", namaUnit: "Unit Administrasi", jabatan: "Admin PSP Support", status: "aktif", category: "admin-psp" },
    { id: 61, nomorPokok: "ADM03", nama: "MONA ADMIN PSP", kodeSTO: "10A00", namaUnit: "Unit Administrasi", jabatan: "Admin", status: "aktif", category: "admin-psp" },
    { id: 62, nomorPokok: "ADM04", nama: "NINO ADMIN PSP", kodeSTO: "10A00", namaUnit: "Unit Administrasi", jabatan: "Admin", status: "aktif", category: "admin-psp" },
    { id: 63, nomorPokok: "ADM05", nama: "OLLA ADMIN PSP", kodeSTO: "10A00", namaUnit: "Unit Administrasi", jabatan: "Admin", status: "aktif", category: "admin-psp" },
    { id: 64, nomorPokok: "ADM06", nama: "PUTU ADMIN PSP", kodeSTO: "10A00", namaUnit: "Unit Administrasi", jabatan: "Admin", status: "aktif", category: "admin-psp" },
    { id: 65, nomorPokok: "ADM07", nama: "QORI ADMIN PSP", kodeSTO: "10A00", namaUnit: "Unit Administrasi", jabatan: "Admin", status: "aktif", category: "admin-psp" },
    { id: 66, nomorPokok: "ADM08", nama: "RENO ADMIN PSP", kodeSTO: "10A00", namaUnit: "Unit Administrasi", jabatan: "Admin", status: "aktif", category: "admin-psp" },
    { id: 67, nomorPokok: "ADM09", nama: "SARI ADMIN PSP", kodeSTO: "10A00", namaUnit: "Unit Administrasi", jabatan: "Admin", status: "aktif", category: "admin-psp" },
    { id: 68, nomorPokok: "ADM10", nama: "TATA ADMIN PSP", kodeSTO: "10A00", namaUnit: "Unit Administrasi", jabatan: "Admin", status: "aktif", category: "admin-psp" },

    // Superadmin (10)
    { id: 14, nomorPokok: "SUP01", nama: "SUPERHERO ADMIN", kodeSTO: "00S00", namaUnit: "Unit Pusat", jabatan: "Super Admin", status: "aktif", category: "superadmin" },
    { id: 18, nomorPokok: "SUP02", nama: "MASTER ADMIN", kodeSTO: "00S00", namaUnit: "Unit Pusat", jabatan: "Global Super Admin", status: "aktif", category: "superadmin" },
    { id: 71, nomorPokok: "SUP03", nama: "ULTRA ADMIN", kodeSTO: "00S00", namaUnit: "Unit Pusat", jabatan: "Super Admin", status: "aktif", category: "superadmin" },
    { id: 72, nomorPokok: "SUP04", nama: "OMEGA ADMIN", kodeSTO: "00S00", namaUnit: "Unit Pusat", jabatan: "Super Admin", status: "aktif", category: "superadmin" },
    { id: 73, nomorPokok: "SUP05", nama: "ALPHA ADMIN", kodeSTO: "00S00", namaUnit: "Unit Pusat", jabatan: "Super Admin", status: "aktif", category: "superadmin" },
    { id: 74, nomorPokok: "SUP06", nama: "BETA ADMIN", kodeSTO: "00S00", namaUnit: "Unit Pusat", jabatan: "Super Admin", status: "aktif", category: "superadmin" },
    { id: 75, nomorPokok: "SUP07", nama: "GAMMA ADMIN", kodeSTO: "00S00", namaUnit: "Unit Pusat", jabatan: "Super Admin", status: "aktif", category: "superadmin" },
    { id: 76, nomorPokok: "SUP08", nama: "DELTA ADMIN", kodeSTO: "00S00", namaUnit: "Unit Pusat", jabatan: "Super Admin", status: "aktif", category: "superadmin" },
    { id: 77, nomorPokok: "SUP09", nama: "EPSILON ADMIN", kodeSTO: "00S00", namaUnit: "Unit Pusat", jabatan: "Super Admin", status: "aktif", category: "superadmin" },
    { id: 78, nomorPokok: "SUP10", nama: "ZETA ADMIN", kodeSTO: "00S00", namaUnit: "Unit Pusat", jabatan: "Super Admin", status: "aktif", category: "superadmin" },
];

const categories = [
    { id: "onboarding", label: "Onboarding" },
    { id: "user", label: "User" },
    { id: "mentor", label: "Mentor" },
    { id: "co-mentor", label: "Co-Mentor" },
    { id: "admin-psp", label: "Admin PSP" },
    { id: "superadmin", label: "Superadmin" },
];

export default function PenggunaPage() {
    const [activeCategory, setActiveCategory] = React.useState("onboarding");
    const [currentPage, setCurrentPage] = React.useState(1);

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Daftar Pengguna</h1>
                <p className="text-sm text-gray-500">Kelola informasi seluruh pengguna sistem.</p>
            </div>

            {/* Filter Bar */}
            <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-4">
                    <div className="flex flex-col lg:flex-row gap-4 items-end">
                        {/* Role Filter */}
                        <div className="flex-1 space-y-1">
                            <label className="text-[10px] font-bold text-gray-500 uppercase">Role</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                    placeholder="Filter Role"
                                    className="pl-9 h-9 text-sm border-gray-200"
                                />
                            </div>
                        </div>

                        {/* Date Range */}
                        <div className="flex gap-4 items-end">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-500 uppercase">Start Date</label>
                                <div className="relative">
                                    <Input
                                        type="text"
                                        placeholder="mm/dd/yyyy"
                                        className="h-9 text-sm w-36 border-gray-200 pr-9"
                                    />
                                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-500 uppercase">End Date</label>
                                <div className="relative">
                                    <Input
                                        type="text"
                                        placeholder="mm/dd/yyyy"
                                        className="h-9 text-sm w-36 border-gray-200 pr-9"
                                    />
                                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                </div>
                            </div>
                            <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-9 text-xs font-bold px-6">
                                Apply
                            </Button>
                            <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-9 text-xs font-bold px-4 gap-1">
                                <Download className="h-4 w-4" />
                                Export
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={cn(
                            "px-4 py-2 rounded-full text-xs font-bold transition-all duration-200",
                            activeCategory === cat.id
                                ? "bg-sky-600 text-white shadow-md transform scale-105"
                                : "bg-white text-gray-600 border border-gray-200 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-600"
                        )}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Table Controls */}
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">show</span>
                <select className="border border-gray-200 rounded-md px-2 py-1.5 text-sm bg-white text-gray-600">
                    <option>20</option>
                    <option>50</option>
                    <option>100</option>
                </select>
                <span className="text-sm text-gray-500">entries</span>
            </div>

            {/* Data Table */}
            <Card className="bg-white border-none shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="text-white" style={{ background: "linear-gradient(to right, #2563EB 0%, #7E22CE 100%)" }}>
                                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider w-16">RANKING</th>
                                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider w-32">Nomor Pokok</th>
                                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider min-w-[200px]">Nama</th>
                                <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider w-32">Kode STO</th>
                                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider w-40">Nama Unit</th>
                                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider w-40">Jabatan</th>
                                <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider w-28">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {userData.filter(u => u.category === activeCategory).map((item, idx) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-4 text-sm text-gray-600">{idx + 1}</td>
                                    <td className="px-4 py-4 text-sm font-semibold text-gray-900">{item.nomorPokok}</td>
                                    <td className="px-4 py-4 text-sm text-gray-700 font-medium">{item.nama}</td>
                                    <td className="px-4 py-4 text-sm text-gray-500 text-center font-mono">{item.kodeSTO}</td>
                                    <td className="px-4 py-4 text-sm text-gray-600">{item.namaUnit}</td>
                                    <td className="px-4 py-4 text-sm text-gray-600">{item.jabatan}</td>
                                    <td className="px-4 py-4 text-center">
                                        {item.status === "aktif" ? (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500 text-white uppercase">
                                                Aktif
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-red-500 text-white uppercase">
                                                Tidak Aktif
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* Pagination */}
            <div className="flex items-center justify-between text-sm text-gray-500">
                <span>showing 1 of 3 for 60 entries</span>
                <div className="flex items-center gap-1">
                    <button className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600">
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    {[1, 2, 3].map((page) => (
                        <button
                            key={page}
                            className={cn(
                                "h-8 w-8 rounded-md text-xs font-bold transition-colors",
                                currentPage === page
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-gray-100 text-gray-600"
                            )}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    ))}
                    <span className="px-2 text-gray-400">...</span>
                    <button
                        className="h-8 w-8 rounded-md text-xs font-bold hover:bg-gray-100 text-gray-600"
                        onClick={() => setCurrentPage(6)}
                    >
                        6
                    </button>
                    <button className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600">
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
