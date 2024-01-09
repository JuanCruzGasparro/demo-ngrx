export class Timestamps {
  createdAt?: string;
  updatedAt?: string;

  constructor() {
    const now = new Date().toISOString();
    this.createdAt = now;
    this.updatedAt = now;
  }

  updateTimestamp?(): void {
    this.updatedAt = new Date().toISOString();
  }
}
