export interface Conversation {
  id: string;
  /** ID of the other participant (from the current user's perspective) */
  userId: string;
  userName: string;
  userAvatar?: string;
  isOnline: boolean;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  /** Associated booking, if the conversation is tied to one */
  bookingId?: string;
  createdAt: Date;
  updatedAt: Date;
}
