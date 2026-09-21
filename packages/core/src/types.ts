// === Users & Identity ===

export interface User {
  id: string;
  privateUsername: string;
  passwordHash: string;
  captchaVerified: boolean;
  createdAt: Date;
}

export interface GroupProfile {
  id: string;
  userId: string;
  groupId: string;
  publicUsername: string;
  selfDescription: string;
  profilePhotoUrl: string | null;
  selfVouchText: string;
  createdAt: Date;
}

// === Groups & Membership ===

export interface Group {
  id: string;
  name: string;
  principlesChatId: string;
  settings: GroupSettings;
  createdAt: Date;
}

export type MemberTier = 'probationary' | 'full' | 'provisional' | 'removed';

export interface GroupMember {
  userId: string;
  groupId: string;
  tier: MemberTier;
  joinedAt: Date;
  probationEndsAt: Date | null;
  removedAt: Date | null;
}

// === Vouching ===

export interface VouchRequest {
  id: string;
  candidateId: string;
  groupId: string;
  requiredVouches: number;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
}

export interface Vouch {
  id: string;
  voucherId: string;
  candidateId: string;
  groupId: string;
  judgmentType: 'binary' | 'degrees';
  judgmentValue: number;
  reasoning: string;
  createdAt: Date;
}

// === Chats & Messages ===

export type ChatType = 'input' | 'output' | 'relay';

export interface Chat {
  id: string;
  groupId: string;
  type: ChatType;
  pairedChatId: string | null;
  settings: ChatSettings;
  createdAt: Date;
}

export interface Message {
  id: string;
  chatId: string;
  authorId: string;
  ciphertext: string; // E2EE: encrypted content
  createdAt: Date;
  parentMessageId: string | null;
}

// === Judgments & Scoring ===

export type JudgmentType = 'binary' | 'degrees';

export interface Judgment {
  id: string;
  messageId: string;
  judgeId: string;
  type: JudgmentType;
  value: number; // 0=down/1=up for binary; 1-10 for degrees
  reasoning: string;
  createdAt: Date;
}

export interface ProposalScore {
  messageId: string;
  greenScore: number;
  redScore: number;
  judgmentCount: number;
  chainDepth: number;
  lastUpdated: Date;
}

// === Disputes ===

export type DisputeStatus =
  | 'active'
  | 'resolved_accused_concedes'
  | 'resolved_challenger_concedes'
  | 'cancelled';

export interface Dispute {
  id: string;
  challengerId: string;
  accusedId: string;
  groupId: string;
  complaintMessageId: string;
  status: DisputeStatus;
  createdAt: Date;
  resolvedAt: Date | null;
}

export interface SoftLock {
  id: string;
  userId: string;
  disputeId: string;
  lockedAt: Date;
  unlockedAt: Date | null;
}

// === Federation ===

export type FederationStatus = 'connected' | 'federated' | 'de_federated';

export interface FederationRelationship {
  id: string;
  groupAId: string;
  groupBId: string;
  status: FederationStatus;
  createdAt: Date;
}

export interface SharedChat {
  id: string;
  federationRelationshipId: string;
  settings: ChatSettings;
  createdAt: Date;
}

// === Settings ===

export interface ChatSettings {
  name: string;
  chatIcon: string | null;
  canRetractMessages: boolean;
  displayUserInInput: boolean;
  publishToFederatedOutputs: string[];
  displayUserInOutput: boolean;
  onlyShowGreenProposals: boolean;
  outputAsChecklist: boolean;
  checklistResettable: boolean;
  visibleToProspective: boolean;
  prospectivePromptText: string;
  prospectiveContinueText: string;
  visibleToExternalWebsite: boolean;
  externalWebsiteUrl: string | null;
  externalWebsiteApiKey: string | null;
  visibleToFederatedGroups: string[];
  acceptPublishingFromFederated: string[];
  resetConsentOnFederatedPublish: boolean;
}

export interface GroupSettings {
  name: string;
  icon: string | null;
  requiredVouches: number;
  probationMonths: number;
  vouchRefreshDays: number | null;
  vouchTimingRestrictionDays: number;
  requiredFederationVouches: number;
  chatOrderingSchemes: ChatOrderingScheme[];
}

export interface ChatOrderingScheme {
  name: string;
  ordering: { chatId: string; position: number }[];
  headings: { name: string; position: number }[];
}

export interface UserSettings {
  pushNotifications: boolean;
  perChatNotifications: Record<string, boolean>;
  // messagePreview: ALWAYS false. Hard security constraint, not stored.
}
