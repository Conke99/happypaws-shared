// ─── Client Notification Settings ───────────────────────────────────────────

export interface ClientEmailNotifications {
  bookingRequests: boolean;
  confirmations: boolean;
  reminders: boolean;
  messages: boolean;
  receipts: boolean;
  offers: boolean;
}

export interface ClientPushNotifications {
  messages: boolean;
  bookings: boolean;
  reminders: boolean;
}

export interface ClientSmsNotifications {
  criticalOnly: boolean;
}

export interface ClientNotificationSettings {
  email: ClientEmailNotifications;
  push: ClientPushNotifications;
  sms: ClientSmsNotifications;
}

// ─── Sitter Notification Settings ────────────────────────────────────────────

export interface SitterEmailNotifications {
  bookingRequests: boolean;
  confirmations: boolean;
  reminders: boolean;
  messages: boolean;
  payments: boolean;
  reviews: boolean;
  weeklySummary: boolean;
}

export interface SitterPushNotifications {
  requests: boolean;
  messages: boolean;
  updates: boolean;
}

export interface SitterSmsNotifications {
  critical: boolean;
}

export interface SitterNotificationSettings {
  email: SitterEmailNotifications;
  push: SitterPushNotifications;
  sms: SitterSmsNotifications;
}

// ─── Privacy Settings ─────────────────────────────────────────────────────────

export interface PrivacySettings {
  /** 'public' | 'private' | 'contacts-only' */
  profileVisibility: string;
  showInSearch: boolean;
  /** 'visible' | 'hidden' */
  bookingHistory: string;
  showLastActive: boolean;
  /** 'everyone' | 'verified-sitters' | 'hidden' */
  phoneVisibility: string;
}

// ─── Communication Settings ───────────────────────────────────────────────────

export interface CommunicationSettings {
  /** 'in-app' | 'email' | 'sms' */
  preferredMethod: string;
  /** e.g. '1-hour' | '3-hours' | '24-hours' */
  responseTime: string;
  autoReply: boolean;
  autoReplyMessage: string;
  autoDecline: boolean;
  requirePetInfo: boolean;
}

// ─── Language & Locale Settings ───────────────────────────────────────────────

export interface LanguageSettings {
  /** e.g. 'en', 'es', 'fr' */
  language: string;
  /** e.g. 'MM/DD/YYYY' | 'DD/MM/YYYY' */
  dateFormat: string;
  /** '12h' | '24h' */
  timeFormat: string;
  /** e.g. 'USD' */
  currency: string;
  /** e.g. 'America/New_York' */
  timezone: string;
}

// ─── Security Settings ────────────────────────────────────────────────────────

export interface ActiveSession {
  id: string;
  device: string;
  current: boolean;
  lastActive?: string;
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  loginAlerts: boolean;
  activeSessions: ActiveSession[];
}
