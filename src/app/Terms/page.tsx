import Footer from "../../../public/components/Footer";
import Navbar from "../../../public/components/Navbar";

// app/terms/page.jsx
export default function TermsPage() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#070812] text-gray-200 px- py-20">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight 
                         bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 
                         bg-clip-text text-transparent">
            Terms &amp; Conditions
          </h1>

          <p className="text-sm text-gray-400 mt-3">Last Updated: August 31, 2025</p>
        </header>

        {/* Entity / Jurisdiction */}
        <div className="mb-8 flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-gray-800 pb-3">
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Entity</div>
              <div className="text-sm font-semibold text-gray-100">Scraper Inc</div>
            </div>

            <div className="text-right">
              <div className="text-xs text-gray-400 uppercase tracking-wider">Jurisdiction</div>
              <div className="text-sm text-gray-100">India</div>
            </div>
          </div>

          <p className="text-gray-300 mt-4">
            By accessing or using Scraper Inc’s services (the “Services”), including SEO,
            website design and related digital services, you agree to these Terms &amp; Conditions.
            If you do not agree, please stop using our Services immediately.
          </p>
        </div>

        {/* Intro bullets */}
        <div className="mb-8 text-gray-300">
          <p className="mb-3">These Terms include compliance with:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400">
            <li>Applicable consumer protection and privacy laws</li>
            <li>Local laws of the jurisdiction listed above</li>
          </ul>
        </div>

        {/* Sections */}
        <main className="space-y-10">
          <Section number="1" title="Eligibility">
            <p>
              You must be at least 18 years old and legally able to enter into binding agreements
              to use our Services. Minors may use the Services only with parental consent.
            </p>
          </Section>

          <Section number="2" title="Scope of Services">
            <p>
              We provide SEO solutions, website design and development, and related digital marketing
              services. All deliverables, timelines and fees will be set out in separate proposals or
              agreements.
            </p>
          </Section>

          <Section number="3" title="Client Obligations">
            <p className="mb-2">
              To enable timely delivery you agree to:
            </p>
            <ul className="list-disc pl-5 text-gray-400 space-y-1">
              <li>Provide accurate information, assets, and timely feedback.</li>
              <li>Grant necessary access to hosting, domains, analytics, and third-party tools.</li>
              <li>Ensure submitted materials do not infringe third-party rights.</li>
            </ul>
          </Section>

          <Section number="4" title="Payments & Refunds">
            <p>
              Fees, payment schedule and billing terms are specified in your proposal or invoice.
              Deposits may be required. Payments are non-refundable once work has commenced unless
              otherwise agreed in writing.
            </p>
          </Section>

          <Section number="5" title="Intellectual Property">
            <p>
              All work we produce remains our property until full payment is received. Upon full
              payment, ownership of project-specific deliverables (designs, content, code) transfers
              to the client except for pre-existing tools, frameworks, or third-party assets which
              remain the property of their owners.
            </p>
          </Section>

          <Section number="6" title="SEO & Performance Disclaimer">
            <p>
              We use industry best-practices to improve visibility and performance. However, we do not
              guarantee specific search engine rankings or traffic levels, as results depend on many
              external factors outside our control.
            </p>
          </Section>

          <Section number="7" title="Limitation of Liability">
            <p>
              To the fullest extent permitted by law, our liability for any claim related to the
              Services is limited to the amount paid by you for the specific service giving rise
              to the claim. We are not liable for indirect, incidental or consequential damages.
            </p>
          </Section>

          <Section number="8" title="Confidentiality">
            <p>
              Both parties shall keep confidential any sensitive business or technical information
              shared during the engagement and shall not disclose such information without prior consent.
            </p>
          </Section>

          <Section number="9" title="Termination">
            <p>
              Either party may terminate the engagement by written notice. You remain responsible for
              payment for all work completed through the effective termination date.
            </p>
          </Section>

          <Section number="10" title="Governing Law">
            <p>
              These Terms are governed by the laws of India. Any disputes shall be resolved in the
              courts located in [City, State].
            </p>
          </Section>

          <Section number="11" title="Changes to Terms">
            <p>
              We may modify these Terms from time to time. We will post the updated Terms on this page
              with a revised “Last Updated” date. Continued use of Services after posting constitutes acceptance.
            </p>
          </Section>

          <Section number="12" title="Contact">
            <p>
              For questions regarding these Terms, contact us at:
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Email: <a className="text-pink-400 underline" href="mailto:support@scraperinc.com">support@scraperinc.com</a><br/>
              Address: [Your Company Address]
            </p>
          </Section>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Scraper Inc. All rights reserved.
        </footer>
      </div>
    </div>
    <Footer />
    </>
    
  );
}

/* Section subcomponent (keeps markup tidy) */
function Section({ number, title, children }) {
  return (
    <>
    <section className="relative">
      <div className="absolute -left-12 top-0 hidden md:block">
        <div className="text-6xl font-extrabold text-gray-900/10 select-none">{number}</div>
      </div>

      <div className="pl-0 md:pl-8">
        <h3 className="flex items-baseline gap-3 text-lg font-semibold text-gray-100">
          <span className="text-pink-400 font-mono text-sm">#{number}</span>
          {title}
        </h3>
        <div className="mt-3 text-gray-300 space-y-3">
          {children}
        </div>
      </div>
    </section>
    </>
    

  );
}
