import { useRef } from "react";
import { CookieConsent, type CookieConsentHandle } from "@/vendor/arc/cookie-consent/cookie-consent";

export function Consent() {
  const consent = useRef<CookieConsentHandle>(null);
  return (
    <div className="consent-preview">
      <CookieConsent
        ref={consent}
        strategy="absolute"
        storageKey="virela-gallery-cookie-demo"
        policy={{ label: "Cookie policy", href: "#" }}
        
      />
      <button className="save" type="button" onClick={() => consent.current?.openPreferences()}>Cookie settings</button>
    </div>
  );
}
