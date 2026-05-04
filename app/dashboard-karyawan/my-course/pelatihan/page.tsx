"use client"

import { Suspense } from "react"

import { HighTeamPerformance } from "./high-team-performance"

function CourseProgressContent() {


    // Future implementation:
    // const courseId = searchParams.get("course")
    // if (courseId === "other-course") return <OtherCourseComponent />

    return <HighTeamPerformance />
}

export default function CourseProgressPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CourseProgressContent />
        </Suspense>
    )
}
