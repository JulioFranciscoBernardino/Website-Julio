import { SiteHeader } from "@/components/sections/SiteHeader"
import { HeroSection, AboutSection } from "@/components/sections/HeroAbout"
import { ExperienceSection, EducationSection } from "@/components/sections/ExperienceEducation"
import { AutomationSection } from "@/components/sections/AutomationSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ObjectivesSection } from "@/components/sections/ObjectivesSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { SiteFooter } from "@/components/sections/SiteFooter"

export default function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <AutomationSection />
        <ProjectsSection />
        <ObjectivesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
