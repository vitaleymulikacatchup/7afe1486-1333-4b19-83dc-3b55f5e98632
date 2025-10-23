"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { BarChart3, Briefcase, Crown, DollarSign, Handshake, Newspaper, Package, Quote, Rocket, Star, TrendingUp, Users } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Services", id: "feature" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="RPRT"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Elite Talent & Sports Management"
          description="From contract negotiations to career management, we handle everything so you can focus on what you do best. Trusted by top athletes and entertainers in Hollywood."
          tag="Premium Management"
          tagIcon={Star}
          buttons={[
            { text: "Start Your Career", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://images.pexels.com/photos/8730043/pexels-photo-8730043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional talent management meeting"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We are RPRT Sports + Talent Management, where elite athletes and entertainment professionals trust us to elevate their careers through strategic management and industry expertise."
          buttons={[
            { text: "Discover Our Services", href: "feature" },
            { text: "Get Started", href: "contact" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Comprehensive Management Services"
          description="We offer complete talent and sports management services across multiple entertainment and athletic industries."
          tag="Our Services"
          tagIcon={Briefcase}
          features={[
            {
              title: "Talent & Athlete Management",
              description: "Complete career management from public relations to endorsements and contract negotiations for elite talent across all market niches.",
              imageSrc: "https://images.pexels.com/photos/29796786/pexels-photo-29796786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Talent management services"
            },
            {
              title: "Film/TV/UGC Production",
              description: "Leveraging our extensive talent and studio network to package and produce TV, film, and user-generated content with branded integration.",
              imageSrc: "https://images.pexels.com/photos/275977/pexels-photo-275977.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Film and TV production"
            },
            {
              title: "PR & Product Placement",
              description: "Nearly a decade of experience placing products in film, TV, music videos, and with celebrities across all media platforms.",
              imageSrc: "https://images.pexels.com/photos/5872364/pexels-photo-5872364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Product placement and PR"
            },
            {
              title: "Brand Development & Consulting",
              description: "Strategic advice on infiltrating the Hollywood landscape with exponential marketing growth and infrastructure building.",
              imageSrc: "https://images.pexels.com/photos/7688108/pexels-photo-7688108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Brand development consulting"
            },
            {
              title: "Event Management",
              description: "From red carpet premieres to product launches and private events - complete event production with media coverage worldwide.",
              imageSrc: "https://images.pexels.com/photos/6102455/pexels-photo-6102455.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Event management services"
            },
            {
              title: "Social Media Marketing",
              description: "Comprehensive social networking campaigns across Twitter, Facebook, Instagram, and TikTok with proven results for clients.",
              imageSrc: "https://images.pexels.com/photos/6956303/pexels-photo-6956303.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Social media marketing"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Service Packages"
          description="Choose from our comprehensive service packages designed for different career stages and needs."
          tag="Packages"
          tagIcon={Package}
          products={[
            {
              id: "1",
              name: "Rising Talent Package",
              price: "Custom Quote",
              imageSrc: "https://images.pexels.com/photos/3651215/pexels-photo-3651215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rising talent package"
            },
            {
              id: "2",
              name: "Production Services",
              price: "Project Based",
              imageSrc: "https://images.pexels.com/photos/34342636/pexels-photo-34342636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Production services package"
            },
            {
              id: "3",
              name: "PR & Placement",
              price: "Campaign Rate",
              imageSrc: "https://images.pexels.com/photos/7310245/pexels-photo-7310245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "PR and placement package"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Investment Levels"
          description="Professional management services tailored to your career stage and goals."
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "emerging",
              badge: "Emerging Talent",
              badgeIcon: TrendingUp,
              price: "15%",
              subtitle: "Commission-based for new talent",
              features: [
                "Career strategy development",
                "Contract review and negotiation",
                "Basic PR and social media support",
                "Industry networking introductions"
              ]
            },
            {
              id: "established",
              badge: "Established Professional",
              badgeIcon: Star,
              price: "20%",
              subtitle: "Premium service for proven talent",
              features: [
                "Full-service career management",
                "Advanced contract negotiations",
                "Complete PR and media management",
                "Endorsement deal procurement",
                "Event coordination and management"
              ]
            },
            {
              id: "elite",
              badge: "Elite Level",
              badgeIcon: Crown,
              price: "Custom",
              subtitle: "Bespoke service for top-tier clients",
              features: [
                "24/7 concierge-level support",
                "Multi-platform deal structuring",
                "Global brand partnership strategy",
                "Exclusive industry access",
                "Personal brand development",
                "Crisis management support"
              ]
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Proven Track Record"
          description="Our success is measured by our clients' achievements and industry impact."
          tag="Results"
          tagIcon={BarChart3}
          metrics={[
            {
              id: "1",
              value: "500+",
              description: "Talent Clients Managed"
            },
            {
              id: "2",
              value: "10+",
              description: "Years Industry Experience"
            },
            {
              id: "3",
              value: "$100M+",
              description: "Deals Negotiated"
            },
            {
              id: "4",
              value: "95%",
              description: "Client Retention Rate"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Industry veterans with deep connections and proven expertise in talent management."
          tag="Leadership"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Ryan Patrick",
              role: "Founder & CEO",
              description: "Former studio executive with 15+ years managing A-list talent and multi-million dollar entertainment deals.",
              imageSrc: "https://images.pexels.com/photos/7005247/pexels-photo-7005247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ryan Patrick portrait",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com" },
                { icon: "Twitter", url: "https://twitter.com" }
              ]
            },
            {
              id: "2",
              name: "Sarah Martinez",
              role: "Head of Talent Relations",
              description: "Award-winning agent specializing in sports marketing and celebrity endorsement deals across all major platforms.",
              imageSrc: "https://images.pexels.com/photos/32083784/pexels-photo-32083784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Martinez portrait",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com" },
                { icon: "Instagram", url: "https://instagram.com" }
              ]
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Client Success Stories"
          description="Hear from the elite athletes and entertainers we've helped reach new heights."
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Marcus Thompson",
              role: "Professional Athlete",
              company: "NBA All-Star",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7005247/pexels-photo-7005247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Thompson"
            },
            {
              id: "2",
              name: "Jessica Chen",
              role: "Actress",
              company: "Hollywood A-List",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/32083784/pexels-photo-32083784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jessica Chen"
            },
            {
              id: "3",
              name: "David Rodriguez",
              role: "Director",
              company: "Award-Winning Filmmaker",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/2157168/pexels-photo-2157168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Rodriguez"
            },
            {
              id: "4",
              name: "Amanda Foster",
              role: "Olympic Champion",
              company: "Team USA",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7971754/pexels-photo-7971754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Amanda Foster"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Industry Partners"
          description="Working with major studios, networks, and brands across entertainment and sports."
          tag="Partners"
          tagIcon={Handshake}
          logos={["/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp"]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about working with RPRT"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "What services does RPRT provide?",
              content: "We offer comprehensive talent and sports management including career management, contract negotiations, PR services, brand development, event management, and social media marketing across entertainment and athletic industries."
            },
            {
              id: "2",
              title: "How do I become a client?",
              content: "Contact us at info@rp-rt.com to discuss your career goals and current status. We evaluate potential clients based on talent level, marketability, and career trajectory to ensure the best fit for our services."
            },
            {
              id: "3",
              title: "What is your commission structure?",
              content: "Our commission ranges from 15-20% depending on service level and client needs. Elite-level clients receive custom pricing based on their specific requirements and deal complexity."
            },
            {
              id: "4",
              title: "Do you work with emerging talent?",
              content: "Yes, we work with talent at all career stages. Our emerging talent package is designed specifically for newcomers who need strategic career development and industry introductions."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Industry Insights"
          description="Stay updated with the latest trends and strategies in talent management and entertainment business."
          tag="Blog"
          tagIcon={Newspaper}
          blogs={[
            {
              id: "1",
              category: "Career Strategy",
              title: "Building Your Personal Brand in Hollywood",
              excerpt: "Essential strategies for athletes and entertainers to establish authentic personal brands that resonate with audiences.",
              imageSrc: "https://images.pexels.com/photos/7688108/pexels-photo-7688108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Personal branding strategy",
              authorName: "Ryan Patrick",
              authorAvatar: "https://images.pexels.com/photos/7005247/pexels-photo-7005247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Industry Trends",
              title: "The Future of Sports Marketing",
              excerpt: "How digital platforms and social media are reshaping athlete endorsement deals and fan engagement strategies.",
              imageSrc: "https://images.pexels.com/photos/6956303/pexels-photo-6956303.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sports marketing trends",
              authorName: "Sarah Martinez",
              authorAvatar: "https://images.pexels.com/photos/32083784/pexels-photo-32083784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Contract Negotiation",
              title: "Maximizing Deal Value in Entertainment",
              excerpt: "Key negotiation tactics and contract terms that protect talent while maximizing earning potential in entertainment deals.",
              imageSrc: "https://images.pexels.com/photos/29796786/pexels-photo-29796786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Contract negotiation",
              authorName: "RPRT Team",
              authorAvatar: "https://images.pexels.com/photos/2157168/pexels-photo-2157168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "10 Jan 2025"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Elevate Your Career?"
          description="Contact RPRT today to discuss how we can help you reach the next level in your athletic or entertainment career. For our complete client roster, reach out directly."
          tagIcon={Rocket}
          inputPlaceholder="Enter your email"
          buttonText="Contact Us"
          termsText="By contacting us, you agree to discuss your career goals and potential partnership opportunities with RPRT."
          imageSrc="https://images.pexels.com/photos/5989941/pexels-photo-5989941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="RPRT office meeting space"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                { label: "Talent Management", href: "feature" },
                { label: "Film/TV Production", href: "feature" },
                { label: "PR & Placement", href: "feature" },
                { label: "Brand Consulting", href: "feature" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Case Studies", href: "blog" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Industry Insights", href: "blog" },
                { label: "Client Success", href: "testimonial" },
                { label: "FAQ", href: "faq" },
                { label: "Pricing", href: "pricing" }
              ]
            }
          ]}
          copyrightText="© 2025 | RPRT Sports + Talent Management"
          logoSrc="/brand/logo.svg"
        />
      </div>
    </ThemeProvider>
  );
}