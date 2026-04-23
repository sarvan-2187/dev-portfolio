"use client"

import { ReactNode, useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 1,
        })

        const syncLenisState = () => {
            if (document.body.dataset.modalOpen === "true") {
                lenis.stop()
            } else {
                lenis.start()
            }
        }

        const observer = new MutationObserver(syncLenisState)
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["data-modal-open"],
        })

        syncLenisState()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            observer.disconnect()
            lenis.destroy()
        }
    }, [])

    return <>{children}</>
}