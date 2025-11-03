import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-600">Ship AI Solutions, LLC</p>
          <p className="text-sm text-gray-500 mt-2">Last Updated: November 3, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Ship AI Solutions, LLC ("Company," "we," "our," or "us"). These Terms of Service 
              ("Terms") govern your access to and use of our website at{' '}
              <a href="https://shipailab.com" className="text-blue-600 hover:underline">
                https://shipailab.com
              </a>{' '}
              (the "Website") and the services we provide, including AI SaaS development, product development, 
              mobile and web app creation, and AI application development (collectively, the "Services").
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              By accessing or using our Website or Services, you agree to be bound by these Terms. If you 
              do not agree to these Terms, you may not access or use our Services.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Eligibility</h2>
            <p className="text-gray-700 leading-relaxed">
              You must be at least 18 years old and have the legal capacity to enter into a binding 
              contract to use our Services. By using our Services, you represent and warrant that you 
              meet these eligibility requirements.
            </p>
          </section>

          {/* Services Description */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Services Description</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Ship AI Solutions, LLC provides the following services:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <span className="font-medium">AI SaaS Development:</span> Building scalable, user-friendly 
                SaaS solutions tailored to your business needs
              </li>
              <li>
                <span className="font-medium">Product Development:</span> Creating high-performance mobile 
                and web applications designed for user engagement
              </li>
              <li>
                <span className="font-medium">AI Application Development:</span> Developing innovative AI 
                applications to automate processes and drive business growth
              </li>
              <li>
                <span className="font-medium">15-Day Delivery Process:</span> Our proven rapid development 
                methodology with budget-friendly fixed pricing
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Specific deliverables, timelines, and pricing will be outlined in individual service agreements 
              or statements of work.
            </p>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Accounts</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              To access certain features of our Services, you may need to create an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your account information</li>
              <li>Keep your account credentials secure and confidential</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Pricing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our Services are provided at fixed pricing as agreed upon in your service agreement. 
                  All prices are in U.S. Dollars unless otherwise specified.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Payment Schedule</h3>
                <p className="text-gray-700 leading-relaxed">
                  Payment terms will be specified in your service agreement. Typical payment structures 
                  may include upfront deposits, milestone payments, or full payment upon completion.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Late Payments</h3>
                <p className="text-gray-700 leading-relaxed">
                  Late payments may result in suspension of services and may incur late fees as specified 
                  in your service agreement.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Refunds</h3>
                <p className="text-gray-700 leading-relaxed">
                  Refund policies will be outlined in your specific service agreement. Generally, deposits 
                  are non-refundable once work has commenced.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Our Property</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Website and Services, including all content, features, and functionality, are owned 
                  by Ship AI Solutions, LLC and are protected by copyright, trademark, and other intellectual 
                  property laws.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Deliverables</h3>
                <p className="text-gray-700 leading-relaxed">
                  Upon full payment, you will receive the intellectual property rights to custom work 
                  products created specifically for you, as outlined in your service agreement. We retain 
                  rights to any pre-existing materials, tools, frameworks, or components used in the 
                  development process.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">License to Use</h3>
                <p className="text-gray-700 leading-relaxed">
                  Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license 
                  to access and use the Services for your business purposes.
                </p>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. User Responsibilities and Prohibited Conduct</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Use the Services for any illegal purpose or in violation of any laws</li>
              <li>Infringe upon the intellectual property rights of others</li>
              <li>Transmit malicious code, viruses, or harmful components</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the Services or servers</li>
              <li>Impersonate any person or entity</li>
              <li>Collect or harvest information about other users</li>
              <li>Use our Services to develop competing products or services</li>
            </ul>
          </section>

          {/* Project Timeline */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Project Timeline and Deliverables</h2>
            <p className="text-gray-700 leading-relaxed">
              While we strive to deliver projects within our advertised 15-day timeline, actual delivery 
              dates are subject to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
              <li>Project scope and complexity</li>
              <li>Timely provision of required information and materials by the client</li>
              <li>Approval of milestones and deliverables</li>
              <li>Factors beyond our reasonable control</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Specific timelines and deliverables will be detailed in your service agreement.
            </p>
          </section>

          {/* Confidentiality */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed">
              Both parties agree to keep confidential any proprietary information disclosed during the 
              course of the engagement. This includes business plans, technical specifications, trade 
              secrets, and other sensitive information. Confidentiality obligations will be further 
              detailed in a separate Non-Disclosure Agreement if required.
            </p>
          </section>

          {/* Warranties and Disclaimers */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Warranties and Disclaimers</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Our Warranties</h3>
                <p className="text-gray-700 leading-relaxed">
                  We warrant that our Services will be performed in a professional and workmanlike manner 
                  consistent with industry standards.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Disclaimer</h3>
                <p className="text-gray-700 leading-relaxed uppercase font-medium">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
                  EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO 
                  IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND 
                  NON-INFRINGEMENT.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed uppercase font-medium">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SHIP AI SOLUTIONS, LLC SHALL NOT BE LIABLE FOR 
              ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF 
              PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, 
              GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
              <li>Your use or inability to use the Services</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any interruption or cessation of transmission to or from the Services</li>
              <li>Any bugs, viruses, or other harmful code transmitted through the Services</li>
              <li>Any errors or omissions in any content</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3 uppercase font-medium">
              OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICES IN THE 
              TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Ship AI Solutions, LLC, its officers, 
              directors, employees, and agents from any claims, liabilities, damages, losses, costs, 
              expenses, or fees (including reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
              <li>Your use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Content or materials you provide to us</li>
            </ul>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate your access to the Services at any time, 
              with or without cause, with or without notice. You may terminate your use of the Services 
              at any time. Upon termination:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
              <li>Your right to use the Services will immediately cease</li>
              <li>You remain liable for all amounts due up to the termination date</li>
              <li>Provisions that by their nature should survive termination will survive</li>
            </ul>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will provide notice of material 
              changes by posting the updated Terms on our Website and updating the "Last Updated" date. 
              Your continued use of the Services after such changes constitutes your acceptance of the 
              new Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Governing Law and Dispute Resolution</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Governing Law</h3>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the 
                  State of Wyoming, United States, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Dispute Resolution</h3>
                <p className="text-gray-700 leading-relaxed">
                  Any disputes arising out of or relating to these Terms or the Services shall be 
                  resolved through binding arbitration in accordance with the rules of the American 
                  Arbitration Association, except that either party may seek injunctive relief in 
                  court to protect intellectual property rights.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Venue</h3>
                <p className="text-gray-700 leading-relaxed">
                  Any legal action or proceeding shall be brought exclusively in the state or federal 
                  courts located in Sheridan County, Wyoming.
                </p>
              </div>
            </div>
          </section>

          {/* Miscellaneous */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Miscellaneous</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Entire Agreement</h3>
                <p className="text-gray-700 leading-relaxed">
                  These Terms, together with any service agreements and our Privacy Policy, constitute 
                  the entire agreement between you and Ship AI Solutions, LLC.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Severability</h3>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining 
                  provisions will remain in full force and effect.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Waiver</h3>
                <p className="text-gray-700 leading-relaxed">
                  No waiver of any term of these Terms shall be deemed a further or continuing waiver 
                  of such term or any other term.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Assignment</h3>
                <p className="text-gray-700 leading-relaxed">
                  You may not assign or transfer these Terms or your rights hereunder without our prior 
                  written consent. We may assign these Terms without restriction.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Force Majeure</h3>
                <p className="text-gray-700 leading-relaxed">
                  We shall not be liable for any failure to perform our obligations due to circumstances 
                  beyond our reasonable control, including acts of God, war, terrorism, pandemics, or 
                  infrastructure failures.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Ship AI Solutions, LLC</span>
              </p>
              <p className="text-gray-700">30 N Gould St Ste R</p>
              <p className="text-gray-700">Sheridan, WY 82801</p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> contact@shipailab.com
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> 251-332-3311
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Website:</span>{' '}
                <a href="https://shipailab.com" className="text-blue-600 hover:underline">
                  https://shipailab.com
                </a>
              </p>
             
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Acknowledgment</h2>
            <p className="text-gray-700 leading-relaxed">
              BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND 
              AGREE TO BE BOUND BY THEM.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}