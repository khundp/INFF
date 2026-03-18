(function () {
  var footerHtml = `<footer class="portal-footer">
  <div class="footer-container">
    <div class="footer-col footer-brand">
      <div class="footer-logos">
        <img src="assets/images/Nigeria_Gov_Logo.png" alt="Nigeria Government Logo">
        <img src="assets/images/SDGs_Nigeria_office_Logo.png" alt="OSSAP SDGs Logo">
        <img src="assets/images/EU_Flag.png" alt="European Union Logo">
        <img src="assets/images/UNDP-Logo-Blue.png" alt="UNDP Logo">
      </div>
      <p><strong>Nigeria Integrated National Financing Framework</strong> dashboard provides a consolidated view of Nigeria’s financing landscape across public, private and international resources.</p>
    </div>

    <div class="footer-col">
      <h4>BUILDING BLOCKS</h4>
      <ul>
        <li><a href="building-blocks.html">Assessment &amp; Diagnostics</a></li>
        <li><a href="p2-sources.html">Integrated Financing Strategy</a></li>
        <li><a href="p3-review.html">Performance &amp; Reviews</a></li>
        <li><a href="p4-architecture.html">Governance &amp; Coordination</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>QUICK LINKS</h4>
      <ul>
        <li><a href="p1-gap.html">View Financing Gaps</a></li>
        <li><a href="p2-reforms.html">Track Reforms</a></li>
        <li><a href="downloads.html">Latest INFF Updates</a></li>
        <li><a href="p3-results.html">Subnational SDG Scorecards</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>CONTACT</h4>
      <ul class="footer-contact">
        <li><a href="mailto:inff@nigeria.gov.ng">inff@nigeria.gov.ng</a></li>
        <li>Abuja, Nigeria</li>
      </ul>
      <div class="footer-socials">
        <a href="#" aria-label="Website" title="Website" class="fs-ico">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20m6.9 9h-3.02a15.5 15.5 0 0 0-1.18-5.05A8.03 8.03 0 0 1 18.9 11M12 4.04c.83 1.2 1.78 3.42 1.97 6.96h-3.94c.19-3.54 1.14-5.76 1.97-6.96M9.3 5.95A15.5 15.5 0 0 0 8.12 11H5.1A8.03 8.03 0 0 1 9.3 5.95M4.58 13h3.54c.14 1.88.58 3.66 1.18 5.05A8.03 8.03 0 0 1 4.58 13M12 19.96c-.83-1.2-1.78-3.42-1.97-6.96h3.94c-.19 3.54-1.14 5.76-1.97 6.96M14.7 18.05c.6-1.39 1.04-3.17 1.18-5.05h3.54a8.03 8.03 0 0 1-4.72 5.05"/></svg>
        </a>
        <a href="#" aria-label="Facebook" title="Facebook" class="fs-ico">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.3 0-1.3-.1-2.4-.1c-2.4 0-4 1.4-4 4.1V11H8v3h2.9v8z"/></svg>
        </a>
        <a href="#" aria-label="X" title="X" class="fs-ico">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.9 3H21l-6.6 7.5L22 21h-6l-4.7-6.2L5.8 21H3.7l7-8L2 3h6.2l4.2 5.7zM17 19h1.7L7 4.9H5.2z"/></svg>
        </a>
        <a href="#" aria-label="LinkedIn" title="LinkedIn" class="fs-ico">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1M5.5 9.7h2.9V19H5.5zm4.8 0h2.8v1.3h.04c.39-.74 1.34-1.52 2.76-1.52c2.95 0 3.49 1.94 3.49 4.45V19h-2.9v-4.49c0-1.07-.02-2.45-1.49-2.45c-1.5 0-1.73 1.17-1.73 2.37V19h-2.9z"/></svg>
        </a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">© 2025 Nigeria INFF Dashboard • All Rights Reserved</div>
</footer>
`;
  function loadSharedFooter() {
    var hosts = document.querySelectorAll('[data-include="footer.html"]');
    if (!hosts.length) return;
    hosts.forEach(function(host) {
      host.innerHTML = footerHtml;
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSharedFooter);
  } else {
    loadSharedFooter();
  }
})();