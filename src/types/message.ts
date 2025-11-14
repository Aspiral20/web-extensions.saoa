export type Message = {
  id: string;
  text: string;
  tags?: string[];
  createdAt: string;
};

export type MessagePayload = {
  text: string;
  tags?: string[];
};

