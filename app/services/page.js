import Link from "next/link";

export default function Services() {
    
    return <>
        <h1>Services</h1>
        <p>Our services include:</p>
        <Link href="/services/web-dev">Web development</Link><br />
        <Link href="/services/seo-opti">SEO optimization</Link><br />
    </>
}