<!-- Cookies Popup -->
<div class="cookie-popup">
      <h3>Cookies Policy</h3>
      <p>
        Our website uses cookies. This helps us provide you with a good
        experience on our website. To see what cookies we use and what they do,
        and to opt-in on non-essential cookies click "change settings". For a
        detailed explanation, click on "Privacy Policy" otherwise click "Accept
        Cookies" to enter.
      </p>
      <div class="cookie-buttons">
        <button class="settings" onClick="openSettings()">
          Change Settings
        </button>
        <button class="accept" onClick="acceptCookies()">Accept Cookies</button>
      </div>
    </div>
    <div id="cookie-overlay"></div>
    <!-- /Cookies Popup -->
    <!-- Cookies Settings -->
    <div id="cookie-settings">
      <div class="settings-wrapper col-8 my-4">
        <h2>Cookies Preferences</h2>
        <p>
          Netmatters uses cookies on their website. Cookies are small text files
          that are stored on your computer or other device by websites that you
          visit. This page explains the cookies we use and what we use them for,
          and lets you turn them on or off. (Some cookies are necessary in order
          for our website to work properly.) We also explain below which other
          companies use cookies on our website and what they use them for, and
          lets you turn those other companies' cookies on or off.
        </p>
        <p>
          Our website uses cookies in order to make the website easier to use,
          to support the provision of information and functionality to you, as
          well as to provide us with information about how the website is used
          so that we can make sure it is as up to date, relevant and error free
          as we can. We also use cookies to try to ensure that our online
          adverts reflect the interests of web users. Further information about
          the types of cookies that are used on our website is set out box
          below.
        </p>
        <p>
          As well as the options provided below, you can choose to restrict or
          block cookies through your browser settings at any time. For more
          information about how to do this, and about cookies in general, you
          can visit www.cookiepedia.co.uk and www.youronlinechoices.eu. However,
          please be aware that restricting or blocking cookies set on our
          website may impact the functionality or performance of the website, or
          prevent you from using certain services provided through the website
        </p>
        <p>
          Please note that third parties (including, for example, advertising
          networks and providers of external services like website analysis
          services) may also use cookies, over which we have no control,
          although we may receive services from these third parties (including,
          for example, for targeted advertising purposes and website analytics).
          These cookies are likely to be performance cookies or targeting
          cookies (as described below).
        </p>
        <h1 class="my-3">Functional Cookies</h1>
        <p>
          Functional cookies allow our website to remember choices you make,
          such as your user name, log in details or language preferences, and
          any customisations you make to pages on our website during your visit.
        </p>
        <p><strong>Examples of how we use these cookies include:</strong></p>
        <ul>
          <li>Live chat</li>
        </ul>
        <div class="buttons">
          <button class="active-btn" id="func-dis" onClick="funcButtons()">
            Disable
          </button>
          <button class="inactive-btn" id="func-ena" onClick="funcButtons()">
            Enable
          </button>
        </div>
        <h1 class="p-a">Performance & Analytics</h1>
        <p>
          These cookies help us understand how people use our website. They
          collect information such as which pages on our website visitors go to
          most often, which features they use, and which websites people have
          visited before they visit ours. We use this information to improve our
          website and provide a better user experience.
        </p>
        <p><strong>Examples of how we use these cookies include:</strong></p>
        <ul>
          <li>
            Monitoring and providing statistics on how our website is used.
          </li>
          <li>
            Helping us improve our website by measuring any errors that occur
          </li>
          <li>Testing the website's design and operability</li>
        </ul>
        <div class="buttons">
          <button class="active-btn" id="pref-dis" onClick="prefButtons()">
            Disable
          </button>
          <button class="inactive-btn" id="pref-ena" onClick="prefButtons()">
            Enable
          </button>
        </div>
        <p>
          Different web browsers may use different methods for managing cookies.
          Please follow the instructions below, from the web browser
          manufacturers directly, to configure your browser settings*.
        </p>
        <ul>
          <li><a href="#">Microsoft Edge</a></li>
          <li>Google Chrome</li>
          <li>Safari</li>
          <li>Firefox</li>
          <li>Opera</li>
        </ul>
        <button
          class="settings-btn-1 details-btn"
          onClick="openDetails()"
          id="detail-btn"
        >
          Show Detailed Preferences
        </button>
        <table id="detailed-preferences">
          <thead>
            <tr>
              <th colspan="50">Company</th>
              <th colspan="150">Domain</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="50">
                <span class="pointer" onClick="hotSpan()">
                  <span id="hotPM">+</span>
                  <span>Hotjar Ltd</span>
                </span>
              </td>
              <td colspan="50">hotjar.com</td>
              <td colspan="50">
                <div class="buttons">
                  <button
                    class="active-btn"
                    id="hot-dis"
                    onClick="hotButtons()"
                  >
                    Disable
                  </button>
                  <button
                    class="inactive-btn"
                    id="hot-ena"
                    onClick="hotButtons()"
                  >
                    Enable
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="200" class="expanded row-disabled" id="hotRow">
                <div class="flex"></div>
                <a
                  class="settings-btn-1"
                  href="https://www.hotjar.com/legal/policies/terms-of-service/"
                >
                  Terms & Conditions
                </a>
                <a
                  class="settings-btn-1"
                  href="https://www.hotjar.com/legal/policies/privacy/"
                >
                  Privacy Policy
                </a>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td colspan="50">
                <span class="pointer" onClick="linSpan()">
                  <span id="linPM">+</span>
                  <span>LinkedIn Corporation</span>
                </span>
              </td>
              <td colspan="50">licdn.com</td>
              <td colspan="50">
                <div class="buttons">
                  <button
                    class="active-btn"
                    id="lin-dis"
                    onClick="linButtons()"
                  >
                    Disable
                  </button>
                  <button
                    class="inactive-btn"
                    id="lin-ena"
                    onClick="linButtons()"
                  >
                    Enable
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="200" class="expanded row-disabled" id="linRow">
                <div class="flex"></div>
                <a
                  class="settings-btn-1"
                  href="https://www.linkedin.com/legal/user-agreement"
                >
                  Terms & Conditions
                </a>
                <a
                  class="settings-btn-1"
                  href="https://www.linkedin.com/legal/privacy-policy"
                >
                  Privacy Policy
                </a>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td colspan="50">
                <span class="pointer" onClick="fbSpan()">
                  <span id="fbPM">+</span>
                  <span>Facebook Inc.</span>
                </span>
              </td>
              <td colspan="50">facebook.com, facebook.net</td>
              <td colspan="50">
                <div class="buttons">
                  <button class="active-btn" id="fb-dis" onClick="fbButtons()">
                    Disable
                  </button>
                  <button
                    class="inactive-btn"
                    id="fb-ena"
                    onClick="fbButtons()"
                  >
                    Enable
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="200" class="expanded row-disabled" id="fbRow">
                <div>
                  Facebook is an online social networking service that enables
                  its users to connect with friends and family as well as make
                  new connections.
                </div>
                <div class="flex"></div>
                <a
                  class="settings-btn-1"
                  href="https://www.facebook.com/legal/terms/update"
                >
                  Terms & Conditions
                </a>
                <a
                  class="settings-btn-1"
                  href="https://www.facebook.com/about/privacy/update"
                >
                  Privacy Policy
                </a>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td colspan="50">
                <span class="pointer" onClick="gogSpan()">
                  <span id="gogPM">+</span>
                  <span>Google Inc.</span>
                </span>
              </td>
              <td colspan="50">
                google.com, googletagmanager.com, google-analytics.com
              </td>
              <td colspan="50">
                <div class="buttons">
                  <button
                    class="active-btn"
                    id="gog-dis"
                    onClick="gogButtons()"
                  >
                    Disable
                  </button>
                  <button
                    class="inactive-btn"
                    id="gog-ena"
                    onClick="gogButtons()"
                  >
                    Enable
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="200" class="expanded row-disabled" id="gogRow">
                <div class="flex"></div>
                <a
                  class="settings-btn-1"
                  href="https://policies.google.com/terms?fg=1"
                >
                  Terms & Conditions
                </a>
                <a
                  class="settings-btn-1"
                  href="https://policies.google.com/privacy?fg=1"
                >
                  Privacy Policy
                </a>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td colspan="50">
                <span class="pointer" onClick="forSpan()">
                  <span id="forPM">+</span>
                  <span>Lead Forensics</span>
                </span>
              </td>
              <td colspan="50">https://www.leadforensics.com/</td>
              <td colspan="50">
                <div class="buttons">
                  <button
                    class="active-btn"
                    id="for-dis"
                    onClick="forButtons()"
                  >
                    Disable
                  </button>
                  <button
                    class="inactive-btn"
                    id="for-ena"
                    onClick="forButtons()"
                  >
                    Enable
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="200" class="expanded row-disabled" id="forRow">
                <div>
                  Netmatters use a paid for software on our website which allows
                  us access to information on the company you work for. This is
                  done through the business' registered IP address and only
                  allows us access to the information such as contact details,
                  year founded, SIC codes and other information about the
                  business. It also records the behaviour of the user from the
                  company on the website, such as page views, time on the site,
                  "goals" completed and other similar metrics. We use this data
                  to help us improve lead generation through the website as this
                  tool allows us access to see which businesses have visited the
                  website but have not converted by calling, emailing or sending
                  a contact form.
                </div>
                <div class="flex"></div>
                <a
                  class="settings-btn-1"
                  href="https://www.leadforensics.com/terms-of-service/"
                >
                  Terms & Conditions
                </a>
                <a
                  class="settings-btn-1"
                  href="https://www.leadforensics.com/privacy-policy/"
                >
                  Privacy Policy
                </a>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td colspan="50">
                <span class="pointer" onClick="ntmSpan()">
                  <span id="ntmPM">+</span>
                  <span>3CX</span>
                </span>
              </td>
              <td colspan="50">https://netmatters.co.uk/</td>
              <td colspan="50">
                <div class="buttons">
                  <button
                    class="active-btn"
                    id="ntm-dis"
                    onClick="ntmButtons()"
                  >
                    Disable
                  </button>
                  <button
                    class="inactive-btn"
                    id="ntm-ena"
                    onClick="ntmButtons()"
                  >
                    Enable
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="200" class="expanded row-disabled" id="ntmRow">
                <div></div>
                Personal data to be processed and for the use of cookies in
                order to engage in a chat processed by Netmatters, for the
                purpose of Chat/Support for the time of 30 day(s) as per the
                GDPR.
              </td>
            </tr>
          </tbody>
        </table>
        <div class="settings-bot-btns">
          <button class="settings-btn-1" onClick="cookieMessage()">
            Cancel
          </button>
          <button class="settings-btn-2" onClick="acceptCookies()">
            Continue to Website
          </button>
        </div>
      </div>
    </div>
    <!-- /Cookies Settings -->