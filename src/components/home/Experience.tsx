'use client';

export default function Experience() {
  const experiences = [
    {
      unit: "infra-prod.service",
      title: "Production Infrastructure & Self-Hosting",
      description: "Operating a highly secure, distributed self-hosted environment across multi-node AlmaLinux 10 VPS instances. Enforcing strict SELinux policies, Fail2Ban, and firewalld rules. Deploying services (Caddy, Vaultwarden, Immich, Nextcloud) entirely via rootless Podman and systemd Quadlets. Managing a central WireGuard hub for secure private network routing."
    },
    {
      unit: "mail-dns.service",
      title: "Mail & Advanced DNS Architecture",
      description: "Operating a production Stalwart mail server configured with Mailchannels relay. Designing a recursive Technitium DNS resolver acting as a hidden master for global Anycast and secondary nameservers (SatisfyHost, ns-global.zone)."
    },
    {
      unit: "embedded-rpm.service",
      title: "Embedded Systems, ARM & Open Source",
      description: "Flashing and compiling custom ImmortalWrt firmware with proprietary MediaTek drivers for networking hardware (IMOU HX21). Exploring optical networking via V-SOL ONU Telnet interfaces and managing ARM SoC environments (Raspberry Pi 4B). Maintainer of the elitesalman/caddy COPR repository for custom xcaddy RPM builds."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-black border-b border-[#1e1e1e] font-mono">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Section Eyebrow */}
        <div className="text-sm font-medium text-[#a1a1aa] mb-12 flex items-center">
          <span className="text-green-500">salman@infra</span>
          <span className="text-white">:</span>
          <span className="text-blue-500">~</span>
          <span className="text-white">$ journalctl -u projects --since "2024-01-01"</span>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="bg-[#050505] border border-[#1e1e1e] border-l-2 border-l-transparent hover:border-l-[#EE0000] hover:bg-[#0a0a0a] transition-all duration-200 group"
            >
              {/* Card Header Bar */}
              <div className="flex justify-between items-center border-b border-[#1e1e1e] px-6 py-3 bg-[#0a0a0a]">
                <div className="flex items-center text-xs font-bold text-[#e5e5e5]">
                  <span className="text-green-500 mr-2 text-[10px]">●</span>
                  {exp.unit}
                </div>
                <span className="text-[10px] text-[#444] group-hover:text-[#666] transition-colors">active (running)</span>
              </div>
              
              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-base font-bold text-[#e5e5e5] mb-4">{exp.title}</h3>
                <p className="text-sm text-[#888] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
