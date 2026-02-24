export interface BackendUser {
    id: string;
    publicKey: string;
    createdAt: string;
    updatedAt: string;
}

export interface BackendStreamEvent {
    id: string;
    streamId: string;
    eventType: string;
    data: string;
    createdAt: string;
}

export interface BackendStream {
    id: string;
    streamId: number;
    sender: string;
    recipient: string;
    tokenAddress: string;
    ratePerSecond: string;
    depositedAmount: string;
    withdrawnAmount: string;
    startTime: number;
    lastUpdateTime: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    senderUser?: BackendUser;
    recipientUser?: BackendUser;
    events?: BackendStreamEvent[];
}
