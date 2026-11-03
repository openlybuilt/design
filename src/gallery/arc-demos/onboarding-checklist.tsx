import { OnboardingChecklist } from "@/vendor/arc/onboarding-checklist/onboarding-checklist";

export function GettingStarted() {
  return (
    <OnboardingChecklist
      title="Set up your workspace"
      defaultCompleted={[]}
      
      steps={[
        { id: "invite", title: "Invite your team", actionLabel: "Invite", onAction: () => {} },
        { id: "connect", title: "Connect GitHub", description: "Sync issues and PRs.", actionLabel: "Connect", onAction: () => {} },
        { id: "profile", title: "Add a profile photo" },
      ]}
    />
  );
}
