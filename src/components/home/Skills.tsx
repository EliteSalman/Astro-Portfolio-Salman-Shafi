'use client';

export default function Skills() {
  const skillUnits = [
    { id: "os-core", name: "Operating Systems", items: "Fedora/RHEL/AlmaLinux, Debian, Ubuntu, Alpine, FreeBSD" },
    { id: "container-virt", name: "Virtualisation", items: "KVM, QEMU, Hyper-V, Podman (Quadlets & Compose), Docker" },
    { id: "dns-dnssec", name: "DNS & DNSSEC", items: "BIND, Knot, PowerDNS, Technitium, dnsmasq, Unbound, Multi-signer (RFC 8901)" },
    { id: "web-proxy", name: "Web Servers", items: "Caddy, NGINX, Apache, LiteSpeed, Traefik" },
    { id: "mail-stack", name: "Mail Stack", items: "Stalwart, Postfix, Dovecot, Mailcow, Mail-in-a-Box, Google Workspace, M365, Zoho" },
    { id: "network-mesh", name: "Networking", items: "IPv4/IPv6, Routng, BGP, VLAN, CGNAT, WireGuard, Wi-Fi, Tailscale, ZeroTier, Cloudflare Networking (Zero Trust)" },
    { id: "firewall-router", name: "Firewalls & Routers", items: "firewalld, UFW, pf, OpenWrt, KeeneticOS, RouterOS (MikroTik)" },
    { id: "storage-sec", name: "Storage & Security", items: "ZFS, Btrfs, XFS, LVM, LUKS, SELinux, ACME/certbot" },
    { id: "monitor-db", name: "Monitoring & DBs", items: "Grafana, Prometheus, Uptime Kuma, MariaDB, PostgreSQL, Redis, systemd, auditd" },
    { id: "cloud-cdn", name: "Cloud & CDN", items: "Cloudflare (WAF, Tunnels), AWS, Hetzner, Fastly, CloudFront, G-Core, DigitalOcean, MetroVPS" },
    { id: "self-hosted", name: "Self-Hosted Apps", items: "Nextcloud, Vaultwarden, Immich, AdGuard Home, Ghost CMS, PBX" },
    { id: "deploy-pkg", name: "Deployment & Panels", items: "Git, RPM/DEB Packaging, COPR, aaPanel, HestiaCP, cPanel, Webuzo" }
  ];

  return (
    <section id="skills" className="py-24 bg-black border-b border-[#1e1e1e] font-mono scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Eyebrow */}
        <div className="text-sm font-medium text-[#a1a1aa] mb-12 flex items-center whitespace-nowrap overflow-x-auto no-scrollbar">
          <span className="text-green-500">salman@infra</span>
          <span className="text-white">:</span>
          <span className="text-blue-500">~</span>
          <span className="text-white ml-2">$ systemctl list-units --type=skill</span>
        </div>

        {/* 1px Hairline Grid */}
        <div className="bg-[#1e1e1e] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px border border-[#1e1e1e]">
          {skillUnits.map((unit) => (
            <div key={unit.id} className="bg-black p-6 hover:bg-[#050505] transition-colors relative group">
              <div className="flex justify-between items-start mb-5">
                <div className="flex items-center text-xs font-bold text-[#e5e5e5]">
                  <span className="text-green-500 mr-2 text-[10px]">●</span>
                  {unit.id}.service
                </div>
                <span className="text-[10px] text-[#71717a] opacity-50 group-hover:opacity-100 transition-opacity">active (running)</span>
              </div>
              <h3 className="text-[#EE0000] text-sm font-bold mb-4 uppercase tracking-wider">{unit.name}</h3>
              
              {/* Splitting the wall of text into distinct array blocks */}
              <div className="flex flex-wrap gap-2">
                {unit.items.split(', ').map((item, index) => (
                  <span key={index} className="bg-[#0a0a0a] border border-[#1e1e1e] text-[#a1a1aa] px-2 py-1 text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap Target Block */}
        <div className="mt-16 bg-[#1e1e1e] p-px border border-[#1e1e1e]">
          <div className="bg-black p-8 relative hover:bg-[#050505] transition-colors">
             <div className="flex justify-between items-center mb-8 border-b border-[#1e1e1e] pb-4">
               <div className="flex items-center text-sm font-bold text-[#e5e5e5]">
                  <span className="text-yellow-500 mr-2 text-[10px]">●</span>
                  roadmap.target
               </div>
               <span className="text-[10px] text-[#71717a]">active (learning)</span>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-[#888] leading-relaxed">
               <div>
                 <h4 className="text-[#EE0000] font-bold mb-3 uppercase">DevOps & SRE</h4>
                 <p>Deepening expertise in Virtualisation (KVM/QEMU), automation, and monitoring (Prometheus/Grafana).</p>
               </div>
               <div>
                 <h4 className="text-[#EE0000] font-bold mb-3 uppercase">Exploration</h4>
                 <p>Exploring CCTV/Surveillance systems, Backbone networking (MPLS), and advanced IaC (LXC, Kubernetes).</p>
               </div>
               <div>
                 <h4 className="text-[#EE0000] font-bold mb-3 uppercase">Certifications & Community</h4>
                 <p>Actively targeting RHCSA, RHCE, CCNA, and MTCNA. Core philosophy: "Sharing knowledge increases knowledge."</p>
               </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
