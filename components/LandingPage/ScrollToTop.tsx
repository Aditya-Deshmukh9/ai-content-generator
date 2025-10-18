"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const pathname = usePathname();
    const [hash, setHash] = useState("");

    useEffect(() => {
        const handleHashChange = () => setHash(window.location.hash);
        window.addEventListener("hashchange", handleHashChange);

        // On first load, set hash
        setHash(window.location.hash);

        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    useEffect(() => {
        const isManualTabSwitch = sessionStorage.getItem("manualTabNavigation");
        if (isManualTabSwitch === "true") {
            sessionStorage.removeItem("manualTabNavigation");
            return;
        }

        if (hash) {
            const scrollToHash = () => {
                const yOffset = -10; // adjust for sticky header
                const target = document.querySelector(hash);
                if (target) {
                    const y =
                        target.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            };
            // delay to ensure DOM is ready
            setTimeout(scrollToHash, 300);
            return;
        }

        // Default scroll to top when no hash
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname, hash]);

    return null;
}