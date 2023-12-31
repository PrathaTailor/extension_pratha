import Link from 'next/link'
import styles from './privacy.module.scss'
const Privacy = () => {
  return (
    <div className={styles.root}>
      <div className={styles.privacyContainer}>
        <div className={styles.privacyWrapper}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <div className={styles.privacyContentWrapper}>
            <p>Last Updated on February 06, 2023</p>
            <p>
              This Site is owned by extension.tax and its subsidiaries and
              affiliates (collectively, “we” or “us”). This privacy policy (this
              “Privacy Policy”) describes our privacy practices, the information
              we collect, the use, disclosure, and retention of information,
              including personal information you share with us on extension.tax
              (the “Site”). This Privacy Policy is intended to advise you with
              respect to content on the Site, as well as help you understand
              what information we collect through the Site and how we collect
              it, use it, share it, and protect it. We comply, as required, with
              the mandated IRS e-file Security, Privacy and Business Standards
              (IRS Publication 3112); the Federal Trade Commission Financial
              Privacy and Safeguards Rules; and the Gramm-Leach-Bliley Act,
              codified at 15 U.S.C. Sections 6801-6827. By accessing or using
              our Service (as defined in the Terms of Use), you agree you have
              read, understood, and agree to our collection, storage, use and
              disclosure of your personal information as described in this
              Privacy Policy and our terms of use, which can be found at
              https://extension.tax/terms-of-use (the “Terms of Use”).
            </p>
            <h3>
              <u>The Information We Collect:</u>
            </h3>
            <p>
              The personal information we receive from you depends on the
              context of your interactions with us, how your account is
              configured, and your privacy settings. Personal information we
              receive from you may depend on the Services you use.
            </p>
            <ol>
              <li>
                <u>Personally Identifiable Information:</u>
                To conduct the Services, you agree to voluntarily provide us
                with certain information via the Site that identifies you and
                your financial records (the “Personally Identifiable
                Information” or “PII”) including without limitation:
                <ul className={styles.listOne}>
                  <li>Name</li>
                  <li>Mailing address</li>
                  <li>E-mail address</li>
                  <li>Phone (or mobile) number</li>
                  <li>Date of birth or age</li>
                  <li>Social Security Number (SSN)</li>
                  <li>Credit/debit card number</li>
                  <li>
                    Tax and financial information, including wages, salary,
                    income, refunds, etc.
                  </li>
                  <li>
                    Other information that serve as answers to certain security
                    questions
                  </li>
                </ul>
              </li>
              <li>
                <u>Non-Personally Identifiable Information:</u> Non-personally
                identifiable information (the “Non-PII”) includes any
                information from which your identity is not readily
                ascertainable, and may include your internet protocol address,
                browser, operating system, pages or content you access while
                visiting the Site and the date and time and duration of such
                access. In addition to you voluntarily providing us Non-PII,
                Non-PII is automatically collected through the Site.
              </li>
            </ol>
            <p>
              We automatically collect and store certain types of information
              about your use of our Services, including information about your
              interaction with our products, content and Services through the
              Site. Like many websites, we use unique identifiers, and obtain
              certain types of information when your web browser or device
              accesses the Site and other content served by or on behalf of us
              on other websites. Identifiers are data that can either directly
              or indirectly identify an individual or link an individual to
              their identity.
            </p>

            <h3>
              <u>The Use of Cookies and Tracking Technology:</u>
            </h3>

            <p>
              To enable our systems to recognize your browser or device and to
              provide and improve our Services, we use cookies and other
              identifiers. We may collect information through the Site by way of
              cookies or other tracking technologies. Cookies and other tracking
              technologies are script files that facilitate the collection of
              Non-PII, such as the number of visitors to the Site, how each
              visitor arrived at the Site and the visitor’s use and behavior
              patterns on the site to ensure a better customer experience.
            </p>
            <p>
              We use certain first-party cookies, which do not require your
              consent, that commonly are referred to as “strictly necessary
              cookies.” These cookies ensure our digital services work correctly
              and meet audience needs and interests. We use the following
              strictly necessary cookies:
            </p>
            <ul>
              <li>
                Session cookies: the use of these cookies is strictly limited to
                the transmission of session identification data (random numbers
                generated by the server), which are necessary to allow the safe
                and efficient exploration of the Site and/or the Services. They
                are not permanently stored on your device and disappear when the
                browser is closed or after a period of inactivity. In
                particular, the use of session cookies is aimed at the security
                and improvement of the Service offered;
              </li>
              <li>
                Technical cookies: these cookies track the consent given by you
                and are used to identify you for the duration of your session
                and to authorize you to use parts of the Site that would
                otherwise be restricted;
              </li>
              <li>
                User centric security: these cookies detect and block cross-site
                request forgery attacks;
              </li>
              <li>
                User interface customization: these cookies track your
                preferences (such as language or font) and data transferred
                between different pages on the Site; and
              </li>
              <li>
                Analytics cookies: these cookies are similar to technical
                cookies insofar as they are used directly by the website manager
                to collect aggregate information on the number of visitors and
                the pattern of visits to, and use of, the Site and/or the
                Services.
              </li>
            </ul>
            <p>
              Some third parties also may provide cookies or similar
              technologies on the Site and/or the Services. You are free to
              “opt-out” of the use of these cookies at any time as described
              below. Such cookies or similar technologies are not under our
              control, are managed by third parties, and are divided into the
              following macro-categories:
            </p>
            <ul>
              <li>
                Profiling cookies: these cookies are used to track your
                navigation on the web and to create profiles on your tastes,
                habits, choices, etc. With these cookies, advertising messages
                can be transmitted to your device in line with the preferences
                already expressed by you when browsing online. In accordance
                with the regulations applicable to the Site and the Services,
                you may “opt out” of the use of these cookies and the
                performance of the processing operations connected to them. The
                deactivation of such third-party cookies does not compromise the
                use of the Site and/or the Services; and
              </li>
              <li>
                Multimedia content player: these cookies store technical data to
                play back video or audio content for the duration of a session.
              </li>
            </ul>

            <p>Examples of the cookies we use include the following:</p>
            <table>
              <tr>
                <th>Use Category</th>
                <th>Types of Information Tracked</th>
              </tr>
              <tr>
                <td>Facebook, Media Optimization</td>
                <td>Conversion data</td>
              </tr>
              <tr>
                <td>Push, Messaging</td>
                <td>User Consent, Site Visitation</td>
              </tr>
              <tr>
                <td>Bing, Media Optimization</td>
                <td>Conversion data</td>
              </tr>
              <tr>
                <td>Google, Media Optimization</td>
                <td>Conversion data</td>
              </tr>
              <tr>
                <td>Google Analytics</td>
                <td>Conversion data</td>
              </tr>
              <tr>
                <td>Google AdWords</td>
                <td>Conversion data</td>
              </tr>
              <tr>
                <td>
                  TruConversion, DataDog and other Internal Tracking, Media
                  Optimization
                </td>
                <td>Conversion Data; behavior and use patterns on the site.</td>
              </tr>
              <tr>
                <td>Bug fixing, UI troubleshooting</td>
                <td>Site navigation & experience</td>
              </tr>
              <tr>
                <td>TikTok, Media Optimization</td>
                <td>Conversion data</td>
              </tr>
            </table>
            <p>
              Almost all web browsers allow you to verify which cookies are
              present on your personal hard drives, block all cookies, or
              receive a notification any time a cookie is installed. In certain
              cases, however, failure to install a cookie may lead to the
              impossibility to use certain sections of the Site and/or Services.
              If you elect to reject cookies and other tracking technologies, we
              may not be able to deliver certain information or services to you.
              Information about the procedure you are required to follow in
              order to disable cookies can also be found on at
              <Link href="http://www.allaboutcookies.org/manage-cookies/index.html">
                {' '}
                http://www.allaboutcookies.org/manage-cookies/index.html
              </Link>
              .
            </p>
            <p>
              This website uses various analytics tools that use cookies to
              process information including standard internet log information
              and details of the visitor’s behavioral patterns upon visiting our
              site. These tools are used to provide you with a better
              experience, and to facilitate the use of certain functions. Upon
              request, we will provide you with additional information about
              these tools including how you can opt-out from information
              processing by these tools.
            </p>
            <p>
              Below are the methods offered by the primary browsers which allow
              the users to express their options regarding the use of cookies:
            </p>
            <ul>
              <li>
                Internet Explorer:{' '}
                <Link
                  target="_blank"
                  href="http://windows.microsoft.com/it-it/internet-explorer/delete-manage-cookies#ie=ie-11"
                >
                  {' '}
                  http://windows.microsoft.com/it-it/internet-explorer/delete-manage-cookies#ie=ie-11
                </Link>
                ;
              </li>
              <li>
                Chrome:{' '}
                <Link
                  target="_blank"
                  href="https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform=Desktop"
                >
                  {' '}
                  https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform=Desktop
                </Link>
                ;
              </li>
              <li>
                Firefox:{' '}
                <Link
                  target="_blank"
                  href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                >
                  {' '}
                  https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox
                </Link>
                ;
              </li>
              <li>
                Opera:{' '}
                <Link
                  target="_blank"
                  href="http://help.opera.com/Windows/10.00/it/cookies.html"
                >
                  {' '}
                  http://help.opera.com/Windows/10.00/it/cookies.html
                </Link>
                ;
              </li>
              <li>
                Safari:{' '}
                <Link
                  target="_blank"
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                >
                  {' '}
                  https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                </Link>
                ;
              </li>
              <li>
                Edge:{' '}
                <Link
                  target="_blank"
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                >
                  {' '}
                  https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09
                </Link>
                ;and
              </li>
              <li>
                Brave:{' '}
                <Link
                  target="_blank"
                  href="https://support.brave.com/hc/en-us/articles/360050634931-How-Do-I-Manage-Cookies-In-Brave-"
                >
                  {' '}
                  https://support.brave.com/hc/en-us/articles/360050634931-How-Do-I-Manage-Cookies-In-Brave-
                </Link>
                ;
              </li>
            </ul>

            <h3>
              <u>How We Use the Information We Collect:</u>
            </h3>
            <p>
              We will collect and use your personal information solely for
              fulfilling the purposes detailed below, unless we obtain your
              consent or as required by law. Upon notice to us, you may
              discontinue use of the Site and revoke consent for the use or
              dissemination of your data or personal information. We may combine
              PII, Non-PII and information from external sources and use your
              information to do the following:
            </p>
            <ol>
              <li>Communicate with you;</li>
              <li>Provide you with our services;</li>
              <li>Obtain your feedback on our Site and service offerings;</li>
              <li>Offer you additional related services;</li>
              <li>Statistically analyze user behavior and activity;</li>
              <li>
                Advertise and deliver content relevant to your interests on the
                Site and third-party sites;
              </li>
              <li>Provide, troubleshoot and improve our Services;</li>
              <li>Comply with legal obligations;</li>
              <li>Prevent fraudulent activity;</li>
              <li>Improve security;</li>
              <li>
                Authenticate your identity when you sign-in to use our services;
                and
              </li>
              <li>
                Protect against misuse or abuse of our Services and ensure
                compliance with the Terms of Use and this Privacy Policy.
              </li>
            </ol>
            <p>
              We may use your information to communicate with you about our
              Services and to give you offers for third party products and
              services that we think may be of use to you. You can manage your
              privacy and choices with respect to such communications and usage
              of information. See applicable use and disclosure consents.
            </p>

            <p>
              The Site and/or Services may use Google Analytics and similar web
              analytics services. Google Analytics is used to track unregistered
              users on the Site and/or Services, to record multiple visits by
              unregistered users to the Site and/or Services, and to record all
              the pages that unregistered users visit at the Site and/or
              Services. If and when an unregistered user registers with the Site
              and/or Services, all of his or her previous visits and activity on
              the Site and/or Services will be associated with his or her
              registered user profile. Google Analytics tracks registered users’
              visits to the Site and/or Services whenever they return.
            </p>

            <p>
              The Site and/or Services use Google Analytics to track, collect,
              or upload any data that personally identifies an individual (such
              as a name, address, or billing information), or other data that
              can reasonably be linked to such information by Google.
            </p>
            <p>
              The Site and/or Services may use all features of Google Analytics
              for Display Advertisers including obtaining specific visitor
              cookie data, such as the source, medium, and keyword used to visit
              the Site and/or Services.
            </p>
            <p>
              The Site and/or Services may use remarketing with Google Adwords
              and analytics to display content-specific advertisements to users
              who previously visited the Site and/or Services when those users
              go to other websites that have Google Display Network implemented.
            </p>
            <p>
              The Site and/or Services and other third-party vendors, including
              Google, use first-party cookies (such as the Google Analytics
              cookie) and third-party cookies (such as the DoubleClick cookie)
              together to inform, optimize, and serve ads based on users’ past
              visits to the Site and/or Services.
            </p>

            <p>
              You can opt-out of Google Analytics for Display Advertising and
              customize Google Display Network ads using Google’s Ads Settings.
            </p>
            <p>
              You can also opt-out of Google Analytics for Display Advertising,
              to prevent your data from being used by Google Analytics, by going
              to the Google Analytics opt-out page.
            </p>
            <h3>
              <u>Who We Share Your Information With:</u>
            </h3>
            <p>
              We will share information you provide with the IRS as part of our
              services and your tax filings. In addition, we may share or
              transfer information you provide to us or that we collect on the
              Site with other businesses that we acquire, are acquired by, or
              with which we merge or partner. In the course of doing business,
              we may share your information with third parties with whom we
              contract to support our activities, including maintaining and
              managing our end-user information. We may also determine we need
              to share your information with law enforcement to (a) comply with
              the law or with legal process, (b) protect and defend our rights
              and property, (c) protect against misuse or unauthorized use of
              the Site, (d) protect the personal safety or property of our users
              or the public, or (e) in the event of bankruptcy proceedings.
            </p>

            <p>
              We may share your information with third party service providers
              who provide services on our behalf. We may employ independent
              companies or other third parties and individuals to help us
              provide, facilitate, or improve our Service (such as customer
              service support). They are permitted to use data only for the
              purpose of performing services on our behalf or at an aggregate
              level. Service providers are required to implement reasonable
              privacy and information protection controls to maintain the
              privacy and security of information provided to them consistent
              with the privacy practices outlined in this policy. Service
              providers may include companies that assist us with our
              advertising, marketing and sales efforts, help us with our
              technology offerings and help us run our business. You can manage
              your privacy and settings with respect to such communications and
              usage of information. See applicable use and disclosure consents.
            </p>
            <h3>
              <u>Retention of Your Information:</u>
            </h3>
            <p>
              We will only maintain PII for as long as necessary for the
              fulfillment of our Services or as mandated by the IRS. We do not
              store your credit card information, but rather pass it to a
              third-party payment processor and reference it via tokenization
              for your protection. We do not request or store any of your
              financial information, such as your bank routing or account
              numbers, or your debit or credit card account numbers.
            </p>

            <p>
              We may retain your questions and feedback in order to improve the
              Site. Do not send us any information, ideas, suggestions,
              proposals or comments that you consider confidential or that you
              wish to be treated as confidential. If you no longer want us to
              use or retain the PII you provided to us, you may contact us at{' '}
              <Link href="mailto:support@extension.tax">
                support@extension.tax
              </Link>{' '}
              and request that we delete your PII from our records. We will
              honor your PII deletion requests except with respect to
              information we may be required by law to retain.
            </p>
            <h3>
              <u>Third Party Privacy Practices:</u>
            </h3>
            <p>
              The Site may contain links to websites owned by third parties and
              third party advertisements. This Policy applies only to the Site
              and its content, and our collection and use of information
              provided through the Site. Your use of third party sites and
              content may be governed by such third party’s terms of use or
              privacy policies. Please review any third-party privacy policies
              before providing your information on any third-party site. We are
              not liable for or responsible for your use of third party sites or
              third party content.
            </p>
            <h3>
              <u>Security:</u>
            </h3>
            <p>
              We employ encryption and undertake other security measures to
              protect all information, including PII, from unauthorized or
              accidental access, disclosure, misuse or processing, or from
              alteration, destruction, or loss; however, because no security
              measures are perfect or impenetrable, we cannot guarantee the
              security of information you submit to us. We are not responsible
              for any unauthorized access to your material at or allowed by the
              IRS or a third party.
            </p>
            <h3>
              <u>Children’s Privacy:</u>
            </h3>
            <p>
              Because protecting the privacy of young children is especially
              important, we do not knowingly collect or maintain information
              from or about persons under 18 years of age. No part of our Site
              is structured to attract anyone under 18. If you are under 18, do
              not use or access the Site at any time or in any manner. If we
              learn that PII of persons under 18 has been collected on the Site
              without verified parental consent, we will take appropriate steps
              to delete this information. If you believe that we might have any
              information from a child under 18, please contact us at{' '}
              <span>
                <Link href="mailto:support@extension.tax">
                  support@extension.tax
                </Link>
              </span>
              .
            </p>
            <h3>
              <u>Changes to Our Privacy Policy:</u>
            </h3>
            <p>
              We may modify or update this Privacy Policy from time to time to
              reflect the changes in our business and practices. You should
              check our websites frequently to see recent changes. When we
              change the policy in a material manner, we will update the ‘last
              modified’ date at the bottom of this page. If you object to any
              changes, you may close your account. Continuing to use our
              Services after we publish changes to this Privacy Policy means
              that you are consenting to the changes.
            </p>
            <h3>
              <u>International Users:</u>
            </h3>
            <p>
              The Site is hosted in the United States and is intended for U.S.
              tax-filers and users in the U.S. only. It is not intended to
              solicit data or information from residents in other countries or
              regions of the world. If you are a consumer accessing the Site
              from the European Union, Asia, or any other region with laws or
              regulations governing personal data collection, use and disclosure
              that differ from U.S. laws, your continued use of the Site, which
              is governed by U.S. law and these terms, indicates your consent to
              transfer of your PII and other information to the U.S.
            </p>
            <h3>
              <u> California Privacy Rights (for California residents only):</u>
            </h3>
            <p>
              Under California’s “Shine the Light” law, California residents who
              provide personal information in obtaining products or services for
              personal, family, or household use are entitled to request and
              obtain from us once a calendar year information about the customer
              information we shared, if any, with other businesses for their own
              direct marketing uses. If applicable, this information would
              include the categories of customer information and the names and
              addresses of those businesses with which we shared that
              information for the immediately prior calendar year (e.g. requests
              made in 2022 will receive information regarding 2021 sharing
              activities). To obtain this information, please send an email
              message to{' '}
              <span>
                <Link href="mailto:support@extension.tax">
                  support@extension.tax
                </Link>
              </span>{' '}
              requesting{' '}
              <Link target="_blank" href="/">
                extension.tax
              </Link>{' '}
              provide its third-party information sharing disclosures required
              by section 1798.83 of the California Civil Code. Please also
              provide your name, address and email address. We will provide the
              requested information to you at your e-mail address in response.
              Please be aware that not all information sharing is covered by the
              “Shine the Light” requirements and only information on covered
              sharing will be included in our response.
            </p>

            <p>
              The California Consumer Privacy Act (the “CCPA”) provides certain
              rights to California residents regarding their PII. A California
              resident has the right to request that we disclose certain
              information, including: (1) the categories of PII we have
              collected about that California resident, (2) the categories of
              sources from which the PII is collected, (3) the business or
              commercial purpose for collecting or selling the PII, (4) the
              categories of third parties with whom we share PII, (5) the
              specific pieces of PII it has collected about that resident, and
              (6) the categories of PII that we have sold about that resident
              and the categories of third parties to whom that information was
              sold. A California resident has the right to request that we
              delete his/her PII. A California resident also has a right to
              “opt-out” of the sale of that resident’s PII. Finally, a
              California resident has the right not to be discriminated against
              for exercising his/her privacy rights under the CCPA; provided,
              however, that the CCPA does not prohibit us from offering
              financial incentives, different prices, rates, levels or qualities
              of goods or services for the collection of PII if that price or
              difference is directly related to the value provided by the
              consumer’s data. You can change your PII by emailing us at{' '}
              <span>
                <Link href="mailto:support@extension.tax">
                  support@extension.tax
                </Link>
              </span>
              .
            </p>
            <p>
              Pursuant to California Civil Code Section 1789.3, California users
              are entitled to the following consumer rights notice: California
              residents may reach the Complaint Assistance Unit of the Division
              of Consumer Services for the California Department of Consumer
              Affairs by mail at 1625 North Market Blvd., Sacramento, CA 95834,
              or by telephone at (916) 445-1254 or (800) 952-5210.
            </p>
            <h3>
              <u>Contact Information and Opt Out Procedures:</u>
            </h3>
            <p>
              If you have any questions regarding PII, how we treat PII pursuant
              to this Policy, or our use of cookies and third party technologies
              in connection with the Site, we encourage you to contact us at{' '}
              <span>
                <Link href="mailto:support@extension.tax">
                  support@extension.tax
                </Link>
              </span>
              .
            </p>

            <p>
              If you no longer wish to use our Site and to revoke your consent
              to either our use of cookies or the use of your PII, please
              contact{' '}
              <span>
                <Link href="mailto:support@extension.tax">
                  support@extension.tax
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy
