export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  content: string;
  timestamp: string;
  /** Whether the message belongs to the currently authenticated user */
  isOwn: boolean;
  createdAt: Date;
}
