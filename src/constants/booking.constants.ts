export enum TransactionStatus {
  COMPLETED = 'completed',
  PENDING = 'pending',
  PROCESSING = 'processing',
}

export const TRANSACTION_STATUS_LABELS: Record<TransactionStatus, string> = {
  [TransactionStatus.COMPLETED]: 'Completed',
  [TransactionStatus.PENDING]: 'Pending',
  [TransactionStatus.PROCESSING]: 'Processing',
};

export enum CancellationPolicyType {
  FLEXIBLE = 'flexible',
  MODERATE = 'moderate',
  STRICT = 'strict',
}

export const CANCELLATION_POLICY_LABELS: Record<CancellationPolicyType, string> = {
  [CancellationPolicyType.FLEXIBLE]: 'Flexible',
  [CancellationPolicyType.MODERATE]: 'Moderate',
  [CancellationPolicyType.STRICT]: 'Strict',
};
