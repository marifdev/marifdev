"use client";

type EventNames =
  | "click_contact"
  | "click_about"
  | "click_social_link"
  | "form_submit"
  | "click_project_link";

type EventParams = {
  category?: string;
  label?: string;
  value?: number;
  error?: string;
};

interface AnalyticsEvent extends EventParams {
  eventName: EventNames;
}

declare global {
  interface Window {
    gtag: (
      command: "event",
      eventName: string,
      params: EventParams
    ) => void;
  }
}

const useAnalytics = () => {
  const trackEvent = ({ eventName, ...params }: AnalyticsEvent) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, params);
    }
  };

  return { trackEvent };
};

export default useAnalytics; 