import React, { useEffect, useState } from "react";
import { fetchGitHubContributions } from "./githubApi";

const getGreyColor = (count) => {
    if (count === 0) return "#ebedf0";
    if (count <= 2) return "#d6d6d6";
    if (count <= 5) return "#bdbdbd";
    if (count <= 10) return "#9e9e9e";
    if (count <= 20) return "#7a7a7a";
    return "#4a4a4a";
};

const getDarkColor = (count) => {
    if (count === 0) return "rgba(255,255,255,0.2)";
    if (count <= 2) return "#0f3d36";
    if (count <= 5) return "#136f63";
    if (count <= 10) return "#1fbfa5";
    if (count <= 20) return "#3fffe0";
    return "#64ffda";
};

const GithubGraph2 = ({ username }) => {
    const [weeks, setWeeks] = useState([]);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        fetchGitHubContributions(username).then(setWeeks);
    }, [username]);

    useEffect(() => {
        const checkDark = () => {
            setIsDark(document.documentElement.classList.contains("dark"));
        };

        checkDark();

        const observer = new MutationObserver(checkDark);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    if (!weeks.length) {
        return (
            <div className="w-full mt-10 text-sm text-gray-400">
                Loading contributions...
            </div>
        );
    }

    return (
        <div className="w-full md:hidden mt-10 overflow-x-auto">
            <div className="flex w-max gap-[3px]">

                {weeks.map((week, i) => (
                    <div key={i} className="flex flex-col gap-[3px] flex-none">

                        {week.contributionDays.map((day, j) => (
                            <div
                                key={j}
                                title={`${day.date}: ${day.contributionCount}`}
                                className="rounded-sm w-3 h-3 md:w-full md:aspect-square"
                                style={{
                                    backgroundColor: isDark
                                        ? getDarkColor(day.contributionCount)
                                        : getGreyColor(day.contributionCount),
                                }}
                            />
                        ))}

                    </div>
                ))}

            </div>
        </div>
    );
};

export default GithubGraph2;