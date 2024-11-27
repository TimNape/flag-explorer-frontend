import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Register the ScrollToPlugin with GSAP
gsap.registerPlugin(ScrollToPlugin);

const scrollToTop = () => {
  gsap.to(window, { duration: 0.5, scrollTo: { y: 0 }, ease: "power2.inOut" });
};

export const AutoScrollToTop = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        console.log(pathname)
        /* settimeout make sure this run after components have rendered. This will help fixing bug for some views where scroll to top not working perfectly */
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 0)
    }, [pathname])
    return null
}

export default scrollToTop;
