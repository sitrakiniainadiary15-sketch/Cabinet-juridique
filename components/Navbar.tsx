"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-logo">
          <span>T</span>
        </div>
        <div className="navbar-title">
          <span className="brand-name">THADEUS</span>
          <span className="brand-sub">EXTERNALIA JURIS</span>
        </div>
      </div>
      <div className="navbar-links">
        <Link href="/">Accueil</Link>
        <Link href="/nos-services">Nos services</Link>
        <Link href="/contact">Contacts</Link>
        <Link href="/admin/login" className="btn-primary">Admin</Link>
      </div>
    </nav>
  );
}