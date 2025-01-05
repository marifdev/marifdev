"use client";

type EventNames =
  | "click_contact"
  | "click_about"
  | "click_social_link"
  | "form_submit"
  | "click_project_link";

interface AnalyticsEvent {
  eventName: EventNames;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

const useAnalytics = () => {
  const trackEvent = ({ eventName, ...params }: AnalyticsEvent) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName, {
        ...params,
      });
    }
  };

  return { trackEvent };
};

export default useAnalytics; 