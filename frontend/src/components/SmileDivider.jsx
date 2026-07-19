/**
 * Signature element: a soft "smile" arc used as a section divider throughout
 * the site, echoing the clinic's "friendly clinic" tagline and dental theme.
 */
export default function SmileDivider({ flip = false, color = "#f7fbff" }) {
  return (
    <div className={`smile-divider ${flip ? "smile-divider--flip" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1200 90" preserveAspectRatio="none">
        <path
          d="M0,0 C 200,90 1000,90 1200,0 L1200,90 L0,90 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
