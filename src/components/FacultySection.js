import Link from "next/link";
import { Mail, ArrowRight, BookOpen } from "lucide-react";
import { LinkedinIcon } from "./SocialIcons";
import { facultyMembers } from "@/data/instituteData";

export default function FacultySection() {
  const featuredFaculty = facultyMembers.slice(0, 4);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#1D4ED8]">
              ACADEMIC EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight">
              Meet Our Faculty
            </h2>
            <p className="text-base text-[#6B7280]">
              Learn under distinguished practitioners, researchers, and tech architects from top global institutions.
            </p>
          </div>

          <Link
            href="/faculty"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0B0B0C] hover:text-[#1D4ED8] transition-colors group flex-shrink-0"
          >
            <span>View All Faculty Members</span>
            <ArrowRight className="w-4 h-4 text-[#1D4ED8] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredFaculty.map((member) => (
            <div
              key={member.id}
              className="group bg-gray-50/70 rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Photo with zoom effect */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                {/* Social Quick Links Appearing on Hover */}
                <div className="absolute top-3 right-3 flex items-center space-x-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/90 text-gray-900 hover:bg-[#1D4ED8] hover:text-white flex items-center justify-center shadow-md transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 rounded-full bg-white/90 text-gray-900 hover:bg-[#1D4ED8] hover:text-white flex items-center justify-center shadow-md transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Department Tag */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-0.5 bg-[#0B0B0C]/80 backdrop-blur-md text-white text-[10px] font-bold rounded-md uppercase tracking-wider">
                    {member.department}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-[#0B0B0C] group-hover:text-[#1D4ED8] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5">{member.role}</p>
                  <p className="text-xs text-[#6B7280] line-clamp-2 mt-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Expertise Tags */}
                <div className="pt-2 border-t border-gray-200/60 flex flex-wrap gap-1">
                  {member.expertise.map((exp) => (
                    <span
                      key={exp}
                      className="px-2 py-0.5 bg-white text-gray-600 rounded text-[10px] font-medium border border-gray-200"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
