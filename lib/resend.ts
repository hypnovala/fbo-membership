type SendEmailArgs = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

type ResendSendResponse = {
  data: { id: string } | null;
  error: { message: string } | null;
};

export class Resend {
  private readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  emails = {
    send: async (payload: SendEmailArgs): Promise<ResendSendResponse> => {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const json = (await response.json().catch(() => null)) as
          | { id?: string; error?: { message?: string } }
          | null;

        if (!response.ok) {
          return {
            data: null,
            error: { message: json?.error?.message ?? "Resend request failed" },
          };
        }

        return {
          data: { id: json?.id ?? "" },
          error: null,
        };
      } catch (error) {
        return {
          data: null,
          error: {
            message: error instanceof Error ? error.message : "Unexpected Resend request error",
          },
        };
      }
    },
  };
}
